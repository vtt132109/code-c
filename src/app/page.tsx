'use client'

import { motion } from 'framer-motion'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Trophy, Zap, BookOpen, ArrowRight, CheckCircle2, Star, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

import { NameModal } from '@/components/modals/NameModal'

export default function Home() {
  const [modules, setModules] = useState<any[]>([])
  const [stats, setStats] = useState({ totalProblems: 0, totalModules: 0, avgDifficulty: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/modules')
        const data = await res.json()
        setModules(data.modules || [])
        setStats(data.stats || { totalProblems: 0, totalModules: 0, avgDifficulty: 0 })
      } catch (e) {
        console.error('Failed to load modules', e)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Loading...</div>
      </div>
    )
  }

  if (modules.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-zinc-100 p-8 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Welcome to C-Mastery
        </motion.h1>
        <p className="text-zinc-400 mb-8 text-center max-w-md">
          The database is not connected or seeded yet. Please configure your .env file with a valid DATABASE_URL and run the seed script.
        </p>
        <div className="bg-zinc-900 p-4 rounded border border-zinc-800 font-mono text-sm">
          npx prisma db push<br />
          npx prisma db seed
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden font-sans selection:bg-blue-500/30">
      <NameModal />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">C-Mastery</div>
          <div className="flex gap-6">
            <Link href="/leaderboard" className="text-slate-300 hover:text-white transition-colors font-medium">
              Bảng xếp hạng
            </Link>
            <Link href="#curriculum" className="text-slate-300 hover:text-white transition-colors font-medium">
              Khóa học
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 backdrop-blur-sm shadow-lg shadow-blue-500/10">
                <span className="text-blue-300 font-semibold tracking-wide uppercase text-sm">🚀 Học C từ con số 0</span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight drop-shadow-2xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-300">
                Master C Programming
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md"
            >
              Nền tảng học lập trình C với{' '}
              <span className="text-blue-300 font-bold">{stats.totalProblems}+ bài tập</span>,
              kiểm thử tự động, và lộ trình học có hệ thống
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-7 text-lg rounded-full group shadow-lg shadow-blue-600/20 transition-all hover:scale-105"
              >
                <Link href="#curriculum">
                  Bắt đầu học ngay
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-slate-600 hover:border-blue-400 bg-transparent text-white px-8 py-7 text-lg rounded-full hover:bg-blue-500/10 transition-all"
              >
                Xem demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, label: 'Bài tập', value: stats.totalProblems, color: 'blue' },
            { icon: Users, label: 'Học viên', value: '1,000+', color: 'purple' },
            { icon: Star, label: 'Đánh giá', value: '4.9/5', color: 'yellow' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-slate-900/40 border-slate-700/50 backdrop-blur-md hover:bg-slate-800/60 hover:border-blue-500/30 transition-all duration-300 shadow-xl">
                <CardContent className="pt-8 text-center">
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 text-${stat.color}-400 drop-shadow-lg`} />
                  <div className={`text-5xl font-bold mb-2 text-${stat.color}-300 drop-shadow-md`}>{stat.value}</div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Tại sao chọn C-Mastery?</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">Học tập hiệu quả với các tính năng vượt trội được thiết kế riêng cho người mới bắt đầu</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Code trực tiếp',
                description: 'Editor Monaco tích hợp sẵn, syntax highlighting, autocomplete đầy đủ ngay trên trình duyệt',
                color: 'blue'
              },
              {
                icon: Zap,
                title: 'Kiểm thử tự động',
                description: 'Hệ thống chấm bài tự động (Judge0) với test cases chi tiết, phản hồi ngay lập tức',
                color: 'yellow'
              },
              {
                icon: Trophy,
                title: 'Lộ trình bài bản',
                description: `${stats.totalModules} modules từ cơ bản đến nâng cao, tích điểm XP và leo bảng xếp hạng`,
                color: 'purple'
              },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-slate-900/40 border-slate-700/50 backdrop-blur-md h-full hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-300 group shadow-lg">
                  <CardContent className="pt-8 px-8 pb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-${feature.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-${feature.color}-500/20`}>
                      <feature.icon className={`w-8 h-8 text-${feature.color}-400`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-100">{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-4 bg-slate-950/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Chương trình học</h2>
            <p className="text-slate-300 text-lg">Khám phá lộ trình học từ cơ bản đến nâng cao</p>
          </motion.div>

          <div className="space-y-8">
            {modules.map((module: any, idx: number) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
                  <CardHeader className="bg-slate-900/40 border-b border-slate-800/50 p-6">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center flex-shrink-0 border border-blue-500/20 shadow-inner shadow-blue-500/10">
                        <span className="text-blue-400 font-bold text-xl">{idx + 1}</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <CardTitle className="text-2xl mb-2 text-white">{module.title}</CardTitle>
                        {module.description && (
                          <p className="text-slate-400">{module.description}</p>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {module.lessons?.map((lesson: any) => (
                        <div key={lesson.id} className="ml-4 md:ml-10 border-l-2 border-slate-800 pl-8 relative">
                          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600"></div>
                          <h4 className="font-bold text-slate-200 mb-4 flex items-center gap-3 text-lg">
                            {lesson.title}
                          </h4>
                          <div className="grid gap-3">
                            {lesson.problems?.map((problem: any) => (
                              <Link
                                key={problem.id}
                                href={`/learn/${module.id}/${problem.id}`}
                                className="block p-4 rounded-xl bg-slate-800/40 hover:bg-slate-700/60 transition-all duration-200 group border border-slate-700/30 hover:border-blue-500/40"
                              >
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-blue-500/20 transition-colors">
                                      <Code2 className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{problem.title}</span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <span className={`text-xs px-3 py-1 rounded-full font-bold ${problem.difficultyLevel <= 3
                                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                      : problem.difficultyLevel <= 7
                                        ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                      }`}>
                                      {problem.difficultyLevel <= 3 ? 'Dễ' : problem.difficultyLevel <= 7 ? 'Trung bình' : 'Khó'}
                                    </span>
                                    <span className="text-blue-400 font-bold text-sm flex items-center gap-1">
                                      +{problem.difficultyLevel * 10} <span className="text-xs">XP</span>
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl shadow-blue-900/50 border border-blue-400/20"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Sẵn sàng chinh phục C?</h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Tham gia cùng cộng đồng học viên và bắt đầu hành trình trở thành lập trình viên chuyên nghiệp ngay hôm nay.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-8 text-xl rounded-full font-bold shadow-xl transition-transform hover:scale-105"
            >
              <Link href="#curriculum">
                Bắt đầu học miễn phí
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p className="mb-4 text-lg font-semibold text-slate-400">C-Mastery Platform</p>
          <p>© 2025 C-Mastery. Made with ❤️ for C programmers.</p>
        </div>
      </footer>
    </div>
  )
}
