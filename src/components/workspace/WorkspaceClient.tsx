'use client'

import { useState } from 'react'
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
}

export function WorkspaceClient({ problem, lesson, userId }: WorkspaceClientProps) {
    const [code, setCode] = useState(problem.starterCode || '// Write your C code here\n')
    const [output, setOutput] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [status, setStatus] = useState<string | null>(null)
    const [isRunning, setIsRunning] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleRun = async () => {
        setIsRunning(true)
        setOutput(null)
        setError(null)
        setStatus('Running...')

        try {
            const result = await runCode(code, problem.id)
            if (result.error) {
                setError(result.error)
                setStatus('Error')
            } else {
                setOutput(result.stdout ?? '')
                if (result.stderr) setError(result.stderr)
                setStatus(result.status?.description ?? null)
            }
        } catch (e) {
            setError('Failed to execute code')
        } finally {
            setIsRunning(false)
        }
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)
        setStatus('Submitting...')

        try {
            const result = await submitCode(code, problem.id, userId)
            if (result.error) {
                toast.error(result.error)
                setStatus('Submission Failed')
            } else {
                if (result.status === 'Passed') {
                    toast.success('All test cases passed!')
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
                            <ProblemView content={problem.description} title={problem.title} />
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
                                    <Terminal output={output} error={error} status={status} />
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            </div>
        </div>
    )
}
