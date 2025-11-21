'use server'

import { prisma } from '@/lib/prisma'

const PISTON_URL = 'https://emkc.org/api/v2/piston/execute'

async function runPiston(source_code: string, stdin: string) {
    try {
        const response = await fetch(PISTON_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                language: 'c',
                version: '*',
                files: [
                    {
                        name: 'main.c',
                        content: source_code
                    }
                ],
                stdin: stdin,
                compile_timeout: 10000,
                run_timeout: 3000,
            }),
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error('Piston API Error:', errorText)
            throw new Error(`Lỗi Piston: ${response.status} - ${response.statusText}`)
        }

        const result = await response.json()
        return result
    } catch (error) {
        console.error('Piston execution error:', error)
        throw error
    }
}

export async function runCode(code: string, problemId: string) {
    const problem = await prisma.problem.findUnique({
        where: { id: problemId },
        include: {
            testCases: true,
        },
    })

    if (!problem || problem.testCases.length === 0) {
        return { error: 'Không tìm thấy test case cho bài này' }
    }

    const testResults = []

    // Run all test cases
    for (const testCase of problem.testCases) {
        try {
            const result = await runPiston(code, testCase.stdin)

            // Piston API returns: { run: { stdout, stderr, code, output } }
            const stdout = result.run?.stdout?.trim() || ''
            const stderr = result.run?.stderr || ''
            const exitCode = result.run?.code || 0
            const compileOutput = result.compile?.stderr || ''
            const expectedOutput = testCase.expectedOutput.trim()

            // Check if compilation failed
            if (compileOutput) {
                return {
                    error: compileOutput,
                    stderr: 'Lỗi biên dịch'
                }
            }

            // Check if there's a runtime error (non-zero exit code)
            if (exitCode !== 0 && stderr) {
                testResults.push({
                    passed: false,
                    input: testCase.stdin,
                    expectedOutput: expectedOutput,
                    actualOutput: stderr || 'Runtime Error',
                    executionTime: 0,
                    timeLimit: problem.timeLimit * 1000,
                    description: 'Runtime Error'
                })
                continue
            }

            // Compare output
            const passed = stdout === expectedOutput
            testResults.push({
                passed,
                input: testCase.stdin,
                expectedOutput: expectedOutput,
                actualOutput: stdout,
                executionTime: 0, // Piston doesn't provide execution time
                timeLimit: problem.timeLimit * 1000,
                description: passed ? 'Accepted' : 'Wrong answer'
            })
        } catch (e: any) {
            testResults.push({
                passed: false,
                input: testCase.stdin,
                expectedOutput: testCase.expectedOutput.trim(),
                actualOutput: 'Error',
                executionTime: 0,
                timeLimit: problem.timeLimit * 1000,
                description: e.message || 'Execution Error'
            })
        }
    }

    return {
        testResults,
        stdout: '',
        stderr: '',
        status: null
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
            const result = await runPiston(code, tc.stdin)
            const stdout = result.run?.stdout?.trim() || ''

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
