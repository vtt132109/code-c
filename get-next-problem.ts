import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const problem = await prisma.problem.findFirst({
        where: { title: { contains: 'Bài 51' } }
    })

    if (problem) {
        console.log('Next Problem ID:', problem.id)
    } else {
        console.log('Problem 51 not found')
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect()
    })
