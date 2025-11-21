import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const modules = await prisma.module.findMany({
            include: {
                lessons: {
                    include: {
                        problems: true
                    },
                    orderBy: { order: 'asc' }
                }
            },
            orderBy: { order: 'asc' }
        })

        const stats = {
            totalModules: modules.length,
            totalProblems: modules.reduce((acc, mod) =>
                acc + mod.lessons.reduce((sum, lesson) => sum + lesson.problems.length, 0), 0
            ),
            avgDifficulty: 5
        }

        return NextResponse.json({ modules, stats })
    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json({ modules: [], stats: { totalModules: 0, totalProblems: 0, avgDifficulty: 0 } })
    }
}
