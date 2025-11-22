'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useSession, signOut } from "next-auth/react"
import { User, LogOut } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
    const { data: session } = useSession()

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="font-bold text-xl tracking-tight text-white hover:text-blue-300 transition-colors">
                    C-Mastery
                </Link>
                <div className="flex gap-6 items-center">
                    <Link href="/leaderboard" className="text-slate-300 hover:text-white transition-colors font-medium">
                        Bảng xếp hạng
                    </Link>
                    <Link href="/#curriculum" className="text-slate-300 hover:text-white transition-colors font-medium">
                        Khóa học
                    </Link>

                    {session ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 overflow-hidden border border-slate-600 hover:border-blue-400">
                                    {session.user?.image ? (
                                        <img src={session.user.image} alt={session.user.name || "User"} className="h-full w-full object-cover" />
                                    ) : (
                                        <div className="h-full w-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold">
                                            {session.user?.name?.[0]?.toUpperCase() || "U"}
                                        </div>
                                    )}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-slate-900 border-slate-700 text-slate-200" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none text-white">{session.user?.name}</p>
                                        <p className="text-xs leading-none text-slate-400">{session.user?.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-slate-700" />
                                <DropdownMenuItem className="focus:bg-slate-800 focus:text-white cursor-pointer">
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Hồ sơ</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-slate-700" />
                                <DropdownMenuItem className="focus:bg-slate-800 focus:text-red-400 text-red-400 cursor-pointer" onClick={() => signOut()}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Đăng xuất</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex gap-3">
                            <Button asChild variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10">
                                <Link href="/login">Đăng nhập</Link>
                            </Button>
                            <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white">
                                <Link href="/register">Đăng ký</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}
