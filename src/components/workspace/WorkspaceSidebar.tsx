import { FileText, Trophy, History, MessageSquare, Share2, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarItemProps {
    icon: React.ElementType
    active?: boolean
}

function SidebarItem({ icon: Icon, active }: SidebarItemProps) {
    return (
        <div className={cn(
            "p-3 cursor-pointer transition-colors hover:bg-white/10 rounded-lg mb-2",
            active ? "bg-blue-600 text-white" : "text-slate-400"
        )}>
            <Icon className="w-6 h-6" />
        </div>
    )
}

export function WorkspaceSidebar() {
    return (
        <div className="w-16 bg-[#1a2332] flex flex-col items-center py-4 border-r border-slate-700 h-full">
            <SidebarItem icon={FileText} active />
            <SidebarItem icon={Trophy} />
            <SidebarItem icon={History} />
            <SidebarItem icon={MessageSquare} />
            <div className="mt-auto">
                <SidebarItem icon={Share2} />
                <SidebarItem icon={Info} />
            </div>
        </div>
    )
}
