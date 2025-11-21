'use client'
import { ScrollArea } from "@/components/ui/scroll-area"

interface TerminalProps {
    output: string | null
    error?: string | null
    status: 'idle' | 'running' | 'success' | 'error'
}

export function Terminal({ output, error, status }: TerminalProps) {
    return (
        <div className="h-full w-full bg-zinc-950 p-4 font-mono text-sm text-zinc-300 flex flex-col">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
                <span className="font-bold">Console</span>
                <span className="text-xs text-zinc-500">
                    {status === 'running' ? 'Running...' : status === 'idle' ? 'Ready' : 'Finished'}
                </span>
            </div>
            <ScrollArea className="flex-1">
                {status === 'running' && <div className="text-yellow-500">Compiling and executing...</div>}
                {error && (
                    <div className="bg-red-950/30 border border-red-900/50 p-2 rounded text-red-400 mb-2 whitespace-pre-wrap">
                        {error}
                    </div>
                )}
                {output && <div className="whitespace-pre-wrap">{output}</div>}
                {!output && !error && status !== 'running' && (
                    <div className="text-zinc-600 italic">No output to display</div>
                )}
            </ScrollArea>
        </div>
    )
}
