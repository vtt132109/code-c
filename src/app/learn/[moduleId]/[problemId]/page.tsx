import dynamic from 'next/dynamic'

const WorkspaceClient = dynamic(() => import('@/components/workspace/WorkspaceClient').then(mod => ({ default: mod.WorkspaceClient })), {
    loading: () => (
        <div className="flex items-center justify-center h-screen bg-[#1a2332]">
            <div className="text-white">Loading workspace...</div>
        </div>
    ),
    ssr: false
})

export const dynamic = 'force-dynamic'

export default async function WorkspacePage({ params }: { params: Promise<{ moduleId: string, problemId: string }> }) {
    const { moduleId, problemId } = await params

    const problem = await prisma.problem.findUnique({
        where: { id: problemId },
        include: { lesson: true }
    })

    if (!problem) {
        return <div className="p-8 text-zinc-100">Problem not found</div>
    }

    // Mock user for now - in real app use auth()
    let user = await prisma.user.findFirst()
    if (!user) {
        user = await prisma.user.create({
            data: { email: 'demo@example.com', name: 'Demo User' }
        })
    }

    return <WorkspaceClient problem={problem} lesson={problem.lesson} userId={user.id} />
}
