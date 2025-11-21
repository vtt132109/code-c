import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/app/actions/auth'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Crown, User } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const revalidate = 60 // Revalidate every minute

export default async function LeaderboardPage() {
    const users = await prisma.user.findMany({
        orderBy: { xp: 'desc' },
        take: 50,
        select: {
            id: true,
            name: true,
            xp: true,
            _count: {
                select: { submissions: { where: { status: 'Passed' } } }
            }
        }
    })

    const currentUser = await getCurrentUser()

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white font-sans selection:bg-blue-500/30">
            {/* Navbar */}
            <nav className="px-6 py-6 border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="font-bold text-xl tracking-tight hover:text-blue-400 transition-colors">
                        C-Mastery
                    </Link>
                    <div className="flex gap-6">
                        <Link href="/leaderboard" className="text-blue-400 font-medium">
                            Bảng xếp hạng
                        </Link>
                        <Link href="/#curriculum" className="text-slate-300 hover:text-white transition-colors font-medium">
                            Khóa học
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3 text-white drop-shadow-lg">
                        <Trophy className="w-12 h-12 text-yellow-400" />
                        Bảng Xếp Hạng
                    </h1>
                    <p className="text-slate-300 text-lg">Top những lập trình viên xuất sắc nhất</p>
                </div>

                <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-md shadow-xl overflow-hidden">
                    <CardHeader className="bg-slate-900/40 border-b border-slate-800/50 p-6">
                        <div className="grid grid-cols-12 text-slate-400 font-medium text-sm uppercase tracking-wider">
                            <div className="col-span-2 text-center">Hạng</div>
                            <div className="col-span-6">Học viên</div>
                            <div className="col-span-2 text-center">Bài giải</div>
                            <div className="col-span-2 text-right">XP</div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        {users.map((user, index) => {
                            const isCurrentUser = currentUser?.id === user.id
                            const rank = index + 1

                            let rankIcon = null
                            let rankColor = "text-slate-400"
                            let bgColor = isCurrentUser ? "bg-blue-900/20" : "hover:bg-slate-800/30"

                            if (rank === 1) {
                                rankIcon = <Crown className="w-6 h-6 text-yellow-400" />
                                rankColor = "text-yellow-400 font-bold"
                                bgColor = "bg-yellow-900/10 hover:bg-yellow-900/20"
                            } else if (rank === 2) {
                                rankIcon = <Medal className="w-6 h-6 text-slate-300" />
                                rankColor = "text-slate-300 font-bold"
                                bgColor = "bg-slate-700/10 hover:bg-slate-700/20"
                            } else if (rank === 3) {
                                rankIcon = <Medal className="w-6 h-6 text-amber-600" />
                                rankColor = "text-amber-600 font-bold"
                                bgColor = "bg-orange-900/10 hover:bg-orange-900/20"
                            }

                            return (
                                <div
                                    key={user.id}
                                    className={`grid grid-cols-12 items-center p-4 border-b border-slate-800/50 transition-colors ${bgColor} ${isCurrentUser ? 'border-l-4 border-l-blue-500' : ''}`}
                                >
                                    <div className="col-span-2 flex justify-center">
                                        {rankIcon || <span className={`text-lg ${rankColor}`}>#{rank}</span>}
                                    </div>
                                    <div className="col-span-6 flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isCurrentUser ? 'bg-blue-600' : 'bg-slate-800'}`}>
                                            <span className="font-bold text-white">{user.name.charAt(0).toUpperCase()}</span>
                                        </div>
                                        <div>
                                            <div className={`font-medium ${isCurrentUser ? 'text-blue-400' : 'text-slate-200'}`}>
                                                {user.name} {isCurrentUser && '(Bạn)'}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 text-center text-slate-300 font-mono">
                                        {user._count.submissions}
                                    </div>
                                    <div className="col-span-2 text-right font-bold text-blue-400 font-mono">
                                        {user.xp.toLocaleString()}
                                    </div>
                                </div>
                            )
                        })}

                        {users.length === 0 && (
                            <div className="p-12 text-center text-slate-500">
                                Chưa có dữ liệu bảng xếp hạng. Hãy là người đầu tiên ghi danh!
                            </div>
                        )}
                    </CardContent>
                </Card>

                <div className="mt-12 text-center">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-lg shadow-blue-900/20">
                        <Link href="/#curriculum">
                            Tiếp tục học tập
                        </Link>
                    </Button>
                </div>
            </main>
        </div>
    )
}
