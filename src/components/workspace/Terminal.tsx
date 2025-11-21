'use client'
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle2, XCircle, Lock } from 'lucide-react'

interface TestResult {
    passed: boolean
    input: string
    expectedOutput: string
    actualOutput: string
    executionTime?: number
    timeLimit?: number
    description?: string
}

interface TerminalProps {
    output: string | null
    error: string | null
    status: string | null
    testResults?: TestResult[]
}

export function Terminal({ output, error, status, testResults }: TerminalProps) {
    return (
        <div className="h-full w-full bg-[#1e1e1e] text-slate-300 flex flex-col">
            {/* Header */}
            <div className="px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wide">KIỂM THỬ</h3>
                <span className="text-xs text-slate-500">
                    {status || 'Ready'}
                </span>
            </div>

            {/* Content */}
            {testResults && testResults.length > 0 ? (
                /* Test Cases View */
                <div className="flex-1 flex flex-col">
                    {/* Summary */}
                    <div className="px-4 py-2 border-b border-slate-700">
                        <p className="text-sm text-red-400">
                            {testResults.filter(r => !r.passed).length > 0
                                ? `${testResults.filter(r => !r.passed).length}/${testResults.length} test case sai`
                                : `${testResults.filter(r => r.passed).length}/${testResults.length} test case đúng`}
                        </p>
                    </div>

                    {/* Test Cases */}
                    <ScrollArea className="flex-1">
                        <div className="p-2">
                            {testResults.map((result, idx) => (
                                <div key={idx} className="mb-2">
                                    <button
                                        className={`w-full text-left p-3 rounded-lg border transition-colors ${result.passed
                                                ? 'bg-green-900/20 border-green-700/50 hover:bg-green-900/30'
                                                : 'bg-red-900/20 border-red-700/50 hover:bg-red-900/30'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            {result.passed ? (
                                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <XCircle className="w-4 h-4 text-red-400" />
                                            )}
                                            <span className="font-medium text-sm">Kiểm thử {idx + 1}</span>
                                        </div>

                                        {/* Details */}
                                        <div className="ml-6 space-y-1 text-xs">
                                            <div className="flex justify-between">
                                                <span className="text-slate-400">Đầu vào</span>
                                                <span className="font-mono text-slate-200">"{result.input}"</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-400">Đầu ra thực tế</span>
                                                <span className="font-mono text-slate-200">"{result.actualOutput}"</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-400">Đầu ra mong đợi</span>
                                                <span className="font-mono text-slate-200">"{result.expectedOutput}"</span>
                                            </div>
                                            {result.executionTime !== undefined && (
                                                <>
                                                    <div className="flex justify-between">
                                                        <span className="text-slate-400">Giới hạn thời gian</span>
                                                        <span>{result.timeLimit || 500} ms</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-slate-400">Thời gian thực thi</span>
                                                        <span>{result.executionTime} ms</span>
                                                    </div>
                                                </>
                                            )}
                                            {result.description && (
                                                <div className="flex justify-between">
                                                    <span className="text-slate-400">Mô tả:</span>
                                                    <span className={result.passed ? 'text-green-400' : 'text-red-400'}>
                                                        {result.description}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            ) : (
                /* Default Output View */
                <div className="flex-1 p-4 font-mono text-sm">
                    <ScrollArea className="h-full">
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
            )}
        </div>
    )
}
