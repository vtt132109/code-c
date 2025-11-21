'use server'

import { prisma } from '@/lib/prisma'

// const prisma = new PrismaClient()

const JUDGE0_URL = process.env.JUDGE0_API_URL || 'https://judge0-ce.p.rapidapi.com'
const JUDGE0_KEY = process.env.JUDGE0_API_KEY || ''

async function runJudge0(source_code: string, stdin: string) {
    if (!JUDGE0_KEY && process.env.NODE_ENV === 'development') {
        console.warn('No Judge0 API Key provided. Returning mock response.')
        return {
            stdout: Buffer.from('Mock Output: ' + stdin).toString('base64'),
            stderr: null,
            compile_output: null,
            status: { id: 3, description: 'Accepted' }
        }
    }

    const response = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=true&wait=true`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': JUDGE0_KEY,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
        body: JSON.stringify({
            source_code: Buffer.from(source_code).toString('base64'),
            language_id: 50, // GCC
            stdin: Buffer.from(stdin).toString('base64'),
        }),
    })

    if (!response.ok) {
        throw new Error(`Judge0 error: ${response.statusText}`)
    }

    const result = await response.json()
    return result
}

export async function runCode(code: string, problemId: string) {
    const problem = await prisma.problem.findUnique({
        where: { id: problemId },
        include: {
            testCases: {
                where: { isHidden: false },
                take: 1,
            },
        },
    })

    if (!problem || problem.testCases.length === 0) {
        return { error: 'No test cases found' }
    }

    const testCase = problem.testCases[0]

    try {
        const result = await runJudge0(code, testCase.stdin)

        const stdout = result.stdout ? Buffer.from(result.stdout, 'base64').toString('utf-8') : ''
        const stderr = result.stderr ? Buffer.from(result.stderr, 'base64').toString('utf-8') : ''
        const compile_output = result.compile_output ? Buffer.from(result.compile_output, 'base64').toString('utf-8') : ''

        return {
            stdout,
            stderr: stderr || compile_output,
            status: result.status,
        }
    } catch (e: any) {
        return { error: e.message }
    }
}

export async function submitCode(code: string, problemId: string, userId: string) {
    const problem = await prisma.problem.findUnique({
        where: { id: problemId },
        include: { testCases: true },
    })

    if (!problem) return { error: 'Problem not found' }

    let allPassed = true
    let firstError = null

    for (const tc of problem.testCases) {
        try {
            const result = await runJudge0(code, tc.stdin)
            const stdout = result.stdout ? Buffer.from(result.stdout, 'base64').toString('utf-8').trim() : ''

            if (stdout !== tc.expectedOutput.trim()) {
                allPassed = false
                break
            }
        } catch (e: any) {
            allPassed = false
            firstError = e.message
            break
        }
    }

    try {
        await prisma.submission.create({
            data: {
                code,
                problemId,
                userId,
                status: allPassed ? 'Passed' : 'Failed',
                output: firstError || (allPassed ? 'All tests passed' : 'Wrong Answer'),
            },
        })

        if (allPassed) {
            await prisma.user.update({
                where: { id: userId },
                data: { xp: { increment: 10 } },
            })
        }
    } catch (e) {
        console.error("Database error during submission:", e)
        return { status: allPassed ? 'Passed' : 'Failed', error: 'Database error' }
    }

    return { status: allPassed ? 'Passed' : 'Failed' }
}
