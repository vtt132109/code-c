'use client'
import Editor from '@monaco-editor/react'

interface CodeEditorProps {
    value: string
    onChange: (value: string | undefined) => void
}

export function CodeEditor({ value, onChange }: CodeEditorProps) {
    return (
        <div className="h-full w-full bg-[#1e1e1e]">
            <Editor
                height="100%"
                defaultLanguage="c"
                theme="vs-dark"
                value={value}
                onChange={onChange}
                options={{
                    minimap: { enabled: false },
                    fontSize: 18,
                    fontFamily: "'Cascadia Code', 'Source Code Pro', 'Consolas', monospace",
                    lineHeight: 24,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    fontLigatures: true,
                    cursorBlinking: 'smooth',
                    smoothScrolling: true,
                }}
            />
        </div>
    )
}
