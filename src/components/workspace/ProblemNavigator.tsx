'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, Home, CheckCircle2, Circle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface ProblemNavigatorProps {
    title: string
    allProblems?: Array<{ id: string; title: string; difficultyLevel: number }>
    currentProblemId?: string
    solvedProblemIds?: string[]
}

export function ProblemNavigator({ title, allProblems = [], currentProblemId, solvedProblemIds = [] }: ProblemNavigatorProps) {
    const router = useRouter()

    // Extract problem number from title (e.g., "Bài 1: ..." -> 1)
    const extractNumber = (title: string) => {
        const match = title.match(/Bài\s+(\d+)/)
        return match ? parseInt(match[1]) : 0
    }

    return (
        <div className="bg-[#1a2332] border-b border-slate-700 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => router.push('/')}
                    className="text-slate-300 hover:text-white hover:bg-slate-700"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Quay lại
                </Button>
                <div className="h-6 w-px bg-slate-600" />
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Home className="w-4 h-4" />
                    <span>/</span>
                    <span className="text-white font-medium">{title}</span>
                </div>
            </div>

            {/* Problem List */}
            {allProblems.length > 0 && (
                <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-400 mr-2">Bài tập:</span>
                    <div className="flex gap-1">
                        {allProblems.map((prob) => {
                            const problemNumber = extractNumber(prob.title)
                            const isCurrent = prob.id === currentProblemId
                            const isSolved = solvedProblemIds.includes(prob.id)

                            return (
                                <Link
                                    key={prob.id}
                                    href={`/learn/module/${prob.id}`}
                                    className={`
                                        relative w-8 h-8 flex items-center justify-center rounded text-xs font-medium
                                        transition-all duration-200
                                        ${isCurrent
                                            ? 'bg-blue-600 text-white ring-2 ring-blue-400 ring-offset-2 ring-offset-[#1a2332]'
                                            : isSolved
                                                ? 'bg-green-600/20 text-green-400 border border-green-600/50 hover:bg-green-600/30'
                                                : 'bg-slate-700/50 text-slate-400 border border-slate-600/50 hover:bg-slate-700'
                                        }
                                    `}
                                    title={prob.title}
                                >
                                    {isSolved && !isCurrent && (
                                        <CheckCircle2 className="w-3 h-3 absolute -top-1 -right-1 text-green-400 bg-[#1a2332] rounded-full" />
                                    )}
                                    {problemNumber}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
