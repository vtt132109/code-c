'use client'

import { useState, useEffect } from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { CodeEditor } from './CodeEditor'
import { Terminal } from './Terminal'
import { ProblemView } from './ProblemView'
import { WorkspaceSidebar } from './WorkspaceSidebar'
import { ProblemNavigator } from './ProblemNavigator'
import { EditorActionbar } from './EditorActionbar'
import { runCode, submitCode } from '@/app/actions'
import { toast } from 'sonner'

interface WorkspaceClientProps {
    problem: any
    lesson: any
    userId: string
    hints?: string[]
    difficulty?: number
}

interface TestResult {
    passed: boolean
    input: string
    expectedOutput: string
    actualOutput: string
    executionTime?: number
    timeLimit?: number
    description?: string
}

export function WorkspaceClient({ problem, lesson, userId, hints, difficulty = 1 }: WorkspaceClientProps) {
    const [testResults, setTestResults] = useState<TestResult[]>([]);
    const [allTestsPassed, setAllTestsPassed] = useState(false);
    const [code, setCode] = useState(problem?.starterCode || `#include <stdio.h>\n\nint main() {\n    // Viết code ở đây\n    return 0;\n}\n`)
    const [output, setOutput] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [status, setStatus] = useState<string | null>(null)
    const [isRunning, setIsRunning] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Update allTestsPassed whenever testResults change
    useEffect(() => {
        if (testResults.length > 0) {
            setAllTestsPassed(testResults.every(t => t.passed))
        } else {
            setAllTestsPassed(false)
        }
    }, [testResults])

    const handleRun = async () => {
        setIsRunning(true)
        setOutput(null)
        setError(null)
        setTestResults([])
        setStatus('Running...')

        try {
            const result = await runCode(code, problem.id)
            if (result.error) {
                setError(result.error)
                setStatus('Error')
                setAllTestsPassed(false)
            } else if ((result as any).testResults && (result as any).testResults.length > 0) {
                // Show detailed test results
                const results = (result as any).testResults
                setTestResults(results)
                const passedCount = results.filter((t: TestResult) => t.passed).length
                setStatus(`${passedCount}/${results.length} test đúng`)
            } else {
                // Fallback to simple output
                setOutput(result.stdout ?? '')
                if (result.stderr) setError(result.stderr)
                setStatus((result as any).status?.description ?? null)
                setAllTestsPassed(false)
            }
        } catch (e) {
            setError('Failed to execute code')
            setAllTestsPassed(false)
        } finally {
            setIsRunning(false)
        }
    }

    const handleSubmit = async () => {
        if (!allTestsPassed) {
            toast.error('Vui lòng chạy code và pass tất cả test cases trước khi nộp!')
            return
        }

        setIsSubmitting(true)
        setStatus('Submitting...')

        try {
            const result = await submitCode(code, problem.id, userId)
            if (result.error) {
                toast.error(result.error)
                setStatus('Submission Failed')
            } else {
                if (result.status === 'Passed') {
                    toast.success('✅ Tất cả test cases đã pass! Nộp bài thành công!')
                } else {
                    toast.error('Some test cases failed')
                }
                setStatus(result.status ?? null)
            }
        } catch (e) {
            toast.error('Submission error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex h-screen bg-[#1a2332] text-slate-300 overflow-hidden font-sans">
            {/* Left Sidebar */}
            <WorkspaceSidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Navigation */}
                <ProblemNavigator title={problem.title} />

                {/* Resizable Workspace */}
                <div className="flex-1 overflow-hidden">
                    <ResizablePanelGroup direction="horizontal">
                        {/* Problem View (Left) */}
                        <ResizablePanel defaultSize={40} minSize={20} className="bg-white text-slate-900 border-r border-slate-200">
                            <ProblemView
                                content={problem.description}
                                title={problem.title}
                                lessonContent={lesson?.content}
                                hints={hints}
                                difficulty={difficulty}
                                solution={problem.solution}
                            />
                        </ResizablePanel>

                        <ResizableHandle className="w-1 bg-slate-700 hover:bg-blue-500 transition-colors" />

                        {/* Editor & Terminal (Right) */}
                        <ResizablePanel defaultSize={60} minSize={30}>
                            <ResizablePanelGroup direction="vertical">
                                <ResizablePanel defaultSize={70} minSize={20} className="flex flex-col bg-[#1e1e1e]">
                                    <EditorActionbar
                                        onRun={handleRun}
                                        onSubmit={handleSubmit}
                                        isRunning={isRunning}
                                        isSubmitting={isSubmitting}
                                        canSubmit={allTestsPassed}
                                    />
                                    <div className="flex-1 overflow-hidden">
                                        <CodeEditor
                                            value={code}
                                            onChange={(val: string | undefined) => setCode(val || '')}
                                        />
                                    </div>
                                </ResizablePanel>

                                <ResizableHandle className="h-1 bg-slate-700 hover:bg-blue-500 transition-colors" />

                                <ResizablePanel defaultSize={30} minSize={10} className="bg-[#1e1e1e] border-t border-slate-700">
                                    <Terminal output={output} error={error} status={status} testResults={testResults} />
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            </div>
        </div>
    )
}
