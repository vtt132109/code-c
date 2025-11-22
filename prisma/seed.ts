import { PrismaClient } from '@prisma/client'
import { createProblem } from './seed-utils'
import { basicProblems } from './data/basics'
import { intermediateProblems } from './data/intermediate'
import { inputOutputProblems } from './data/input-output'
import { conditionalProblems } from './data/conditionals'
import { loopProblems } from './data/loops'
import { arrayProblems } from './data/arrays'
import { functionProblems } from './data/functions'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding ...')

    // Clean up existing data
    await prisma.submission.deleteMany()
    await prisma.testCase.deleteMany()
    await prisma.problem.deleteMany()
    await prisma.lesson.deleteMany()
    await prisma.module.deleteMany()
    await prisma.user.deleteMany()

    // Create default user
    const hashedPassword = await require('bcryptjs').hash('password', 10)
    await prisma.user.create({
        data: {
            email: 'test@example.com',
            password: hashedPassword,
            name: 'Test User'
        }
    })
    console.log('Created default user: test@example.com / password')


    // === MODULE 1: CƠ BẢN ===
    const module1 = await prisma.module.create({
        data: {
            title: 'Module 1: Nhập môn C',
            order: 1,
        },
    })

    // LESSON 1: In ra màn hình
    const lesson1 = await prisma.lesson.create({
        data: {
            title: 'Lesson 1: In ra màn hình',
            content: `# In ra màn hình với printf\n\n## Giới thiệu\nHàm \`printf()\` được dùng để in text ra màn hình.\n\n\`\`\`c\n#include <stdio.h>\n\nint main() {\n    printf("Hello World\\n");\n    return 0;\n}\n\`\`\`\n\n## Lưu ý\n- \`\\n\` = xuống dòng\n- Nhớ thêm \`;\` sau mỗi câu lệnh`,
            order: 1,
            moduleId: module1.id,
        },
    })

    // LESSON 2: Biến và nhập xuất
    const lesson2 = await prisma.lesson.create({
        data: {
            title: 'Lesson 2: Biến và scanf',
            content: `# Biến trong C\n\n## Khai báo biến\n\`\`\`c\nint tuoi = 18;        // Số nguyên\nfloat diem = 9.5;     // Số thực\nchar kytu = 'A';      // Ký tự\n\`\`\`\n\n## Nhập giá trị\n\`\`\`c\nint so;\nscanf("%d", &so);  // Nhập số nguyên\nprintf("%d", so);  // In số nguyên\n\`\`\``,
            order: 2,
            moduleId: module1.id,
        },
    })

    // === MODULE 2: KỸ THUẬT LẬP TRÌNH ===
    const module2 = await prisma.module.create({
        data: {
            title: 'Module 2: Kỹ thuật lập trình',
            order: 2,
        },
    })

    // LESSON 3: Cấu trúc điều khiển
    const lesson3 = await prisma.lesson.create({
        data: {
            title: 'Lesson 3: Cấu trúc điều khiển',
            content: `# If-Else và Switch-Case\n\n## If-Else\n\`\`\`c\nif (a > b) {\n    printf("a lon hon b");\n} else {\n    printf("a nho hon hoac bang b");\n}\n\`\`\``,
            order: 1,
            moduleId: module2.id,
        },
    })

    // LESSON 4: Vòng lặp & Mảng
    const lesson4 = await prisma.lesson.create({
        data: {
            title: 'Lesson 4: Vòng lặp & Mảng',
            content: `# Vòng lặp và Mảng\n\n## For loop\n\`\`\`c\nfor(int i=0; i<10; i++) {\n    printf("%d ", i);\n}\n\`\`\`\n\n## Array\n\`\`\`c\nint arr[5] = {1, 2, 3, 4, 5};\n\`\`\``,
            order: 2,
            moduleId: module2.id,
        },
    })

    // Seed Basic Problems (Bài 1-3)
    console.log(`Seeding ${basicProblems.length} basic problems...`)
    for (const problem of basicProblems) {
        const isLesson1 = ['Bài 1:', 'Bài 2:', 'Bài 3:'].some(prefix => problem.title.startsWith(prefix))
        const lessonId = isLesson1 ? lesson1.id : lesson2.id
        await createProblem(lessonId, problem)
    }

    // Seed Input/Output Problems (Bài 4-8)
    console.log(`Seeding ${inputOutputProblems.length} input/output problems...`)
    for (const problem of inputOutputProblems) {
        await createProblem(lesson2.id, problem)
    }

    // Seed Conditional Problems (Bài 21-25)
    console.log(`Seeding ${conditionalProblems.length} conditional problems...`)
    for (const problem of conditionalProblems) {
        await createProblem(lesson3.id, problem)
    }

    // Seed Loop Problems (Bài 31-45)
    console.log(`Seeding ${loopProblems.length} loop problems...`)
    for (const problem of loopProblems) {
        await createProblem(lesson4.id, problem)
    }

    // Seed Array & String Problems (Bài 46-65)
    console.log(`Seeding ${arrayProblems.length} array & string problems...`)
    for (const problem of arrayProblems) {
        await createProblem(lesson4.id, problem)
    }

    // Seed Function & Pointer Problems (Bài 66-85)
    console.log(`Seeding ${functionProblems.length} function & pointer problems...`)
    for (const problem of functionProblems) {
        await createProblem(lesson4.id, problem)
    }

    // Seed Intermediate Problems (Legacy/Mixed)
    console.log(`Seeding ${intermediateProblems.length} intermediate problems...`)
    for (const problem of intermediateProblems) {
        await createProblem(lesson4.id, problem)
    }

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
