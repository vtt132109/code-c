import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export default async function Home() {
  // Handle case where DB is not set up yet
  let modules: any[] = []
  try {
    modules = await prisma.module.findMany({
      include: {
        lessons: {
          include: {
            problems: true
          },
          orderBy: { order: 'asc' }
        }
      },
      orderBy: { order: 'asc' }
    })
  } catch (e) {
    console.error("Database connection failed or empty", e)
  }

  if (modules.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to C-Mastery</h1>
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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">C-Mastery Curriculum</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {modules.map((module: any) => (
          <Card key={module.id} className="bg-zinc-900 border-zinc-800 text-zinc-100">
            <CardHeader>
              <CardTitle>{module.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {module.lessons.map((lesson: any) => (
                  <div key={lesson.id}>
                    <h3 className="font-semibold text-zinc-300 mb-2">{lesson.title}</h3>
                    <div className="grid gap-2">
                      {lesson.problems.map((problem: any) => (
                        <Link
                          key={problem.id}
                          href={`/learn/${module.id}/${problem.id}`}
                          className="block p-3 rounded bg-zinc-800 hover:bg-zinc-700 transition-colors"
                        >
                          <div className="flex justify-between items-center">
                            <span>{problem.title}</span>
                            <span className={`text-xs px-2 py-1 rounded ${problem.difficulty === 'Easy' ? 'bg-green-900/50 text-green-400' :
                              problem.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                                'bg-red-900/50 text-red-400'
                              }`}>
                              {problem.difficulty}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
