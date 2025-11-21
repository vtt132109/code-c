'use client'

import { motion } from 'framer-motion'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Trophy, Zap, BookOpen, ArrowRight, CheckCircle2, Star, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2">
                <span className="text-blue-400 font-medium">🚀 Học C từ con số 0</span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Master C Programming
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            >
              Nền tảng học lập trình C với{' '}
              <span className="text-blue-400 font-semibold">{stats.totalProblems}+ bài tập</span>,
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full group"
              >
                <Link href="#curriculum">
                  Bắt đầu học ngay
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-slate-700 hover:border-blue-500 bg-transparent text-white px-8 py-6 text-lg rounded-full"
              >
                Xem demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 relative">
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
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 text-${stat.color}-400`} />
                  <div className={`text-4xl font-bold mb-2 text-${stat.color}-400`}>{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tại sao chọn C-Mastery?</h2>
            <p className="text-slate-400 text-lg">Học tập hiệu quả với các tính năng vượt trội</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: 'Code trực tiếp trên trình duyệt',
                description: 'Editor Monaco tích hợp sẵn, syntax highlighting, autocomplete đầy đủ',
                color: 'blue'
              },
              {
                icon: Zap,
                title: 'Kiểm thử tự động',
                description: 'Mỗi bài có test cases tự động, feedback chi tiết về kết quả chạy code',
                color: 'yellow'
              },
              {
                icon: Trophy,
                title: 'Lộ trình có hệ thống',
                description: '{stats.totalModules} modules từ cơ bản đến nâng cao, điểm số và theo dõi tiến độ',
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
                <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm h-full hover:border-blue-500/50 transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <div className={`w-14 h-14 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-4 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Chương trình học</h2>
            <p className="text-slate-400 text-lg">Khám phá lộ trình học từ cơ bản đến nâng cao</p>
          </motion.div>

          <div className="space-y-6">
            {modules.map((module: any, idx: number) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="bg-slate-900/70 border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-400 font-bold text-lg">{idx + 1}</span>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{module.title}</CardTitle>
                        {module.description && (
                          <p className="text-slate-400">{module.description}</p>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {module.lessons?.map((lesson: any) => (
                        <div key={lesson.id} className="ml-16">
                          <h4 className="font-semibold text-slate-300 mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            {lesson.title}
                          </h4>
                          <div className="grid gap-2">
                            {lesson.problems?.map((problem: any) => (
                              <Link
                                key={problem.id}
                                href={`/learn/${module.id}/${problem.id}`}
                                className="block p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-200 group border border-transparent hover:border-blue-500/30"
                              >
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-3">
                                    <Code2 className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                                    <span className="group-hover:text-blue-400 transition-colors">{problem.title}</span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${problem.difficultyLevel <= 3
                                        ? 'bg-green-900/50 text-green-400'
                                        : problem.difficultyLevel <= 7
                                          ? 'bg-yellow-900/50 text-yellow-400'
                                          : 'bg-red-900/50 text-red-400'
                                      }`}>
                                      {problem.difficultyLevel <= 3 ? 'Dễ' : problem.difficultyLevel <= 7 ? 'TB' : 'Khó'}
                                    </span>
                                    <span className="text-blue-400 font-medium text-sm">+{problem.difficultyLevel * 10}💎</span>
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold mb-4">Sẵn sàng bắt đầu?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Tham gia cùng hàng ngàn học viên đang học lập trình C
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-full font-semibold"
            >
              <Link href="#curriculum">
                Bắt đầu học miễn phí
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>© 2025 C-Mastery. Made with ❤️ for C programmers.</p>
        </div>
      </footer>
    </div>
  )
}
