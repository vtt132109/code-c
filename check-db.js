#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function checkData() {
    const modules = await prisma.module.findMany({
        include: {
            lessons: {
                include: {
                    problems: true
                }
            }
        }
    })

    console.log('\n=== Database Contents ===')
    console.log(`Found ${modules.length} module(s)\n`)

    modules.forEach(module => {
        console.log(`Module: ${module.title} (ID: ${module.id})`)
        module.lessons.forEach(lesson => {
            console.log(`  Lesson: ${lesson.title} (ID: ${lesson.id})`)
            lesson.problems.forEach(problem => {
                console.log(`    Problem: ${problem.title} (ID: ${problem.id})`)
                console.log(`    URL: http://localhost:3000/learn/${module.id}/${problem.id}`)
            })
        })
        console.log('')
    })

    await prisma.$disconnect()
}

checkData().catch(console.error)
