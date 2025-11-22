'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import 'highlight.js/styles/github-dark.css'
import 'katex/dist/katex.min.css'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Lightbulb } from 'lucide-react'

interface ProblemViewProps {
    content: string
    title: string
    lessonContent?: string
    theory?: string | null
    hints?: string[]
    difficulty?: number
    solution?: string | null
}

export function ProblemView({ content, title, lessonContent, theory, hints, difficulty = 1, solution }: ProblemViewProps) {
    const showHints = difficulty >= 5 && hints && hints.length > 0

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Header Metadata */}
            <div className="border-b border-slate-200 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                            V
                        </div>
                        <div>
                            <div className="font-medium text-slate-900">vtt</div>
                            <div className="text-xs text-slate-500">Tác giả</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge className={
                            difficulty <= 3
                                ? "bg-green-500 hover:bg-green-600 text-white border-none"
                                : difficulty <= 7
                                    ? "bg-yellow-500 hover:bg-yellow-600 text-white border-none"
                                    : "bg-red-500 hover:bg-red-600 text-white border-none"
                        }>
                            {difficulty <= 3 ? 'Đơn giản' : difficulty <= 7 ? 'Trung bình' : 'Khó'}
                        </Badge>
                        <div className="text-blue-600 font-medium text-sm flex items-center gap-1">
                            <span>💎</span> {difficulty * 10} Điểm
                        </div>
                    </div>
                </div>
            </div>

            <Tabs defaultValue="problem" className="flex-1 flex flex-col">
                <TabsList className="w-full justify-start rounded-none border-b bg-slate-50 p-0 h-auto">
                    <TabsTrigger
                        value="problem"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-white px-6 py-3 text-slate-600 data-[state=active]:text-blue-600"
                    >
                        Đề bài
                    </TabsTrigger>
                    {theory && (
                        <TabsTrigger
                            value="lesson"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-white px-6 py-3 text-slate-600 data-[state=active]:text-blue-600"
                        >
                            Lý thuyết
                        </TabsTrigger>
                    )}
                    <TabsTrigger
                        value="starter-code"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-white px-6 py-3 text-slate-600 data-[state=active]:text-blue-600"
                    >
                        Code Mẫu
                    </TabsTrigger>
                    {showHints && (
                        <TabsTrigger
                            value="hints"
                            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-white px-6 py-3 text-slate-600 data-[state=active]:text-blue-600"
                        >
                            <Lightbulb className="w-4 h-4 mr-2" />
                            Gợi ý
                        </TabsTrigger>
                    )}
                </TabsList>

                <TabsContent value="problem" className="flex-1 m-0 bg-white">
                    <ScrollArea className="h-full">
                        <div className="p-6 max-w-3xl mx-auto">
                            <h1 className="text-2xl font-bold text-slate-900 mb-4">Bài tập</h1>
                            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-blue-600 prose-code:text-pink-600 prose-code:bg-pink-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-slate-100">
                                <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeKatex]}>
                                    {content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </ScrollArea>
                </TabsContent>

                {theory && (
                    <TabsContent value="lesson" className="flex-1 m-0 bg-white">
                        <ScrollArea className="h-full">
                            <div className="p-6 max-w-3xl mx-auto">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Lý thuyết</h2>
                                <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-blue-600 prose-code:text-pink-600 prose-code:bg-pink-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-slate-100">
                                    <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeKatex]}>
                                        {theory}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </ScrollArea>
                    </TabsContent>
                )}

                <TabsContent value="starter-code" className="flex-1 m-0 bg-white">
                    <ScrollArea className="h-full">
                        <div className="p-6 max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Code Mẫu (Tham khảo)</h2>
                            <div className="prose prose-slate max-w-none">
                                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                                    <code>{solution || `// Chưa có lời giải mẫu cho bài tập này.
// Bạn hãy thử tự giải nhé!`}</code>
                                </pre>
                                <p className="text-slate-500 mt-4 italic">
                                    * Bạn có thể copy code này để chạy thử và tham khảo cách giải.
                                </p>
                            </div>
                        </div>
                    </ScrollArea>
                </TabsContent>

                {showHints && (
                    <TabsContent value="hints" className="flex-1 m-0 bg-white">
                        <ScrollArea className="h-full">
                            <div className="p-6 max-w-3xl mx-auto">
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Lightbulb className="w-6 h-6 text-yellow-600" />
                                        Gợi ý giải bài
                                    </h3>
                                    <ul className="space-y-3">
                                        {hints?.map((hint: string, idx: number) => (
                                            <li key={idx} className="text-slate-700 leading-relaxed">
                                                <span className="font-semibold text-yellow-800">Gợi ý {idx + 1}:</span> {hint}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollArea>
                    </TabsContent>
                )}
            </Tabs>
        </div>
    )
}
