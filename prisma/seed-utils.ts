import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export type ProblemData = {
    title: string
    description: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    difficultyLevel: number
    hints?: string[]
    starterCode: string
    solution?: string
    testCases: {
        stdin: string
        expectedOutput: string
    }[]
    timeLimit?: number
}

export async function createProblem(
    lessonId: string,
    data: ProblemData
) {
    return prisma.problem.create({
        data: {
            title: data.title,
            description: data.description,
            difficulty: data.difficulty,
            difficultyLevel: data.difficultyLevel,
            hints: data.hints ? JSON.stringify(data.hints) : undefined,
            starterCode: data.starterCode,
            solution: data.solution,
            timeLimit: data.timeLimit || 1.0,
            lessonId: lessonId,
            testCases: {
                create: data.testCases
            }
        }
    })
}

export function getDifficultyString(level: number): 'Easy' | 'Medium' | 'Hard' {
    if (level <= 3) return 'Easy'
    if (level <= 6) return 'Medium'
    return 'Hard'
}
