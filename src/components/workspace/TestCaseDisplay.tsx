'use client'

import { CheckCircle2, XCircle, Lock } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'

interface TestResult {
    passed: boolean
    input: string
    expectedOutput: string
    actualOutput: string
    executionTime?: number
    timeLimit?: number
    description?: string
}

interface TestCaseDisplayProps {
    results: TestResult[]
    totalTests: number
}

export function TestCaseDisplay({ results, totalTests }: TestCaseDisplayProps) {
    const passedCount = results.filter(r => r.passed).length
    const failedCount = results.length - passedCount

    return (
        <div className="h-full flex flex-col bg-[#1e1e1e] text-slate-200">
            {/* Header */}
            <div className="px-4 py-3 border-b border-slate-700">
                <h3 className="text-sm font-semibold uppercase tracking-wide">KIỂM THỬ</h3>
            </div>

            {/* Summary */}
            <div className="px-4 py-2 border-b border-slate-700">
                <p className="text-sm text-red-400">
                    {failedCount > 0 ? `${failedCount}/${totalTests} test case sai` : `${passedCount}/${totalTests} test case đúng`}
                </p>
            </div>

            {/* Test Cases */}
            <ScrollArea className="flex-1">
                <div className="p-2">
                    {results.map((result, idx) => (
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
                                <div className="ml-6 space-y-1 text-sm">
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
                                                <span>{result.timeLimit || 1000} ms</span>
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

                    {/* Locked test cases */}
                    {results.length < totalTests && (
                        <div className="mb-2">
                            <div className="w-full text-left p-3 rounded-lg border bg-slate-800/20 border-slate-700/50">
                                <div className="flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-slate-500" />
                                    <span className="font-medium text-sm text-slate-400">Kiểm thử {results.length + 1}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>
        </div>
    )
}
