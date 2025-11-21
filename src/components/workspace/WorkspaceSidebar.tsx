'use client'

import { FileText, Trophy, History, MessageSquare, Share2, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface SidebarItemProps {
    icon: React.ElementType
    active?: boolean
    label: string
    onClick?: () => void
}

function SidebarItem({ icon: Icon, active, label, onClick }: SidebarItemProps) {
    return (
        <div
            className={cn(
                "p-3 cursor-pointer transition-colors hover:bg-white/10 rounded-lg mb-2 relative group",
                active ? "bg-blue-600 text-white" : "text-slate-400"
            )}
            onClick={onClick}
            title={label}
        >
            <Icon className="w-6 h-6" />
            {/* Tooltip */}
            <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                {label}
            </div>
        </div>
    )
}

export function WorkspaceSidebar() {
    const router = useRouter()

    return (
        <div className="w-16 bg-[#1a2332] flex flex-col items-center py-4 border-r border-slate-700 h-full">
            <SidebarItem
                icon={FileText}
                active
                label="Bài tập"
            />
            <SidebarItem
                icon={Trophy}
                label="Bảng xếp hạng"
                onClick={() => toast.info('Tính năng đang phát triển!')}
            />
            <SidebarItem
                icon={History}
                label="Lịch sử nộp bài"
                onClick={() => toast.info('Tính năng đang phát triển!')}
            />
            <SidebarItem
                icon={MessageSquare}
                label="Thảo luận"
                onClick={() => toast.info('Tính năng đang phát triển!')}
            />
            <div className="mt-auto">
                <SidebarItem
                    icon={Share2}
                    label="Chia sẻ"
                    onClick={() => {
                        navigator.clipboard.writeText(window.location.href)
                        toast.success('Đã sao chép link!')
                    }}
                />
                <SidebarItem
                    icon={Info}
                    label="Trang chủ"
                    onClick={() => router.push('/')}
                />
            </div>
        </div>
    )
}
