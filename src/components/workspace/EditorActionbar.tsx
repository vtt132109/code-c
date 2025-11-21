import { Play, Send, Settings, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface EditorActionbarProps {
    onRun: () => void
    onSubmit: () => void
    isRunning: boolean
    isSubmitting: boolean
    canSubmit?: boolean
}

export function EditorActionbar({ onRun, onSubmit, isRunning, isSubmitting, canSubmit = false }: EditorActionbarProps) {
    return (
        <div className="h-12 bg-[#1e1e1e] border-b border-slate-700 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
                <Select defaultValue="c">
                    <SelectTrigger className="w-[100px] h-8 bg-[#2d2d2d] border-slate-600 text-slate-200">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="c">C</SelectItem>
                        <SelectItem value="cpp">C++</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                    <Settings className="w-4 h-4" />
                </Button>

                <Button
                    onClick={onRun}
                    disabled={isRunning || isSubmitting}
                    className="h-8 bg-blue-600 hover:bg-blue-700 text-white gap-2 px-4"
                >
                    {isRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                    Chạy thử
                </Button>

                <Button
                    onClick={onSubmit}
                    disabled={isRunning || isSubmitting || !canSubmit}
                    className={`h-8 gap-2 px-4 font-medium transition-all ${canSubmit
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-slate-700 text-slate-500 cursor-not-allowed opacity-50'
                        }`}
                    title={!canSubmit ? 'Chạy code và pass tất cả test cases trước khi nộp' : 'Nộp bài'}
                >
                    {isSubmitting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    Nộp bài
                </Button>
            </div>
        </div>
    )
}
