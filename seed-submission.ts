import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const email = 'auth@example.com'
    const problemId = 'cmi8w3fuq005yyh88y262cxpi' // Problem from the test

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        console.error('User not found')
        return
    }

    const problem = await prisma.problem.findUnique({
        where: { id: problemId }
    })

    if (!problem) {
        console.error('Problem not found')
        return
    }

    await prisma.submission.create({
        data: {
            userId: user.id,
            problemId: problem.id,
            code: '// seeded submission',
            status: 'Passed',
            output: 'Seeded output'
        }
    })

    console.log('Seeded Passed submission for user', user.email, 'and problem', problem.title)
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect()
    })
