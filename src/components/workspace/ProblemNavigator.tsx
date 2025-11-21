'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProblemNavigatorProps {
    title: string
}

export function ProblemNavigator({ title }: ProblemNavigatorProps) {
    const router = useRouter()

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
            <div className="flex items-center gap-2">
                {/* Additional actions can go here */}
            </div>
        </div>
    )
}
