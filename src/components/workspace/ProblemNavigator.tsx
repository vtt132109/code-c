import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ProblemNavigator({ title }: { title: string }) {
    return (
        <div className="h-12 bg-[#1a2332] border-b border-slate-700 flex items-center justify-between px-4 text-white">
            <div className="flex items-center gap-4">
                <button className="p-1 hover:bg-white/10 rounded">
                    <ChevronLeft className="w-5 h-5 text-slate-400" />
                </button>
                <h1 className="font-medium text-sm truncate max-w-md">{title}</h1>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex gap-1 mr-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <div key={num} className={cn(
                            "w-8 h-8 flex items-center justify-center rounded text-xs font-medium cursor-pointer",
                            num === 1 ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                        )}>
                            {num}
                        </div>
                    ))}
                </div>
                <button className="p-1 hover:bg-white/10 rounded">
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                </button>
            </div>
        </div>
    )
}
