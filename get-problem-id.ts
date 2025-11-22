import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const problem = await prisma.problem.findFirst({
        where: {
            title: {
                contains: 'Bài 16'
            }
        },
        include: {
            lesson: true
        }
    })

    if (problem) {
        console.log(`Problem ID: ${problem.id}`)
        console.log(`Module ID: ${problem.lesson.moduleId}`)
        console.log(`Theory: ${problem.theory ? 'Present' : 'Missing'}`)
    } else {
        console.log('Problem not found')
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect())
