'use client'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import 'highlight.js/styles/github-dark.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ProblemViewProps {
    theory: string
    problem: {
        title: string
        description: string
        difficulty: string
        timeLimit: number
    }
}

export function ProblemView({ theory, problem }: ProblemViewProps) {
    return (
        <div className="h-full flex flex-col bg-zinc-900">
            <Tabs defaultValue="problem" className="flex-1 flex flex-col">
                <div className="border-b border-zinc-800 px-4">
                    <TabsList className="bg-transparent">
                        <TabsTrigger value="theory">Theory</TabsTrigger>
                        <TabsTrigger value="problem">Problem</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="theory" className="flex-1 p-0 m-0 h-full overflow-hidden">
                    <ScrollArea className="h-full p-6">
                        <div className="prose prose-invert max-w-none prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800">
                            <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeKatex]}>
                                {theory}
                            </ReactMarkdown>
                        </div>
                    </ScrollArea>
                </TabsContent>

                <TabsContent value="problem" className="flex-1 p-0 m-0 h-full overflow-hidden">
                    <ScrollArea className="h-full p-6">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold mb-2">{problem.title}</h1>
                            <div className="flex gap-2 mb-4">
                                <span className={`px-2 py-0.5 rounded text-xs font-medium ${problem.difficulty === 'Easy' ? 'bg-green-900/50 text-green-400' :
                                        problem.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                                            'bg-red-900/50 text-red-400'
                                    }`}>
                                    {problem.difficulty}
                                </span>
                                <span className="px-2 py-0.5 rounded text-xs font-medium bg-zinc-800 text-zinc-400">
                                    {problem.timeLimit}s
                                </span>
                            </div>
                            <div className="prose prose-invert max-w-none prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-zinc-800">
                                <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeKatex]}>
                                    {problem.description}
                                </ReactMarkdown>
                            </div>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="hints">
                                <AccordionTrigger>Hints</AccordionTrigger>
                                <AccordionContent>
                                    <div className="text-zinc-400 italic">
                                        No hints available for this problem yet.
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ScrollArea>
                </TabsContent>
            </Tabs>
        </div>
    )
}
