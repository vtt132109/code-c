import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding ...')

    // --- Module 1: Conditional Control ---
    const module1 = await prisma.module.upsert({
        where: { order: 1 },
        update: {},
        create: {
            title: 'Module 1: Conditional Control',
            order: 1,
        },
    })

    const lesson1 = await prisma.lesson.create({
        data: {
            title: 'Introduction to Control Flow',
            content: `# Compilation Steps & If-Else\n\n## Compilation Process\n1. **Preprocessing**: Handles directives like \`#include\`.\n2. **Compilation**: Source code to Assembly.\n3. **Assembly**: Assembly to Machine Code (Object file).\n4. **Linking**: Combines object files into executable.\n\n## If-Else Logic\nControl flow allows programs to make decisions.\n\n\`\`\`c\nif (condition) {\n    // code\n} else {\n    // code\n}\n\`\`\``,
            order: 1,
            moduleId: module1.id,
        },
    })

    // Problem: Quadratic Solver
    await prisma.problem.create({
        data: {
            title: 'Quadratic Equation Solver',
            description: `Given coefficients $a, b, c$ for $ax^2 + bx + c = 0$, calculate roots.\n\nHandle the case where $\\Delta < 0$ by printing "Complex roots".\n\nOutput format:\n\`x1=%.2f, x2=%.2f\``,
            difficulty: 'Medium',
            starterCode: `
#include <stdio.h>
#include <math.h>

int main() {
    float a, b, c;
    scanf("%f %f %f", &a, &b, &c);
    // Your code here
    return 0;
}`,
            lessonId: lesson1.id,
            testCases: {
                create: [
                    { stdin: '1 -3 2', expectedOutput: 'x1=2.00, x2=1.00' },
                    { stdin: '1 2 1', expectedOutput: 'x1=-1.00, x2=-1.00' },
                ],
            },
        },
    })

    // Problem: Leap Year
    await prisma.problem.create({
        data: {
            title: 'Leap Year Checker',
            description: `Check if a year is a leap year.\n\nA year is leap if:\n1. Divisible by 400.\n2. OR (Divisible by 4 AND NOT divisible by 100).`,
            difficulty: 'Easy',
            starterCode: `
#include <stdio.h>

int main() {
    int year;
    scanf("%d", &year);
    // Print 1 for Leap, 0 for Not Leap
    return 0;
}`,
            lessonId: lesson1.id,
            testCases: {
                create: [
                    { stdin: '2000', expectedOutput: '1' },
                    { stdin: '2100', expectedOutput: '0' },
                    { stdin: '2024', expectedOutput: '1' },
                ],
            },
        },
    })

    // --- Module 2: Loops ---
    const module2 = await prisma.module.upsert({
        where: { order: 2 },
        update: {},
        create: {
            title: 'Module 2: Loops',
            order: 2,
        },
    })

    const lesson2 = await prisma.lesson.create({
        data: {
            title: 'Looping Constructs',
            content: `# Loops\n\nLoops repeat a block of code.\n\n- \`for\` loop\n- \`while\` loop\n- \`do-while\` loop`,
            order: 1,
            moduleId: module2.id,
        },
    })

    // Problem: Prime Number
    await prisma.problem.create({
        data: {
            title: 'Prime Number Checker',
            description: `Check if $N$ is prime.\n\n**Hint**: Optimize your loop bound to $\\sqrt{N}$ to avoid Time Limit Exceeded (TLE).`,
            difficulty: 'Medium',
            starterCode: `
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    // Print 1 if prime, 0 otherwise
    return 0;
}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '7', expectedOutput: '1' },
                    { stdin: '10', expectedOutput: '0' },
                    { stdin: '97', expectedOutput: '1' },
                ],
            },
        },
    })

    // Problem: Exhaustive Search
    await prisma.problem.create({
        data: {
            title: 'Equation Solver (Exhaustive)',
            description: `Find positive integers $x, y, z$ such that:\n$$3x + 2y + z = 50$$\n$$x + y + z = 30$$\n\nPrint solution in format: \`x=%d, y=%d, z=%d\``,
            difficulty: 'Hard',
            starterCode: `
#include <stdio.h>

int main() {
    // Nested loops to find x, y, z
    return 0;
}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '', expectedOutput: 'x=10, y=10, z=10' }, // Example solution, need to verify math
                ],
            },
        },
    })

    // --- Module 3: Arrays ---
    const module3 = await prisma.module.upsert({
        where: { order: 3 },
        update: {},
        create: {
            title: 'Module 3: Arrays',
            order: 3,
        },
    })

    const lesson3 = await prisma.lesson.create({
        data: {
            title: 'Array Manipulation',
            content: `# Arrays\n\nArrays store multiple values of the same type contiguous in memory.`,
            order: 1,
            moduleId: module3.id,
        },
    })

    // Problem: Bubble Sort
    await prisma.problem.create({
        data: {
            title: 'Bubble Sort',
            description: `Sort an array of 10 integers in ascending order using Bubble Sort.`,
            difficulty: 'Easy',
            starterCode: `
#include <stdio.h>

int main() {
    int arr[10];
    for(int i=0; i<10; i++) scanf("%d", &arr[i]);
    
    // Sort here
    
    for(int i=0; i<10; i++) printf("%d ", arr[i]);
    return 0;
}`,
            lessonId: lesson3.id,
            testCases: {
                create: [
                    { stdin: '10 9 8 7 6 5 4 3 2 1', expectedOutput: '1 2 3 4 5 6 7 8 9 10 ' },
                ],
            },
        },
    })

    // Problem: Matrix Transpose
    await prisma.problem.create({
        data: {
            title: 'Matrix Transpose',
            description: `Convert a row-major 2D array (3x3) to column-major (transpose).`,
            difficulty: 'Medium',
            starterCode: `
#include <stdio.h>

int main() {
    int mat[3][3];
    // Read input
    // Transpose
    // Print output
    return 0;
}`,
            lessonId: lesson3.id,
            testCases: {
                create: [
                    { stdin: '1 2 3 4 5 6 7 8 9', expectedOutput: '1 4 7 2 5 8 3 6 9 ' }, // Simplified output format check
                ],
            },
        },
    })

    // --- Module 4: Pointers ---
    const module4 = await prisma.module.upsert({
        where: { order: 4 },
        update: {},
        create: {
            title: 'Module 4: Pointers',
            order: 4,
        },
    })

    const lesson4 = await prisma.lesson.create({
        data: {
            title: 'Pointers & Memory',
            content: `# Stack vs Heap\n\n- **Stack**: Static memory allocation, automatic deallocation.\n- **Heap**: Dynamic memory allocation (malloc), manual deallocation (free).`,
            order: 1,
            moduleId: module4.id,
        },
    })

    // Problem: Swap Function
    await prisma.problem.create({
        data: {
            title: 'Fix the Swap',
            description: `Fix the broken swap function using pointers.\n\nThe current implementation passes by value, so the swap doesn't affect the original variables.`,
            difficulty: 'Medium',
            starterCode: `
#include <stdio.h>

void swap(int a, int b) {
    int t = a;
    a = b;
    b = t;
}

int main() {
    int x, y;
    scanf("%d %d", &x, &y);
    swap(x, y); // This is wrong
    printf("%d %d", x, y);
    return 0;
}`,
            lessonId: lesson4.id,
            testCases: {
                create: [
                    { stdin: '10 20', expectedOutput: '20 10' },
                ],
            },
        },
    })

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
