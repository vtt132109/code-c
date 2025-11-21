'use client'
import { ScrollArea } from "@/components/ui/scroll-area"

interface TerminalProps {
    output: string | null
    error: string | null
    status: string | null
}

export function Terminal({ output, error, status }: TerminalProps) {
    return (
        <div className="h-full w-full bg-[#1e1e1e] p-4 font-mono text-sm text-slate-300 flex flex-col border-t border-slate-700">
            <div className="flex items-center justify-between pb-2 mb-2">
                <span className="font-bold text-white">Kiểm thử</span>
                <span className="text-xs text-slate-500">
                    {status || 'Ready'}
                </span>
            </div>
            <ScrollArea className="flex-1">
                {error && (
                    <div className="bg-red-950/30 border border-red-900/50 p-3 rounded mb-2 text-red-400">
                        <div className="font-semibold mb-1">❌ Lỗi</div>
                        <pre className="whitespace-pre-wrap text-xs">{error}</pre>
                    </div>
                )}
                {output && (
                    <div className="bg-slate-800/50 border border-slate-700 p-3 rounded">
                        <div className="font-semibold mb-1 text-green-400">✅ Kết quả</div>
                        <pre className="whitespace-pre-wrap text-xs">{output}</pre>
                    </div>
                )}
                {!output && !error && (
                    <div className="text-slate-600 italic text-center py-8">Nhấn "Chạy thử" để kiểm tra code</div>
                )}
            </ScrollArea>
        </div>
    )
}
