import { prisma } from '@/lib/prisma'
import { WorkspaceClient } from '@/components/workspace/WorkspaceClient'

export const revalidate = 0

export default async function WorkspacePage({ params }: { params: Promise<{ moduleId: string, problemId: string }> }) {
    const { moduleId, problemId } = await params

    const problem = await prisma.problem.findUnique({
        where: { id: problemId },
        include: {
            lesson: {
                include: {
                    problems: {
                        orderBy: { title: 'asc' },
                        select: {
                            id: true,
                            title: true,
                            difficultyLevel: true
                        }
                    }
                }
            }
        }
    })

    if (!problem) {
        return <div className="p-8 text-zinc-100">Problem not found</div>
    }

    // Mock user for now - in real app use auth()
    let user = await prisma.user.findFirst()
    if (!user) {
        user = await prisma.user.create({
            data: { email: 'demo@example.com', name: 'Demo User' }
        })
    }

    // Get user's solved problems
    const solvedProblems = await prisma.submission.findMany({
        where: {
            userId: user.id,
            status: 'Passed'
        },
        select: {
            problemId: true
        },
        distinct: ['problemId']
    })

    const solvedProblemIds = new Set(solvedProblems.map(s => s.problemId))

    // Parse hints from JSON string if exists
    let hints: string[] = []
    if (problem.hints) {
        try {
            hints = JSON.parse(problem.hints)
        } catch {
            hints = []
        }
    }

    return <WorkspaceClient
        problem={problem}
        lesson={problem.lesson}
        userId={user.id}
        hints={hints}
        difficulty={problem.difficultyLevel}
        allProblems={problem.lesson.problems}
        solvedProblemIds={Array.from(solvedProblemIds)}
    />
}
