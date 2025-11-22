import { prisma } from '@/lib/prisma'
import { WorkspaceClient } from '@/components/workspace/WorkspaceClient'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export const revalidate = 0

export default async function WorkspacePage({ params }: { params: Promise<{ moduleId: string, problemId: string }> }) {
    const { moduleId, problemId } = await params

    const session = await auth()
    if (!session || !session.user || !session.user.email) {
        redirect('/login')
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email }
    })

    if (!user) {
        redirect('/login')
    }

    const problem = await prisma.problem.findUnique({
        where: { id: problemId },
        include: {
            lesson: {
                include: {
                    problems: {
                        orderBy: { difficultyLevel: 'asc' },
                        select: {
                            id: true,
                            title: true,
                            difficultyLevel: true,
                            lessonId: true
                        }
                    }
                }
            }
        }
    })

    if (!problem) {
        return <div className="p-8 text-zinc-100">Problem not found</div>
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
        theory={problem.theory}
        userId={user.id}
        hints={hints}
        difficulty={problem.difficultyLevel}
        allProblems={problem.lesson.problems}
        solvedProblemIds={Array.from(solvedProblemIds)}
    />
}
