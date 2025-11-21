'use client'

import { useState } from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { CodeEditor } from "./CodeEditor"
import { Terminal } from "./Terminal"
import { ProblemView } from "./ProblemView"
import { Button } from "@/components/ui/button"
import { Play, Send } from "lucide-react"
import { runCode, submitCode } from "@/app/actions"

interface WorkspaceClientProps {
    problem: any
    lesson: any
    userId: string
}

export function WorkspaceClient({ problem, lesson, userId }: WorkspaceClientProps) {
    const [code, setCode] = useState(problem.starterCode)
    const [output, setOutput] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle')

    const handleRun = async () => {
        setStatus('running')
        setOutput(null)
        setError(null)

        const result = await runCode(code, problem.id)

        if (result.error) {
            setError(result.error)
            setStatus('error')
        } else {
            setOutput(result.stdout ?? '')
            if (result.stderr) {
                setError(result.stderr)
                setStatus('error')
            } else {
                setStatus('success')
            }
        }
    }

    const handleSubmit = async () => {
        setStatus('running')
        const result = await submitCode(code, problem.id, userId)
        setStatus('idle')
        if (result.status === 'Passed') {
            alert('All tests passed! +10 XP')
        } else {
            alert('Wrong Answer or Error.')
        }
    }

    return (
        <div className="h-screen w-full bg-zinc-950 text-zinc-100 flex flex-col">
            <header className="h-14 border-b border-zinc-800 flex items-center justify-between px-4 bg-zinc-900">
                <div className="font-bold text-lg">C-Mastery</div>
                <div className="flex gap-2">
                    <Button variant="secondary" size="sm" onClick={handleRun} disabled={status === 'running'}>
                        <Play className="w-4 h-4 mr-2" /> Run
                    </Button>
                    <Button size="sm" onClick={handleSubmit} disabled={status === 'running'}>
                        <Send className="w-4 h-4 mr-2" /> Submit
                    </Button>
                </div>
            </header>

            <div className="flex-1 overflow-hidden">
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel defaultSize={40} minSize={30}>
                        <ProblemView theory={lesson.content} problem={problem} />
                    </ResizablePanel>

                    <ResizableHandle withHandle />

                    <ResizablePanel defaultSize={60}>
                        <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={70}>
                                <CodeEditor code={code} onChange={(val: string | undefined) => setCode(val || '')} />
                            </ResizablePanel>

                            <ResizableHandle withHandle />

                            <ResizablePanel defaultSize={30}>
                                <Terminal output={output} error={error} status={status} />
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    )
}
