import { PrismaClient } from '@prisma/client'

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


    // === MODULE 1: CƠ BẢN ===
    const module1 = await prisma.module.upsert({
        where: { order: 1 },
        update: {},
        create: {
            title: 'Module 1: Nhập môn C',
            order: 1,
        },
    })

    // LESSON 1: In ra màn hình
    const lesson1 = await prisma.lesson.create({
        data: {
            title: 'Lesson 1: In ra màn hình',
            content: `# In ra màn hình với printf

## Giới thiệu
Hàm \`printf()\` được dùng để in text ra màn hình.

\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello World\\n");
    return 0;
}
\`\`\`

## Lưu ý
- \`\\n\` = xuống dòng
- Nhớ thêm \`;\ sau mỗi câu lệnh`,
            order: 1,
            moduleId: module1.id,
        },
    })

    // Problem 1: Hello World
    await prisma.problem.create({
        data: {
            title: 'Bài 1: Hello World',
            description: `In ra dòng chữ: \`Hello World\`

**Đầu ra:** 
\`\`\`
Hello World
\`\`\``,
            difficulty: 'Easy',
            difficultyLevel: 1,
            hints: JSON.stringify(['Dùng printf("Hello World");', 'Nhớ thêm \\n để xuống dòng']),
            starterCode: `#include <stdio.h>

int main() {
    // Viết code ở đây
    
    return 0;
}`,
            lessonId: lesson1.id,
            testCases: {
                create: [
                    { stdin: '', expectedOutput: 'Hello World' },
                ],
            },
        },
    })

    // Problem 2: In tên bạn
    await prisma.problem.create({
        data: {
            title: 'Bài 2: In tên bạn',
            description: `Nhập một cái tên, in ra: \`Xin chào [tên]\`

**Ví dụ:**
- Input: \`Nam\`
- Output: \`Xin chào Nam\``,
            difficulty: 'Easy',
            difficultyLevel: 1,
            hints: JSON.stringify(['Dùng printf 2 lần', 'printf("Xin chào "); printf("[tên]");']),
            starterCode: `#include <stdio.h>

int main() {
    char ten[50];
    scanf("%s", ten);
    // Viết code ở đây
    
    return 0;
}`,
            lessonId: lesson1.id,
            testCases: {
                create: [
                    { stdin: 'Nam', expectedOutput: 'Xin chào Nam' },
                    { stdin: 'Hoa', expectedOutput: 'Xin chào Hoa' },
                ],
            },
        },
    })

    // Problem 3: In nhiều dòng
    await prisma.problem.create({
        data: {
            title: 'Bài 3: In nhiều dòng',
            description: `In ra 3 dòng:
\`\`\`
Dong 1
Dong 2
Dong 3
\`\`\``,
            difficulty: 'Easy',
            difficultyLevel: 1,
            hints: JSON.stringify(['Dùng \\n để xuống dòng', 'Hoặc gọi printf() 3 lần']),
            starterCode: `#include <stdio.h>

int main() {
    // Viết code ở đây
    
    return 0;
}`,
            lessonId: lesson1.id,
            testCases: {
                create: [
                    { stdin: '', expectedOutput: 'Dong 1\nDong 2\nDong 3' },
                ],
            },
        },
    })

    // LESSON 2: Biến và nhập xuất
    const lesson2 = await prisma.lesson.create({
        data: {
            title: 'Lesson 2: Biến và scanf',
            content: `# Biến trong C

## Khai báo biến
\`\`\`c
int tuoi = 18;        // Số nguyên
float diem = 9.5;     // Số thực
char kytu = 'A';      // Ký tự
\`\`\`

## Nhập giá trị
\`\`\`c
int so;
scanf("%d", &so);  // Nhập số nguyên
printf("%d", so);  // In số nguyên
\`\`\``,
            order: 2,
            moduleId: module1.id,
        },
    })

    // Problem 4: Tổng 2 số
    await prisma.problem.create({
        data: {
            title: 'Bài 4: Tổng 2 số',
            description: `Nhập 2 số nguyên a, b. In ra tổng a + b

**Ví dụ:**
- Input: \`5 3\`
- Output: \`8\``,
            difficulty: 'Easy',
            difficultyLevel: 2,
            hints: JSON.stringify(['Khai báo: int a, b, tong;', 'scanf("%d %d", &a, &b);', 'tong = a + b;']),
            starterCode: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // Tính tổng và in ra
    
    return 0;
}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '5 3', expectedOutput: '8' },
                    { stdin: '10 20', expectedOutput: '30' },
                    { stdin: '-5 5', expectedOutput: '0' },
                ],
            },
        },
    })

    // Problem 5: Hiệu 2 số
    await prisma.problem.create({
        data: {
            title: 'Bài 5: Hiệu 2 số',
            description: `Nhập 2 số nguyên a, b. In ra hiệu a - b`,
            difficulty: 'Easy',
            difficultyLevel: 2,
            hints: JSON.stringify(['Tương tự bài 4', 'Dùng phép trừ: a - b']),
            starterCode: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // Viết code ở đây
    
    return 0;
}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '10 3', expectedOutput: '7' },
                    { stdin: '5 10', expectedOutput: '-5' },
                ],
            },
        },
    })

    // Problem 6: Tích 2 số
    await prisma.problem.create({
        data: {
            title: 'Bài 6: Tích 2 số',
            description: `Nhập 2 số nguyên a, b. In ra tích a * b`,
            difficulty: 'Easy',
            difficultyLevel: 2,
            starterCode: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // Viết code ở đây
    
    return 0;
}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '5 3', expectedOutput: '15' },
                    { stdin: '7 8', expectedOutput: '56' },
                ],
            },
        },
    })

    // Problem 7: Thương 2 số
    await prisma.problem.create({
        data: {
            title: 'Bài 7: Thương 2 số (chia lấy phần nguyên)',
            description: `Nhập 2 số nguyên a, b. In ra thương a / b (phần nguyên)

**Ví dụ:**
- Input: \`10 3\`
- Output: \`3\` (10/3 = 3.33... lấy phần nguyên = 3)`,
            difficulty: 'Easy',
            difficultyLevel: 2,
            hints: JSON.stringify(['Chia 2 số int sẽ tự động lấy phần nguyên']),
            starterCode: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // Viết code ở đây
    
    return 0;
}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '10 3', expectedOutput: '3' },
                    { stdin: '20 4', expectedOutput: '5' },
                ],
            },
        },
    })

    // Problem 8: Chia lấy dư
    await prisma.problem.create({
        data: {
            title: 'Bài 8: Chia lấy dư',
            description: `Nhập 2 số nguyên a, b. In ra phần dư khi chia a cho b

**Ví dụ:**
- Input: \`10 3\`
- Output: \`1\` (10 chia 3 dư 1)`,
            difficulty: 'Easy',
            difficultyLevel: 2,
            hints: JSON.stringify(['Dùng toán tử %; ví dụ: 10 % 3 = 1']),
            starterCode: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // Viết code ở đây
    
    return 0;
}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '10 3', expectedOutput: '1' },
                    { stdin: '15 4', expectedOutput: '3' },
                ],
            },
        },
    })

    // Problem 9: Đổi giá trị 2 biến
    await prisma.problem.create({
        data: {
            title: 'Bài 9: Đổi giá trị 2 biến',
            description: `Nhập 2 số a, b. In ra b trước, a sau (cách nhau bởi dấu cách)

**Ví dụ:**
- Input: \`5 10\`
- Output: \`10 5\``,
            difficulty: 'Easy',
            difficultyLevel: 3,
            hints: JSON.stringify(['Dùng biến tạm: int temp = a; a = b; b = temp;']),
            starterCode: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    // Viết code ở đây
    
    return 0;
}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '5 10', expectedOutput: '10 5' },
                    { stdin: '3 7', expectedOutput: '7 3' },
                ],
            },
        },
    })

    // Problem 10: Trung bình 3 số
    await prisma.problem.create({
        data: {
            title: 'Bài 10: Trung bình 3 số',
            description: `Nhập 3 số nguyên. In ra trung bình cộng (làm tròn 2 chữ số thập phân)

**Ví dụ:**
- Input: \`5 10 9\`
- Output: \`8.00\``,
            difficulty: 'Easy',
            difficultyLevel: 3,
            hints: JSON.stringify(['Dùng float để lưu kết quả', 'Công thức: (a+b+c)/3.0', 'In: printf("%.2f", avg);']),
            starterCode: `#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    // Tính trung bình
    
    return 0;
}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '5 10 9', expectedOutput: '8.00' },
                    { stdin: '3 6 9', expectedOutput: '6.00' },
                ],
            },
        },
    })

    // ============ 20 NEW PROBLEMS ============

    // Problem 11: Số lớn hơn (Difficulty: 3)
    await prisma.problem.create({
        data: {
            title: 'Bài 11: Số lớn hơn',
            description: 'Cho 2 số nguyên a và b. In ra số lớn hơn.',
            difficulty: 'Easy',
            difficultyLevel: 3,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '5 10', expectedOutput: '10' },
                    { stdin: '100 50', expectedOutput: '100' },
                    { stdin: '-5 -10', expectedOutput: '-5' },
                ],
            },
        },
    })

    // Problem 12: Chẵn hay lẻ (Difficulty: 3)
    await prisma.problem.create({
        data: {
            title: 'Bài 12: Chẵn hay lẻ',
            description: 'Cho số nguyên n. In ra "CHAN" nếu n chẵn, "LE" nếu n lẻ.',
            difficulty: 'Easy',
            difficultyLevel: 3,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '4', expectedOutput: 'CHAN' },
                    { stdin: '7', expectedOutput: 'LE' },
                    { stdin: '0', expectedOutput: 'CHAN' },
                ],
            },
        },
    })

    // Problem 13: Năm nhuận (Difficulty: 4)
    await prisma.problem.create({
        data: {
            title: 'Bài 13: Năm nhuận',
            description: 'Cho năm Y. In ra "YES" nếu là năm nhuận, "NO" nếu không.\n\nNăm nhuận: chia hết cho 4 NHƯNG không chia hết cho 100, HOẶC chia hết cho 400.',
            difficulty: 'Medium',
            difficultyLevel: 4,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int y;\n    scanf("%d", &y);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify(['Dùng toán tử % để kiểm tra chia hết', 'Kết hợp điều kiện với && và ||']),
            testCases: {
                create: [
                    { stdin: '2020', expectedOutput: 'YES' },
                    { stdin: '1900', expectedOutput: 'NO' },
                    { stdin: '2000', expectedOutput: 'YES' },
                    { stdin: '2021', expectedOutput: 'NO' },
                ],
            },
        },
    })

    // Problem 14: Giai thừa (Difficulty: 4)
    await prisma.problem.create({
        data: {
            title: 'Bài 14: Giai thừa',
            description: 'Tính giai thừa của n (n!).\n\nVí dụ: 5! = 5 × 4 × 3 × 2 × 1 = 120',
            difficulty: 'Medium',
            difficultyLevel: 4,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify(['Dùng vòng lặp for', 'Khởi tạo biến result = 1']),
            testCases: {
                create: [
                    { stdin: '5', expectedOutput: '120' },
                    { stdin: '3', expectedOutput: '6' },
                    { stdin: '0', expectedOutput: '1' },
                ],
            },
        },
    })

    // Problem 15: Số nguyên tố (Difficulty: 5)
    await prisma.problem.create({
        data: {
            title: 'Bài 15: Số nguyên tố',
            description: 'Kiểm tra số n có phải số nguyên tố không.\n\nIn "YES" nếu là số nguyên tố, "NO" nếu không.',
            difficulty: 'Medium',
            difficultyLevel: 5,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify([
                'Số nguyên tố chỉ chia hết cho 1 và chính nó',
                'Chỉ cần kiểm tra từ 2 đến sqrt(n)',
                'Số <= 1 không phải nguyên tố'
            ]),
            testCases: {
                create: [
                    { stdin: '7', expectedOutput: 'YES' },
                    { stdin: '10', expectedOutput: 'NO' },
                    { stdin: '2', expectedOutput: 'YES' },
                    { stdin: '1', expectedOutput: 'NO' },
                ],
            },
        },
    })

    // Problem 16: Fibonacci (Difficulty: 5)
    await prisma.problem.create({
        data: {
            title: 'Bài 16: Fibonacci thứ n',
            description: 'In ra số Fibonacci thứ n.\n\nDãy Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, ...',
            difficulty: 'Medium',
            difficultyLevel: 5,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify([
                'F(0) = 0, F(1) = 1',
                'F(n) = F(n-1) + F(n-2)',
                'Dùng 2 biến để lưu 2 số trước'
            ]),
            testCases: {
                create: [
                    { stdin: '0', expectedOutput: '0' },
                    { stdin: '1', expectedOutput: '1' },
                    { stdin: '6', expectedOutput: '8' },
                    { stdin: '10', expectedOutput: '55' },
                ],
            },
        },
    })

    // Problem 17: Tổng mảng (Difficulty: 4)
    await prisma.problem.create({
        data: {
            title: 'Bài 17: Tổng mảng',
            description: 'Cho n số nguyên. Tính tổng các số.\n\n**Input:**\n- Dòng 1: n (số lượng)\n- Dòng 2: n số nguyên\n\n**Output:** Tổng',
            difficulty: 'Medium',
            difficultyLevel: 4,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '3\n1 2 3', expectedOutput: '6' },
                    { stdin: '5\n10 20 30 40 50', expectedOutput: '150' },
                ],
            },
        },
    })

    // Problem 18: Số lớn nhất trong mảng (Difficulty: 4)
    await prisma.problem.create({
        data: {
            title: 'Bài 18: Số lớn nhất',
            description: 'Tìm số lớn nhất trong n số.\n\n**Input:**\n- Dòng 1: n\n- Dòng 2: n số nguyên',
            difficulty: 'Medium',
            difficultyLevel: 4,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '3\n5 10 3', expectedOutput: '10' },
                    { stdin: '4\n-5 -10 -1 -20', expectedOutput: '-1' },
                ],
            },
        },
    })

    // Problem 19: Đảo ngược mảng (Difficulty: 5)
    await prisma.problem.create({
        data: {
            title: 'Bài 19: Đảo ngược mảng',
            description: 'In mảng theo thứ tự ngược lại.\n\n**Input:**\n- Dòng 1: n\n- Dòng 2: n số\n\n**Output:** n số theo thứ tự ngược, cách nhau bởi dấu cách',
            difficulty: 'Medium',
            difficultyLevel: 5,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify(['Duyệt mảng từ cuối lên đầu', 'In từ arr[n-1] đến arr[0]']),
            testCases: {
                create: [
                    { stdin: '3\n1 2 3', expectedOutput: '3 2 1' },
                    { stdin: '5\n10 20 30 40 50', expectedOutput: '50 40 30 20 10' },
                ],
            },
        },
    })

    // Problem 20: Đếm số chẵn (Difficulty: 3)
    await prisma.problem.create({
        data: {
            title: 'Bài 20: Đếm số chẵn',
            description: 'Đếm có bao nhiêu số chẵn trong mảng.\n\n**Input:**\n- Dòng 1: n\n- Dòng 2: n số',
            difficulty: 'Easy',
            difficultyLevel: 3,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '5\n1 2 3 4 5', expectedOutput: '2' },
                    { stdin: '4\n2 4 6 8', expectedOutput: '4' },
                ],
            },
        },
    })

    // Problem 21: Tổng các số lẻ (Difficulty: 4)
    await prisma.problem.create({
        data: {
            title: 'Bài 21: Tổng các số lẻ',
            description: 'Tính tổng các số lẻ từ 1 đến n.',
            difficulty: 'Medium',
            difficultyLevel: 4,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '5', expectedOutput: '9' }, // 1+3+5=9
                    { stdin: '10', expectedOutput: '25' }, // 1+3+5+7+9=25
                ],
            },
        },
    })

    // Problem 22: Ước số chung lớn nhất (Difficulty: 5)
    await prisma.problem.create({
        data: {
            title: 'Bài 22: ƯCLN',
            description: 'Tìm ước số chung lớn nhất (GCD) của 2 số a và b.',
            difficulty: 'Medium',
            difficultyLevel: 5,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify([
                'Dùng thuật toán Euclid',
                'GCD(a, b) = GCD(b, a % b)',
                'Dừng khi b = 0, kết quả là a'
            ]),
            testCases: {
                create: [
                    { stdin: '12 8', expectedOutput: '4' },
                    { stdin: '7 3', expectedOutput: '1' },
                    { stdin: '100 50', expectedOutput: '50' },
                ],
            },
        },
    })

    // Problem 23: Bội số chung nhỏ nhất (Difficulty: 5)
    await prisma.problem.create({
        data: {
            title: 'Bài 23: BCNN',
            description: 'Tìm bội số chung nhỏ nhất (LCM) của 2 số a và b.\n\nCông thức: LCM(a, b) = (a × b) / GCD(a, b)',
            difficulty: 'Medium',
            difficultyLevel: 5,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify(['Tính GCD trước', 'LCM = (a * b) / GCD']),
            testCases: {
                create: [
                    { stdin: '4 6', expectedOutput: '12' },
                    { stdin: '3 5', expectedOutput: '15' },
                ],
            },
        },
    })

    // Problem 24: Số hoàn hảo (Difficulty: 6)
    await prisma.problem.create({
        data: {
            title: 'Bài 24: Số hoàn hảo',
            description: 'Kiểm tra n có phải số hoàn hảo không.\n\nSố hoàn hảo: tổng các ước (không kể n) = n\n\nVí dụ: 6 = 1 + 2 + 3',
            difficulty: 'Medium',
            difficultyLevel: 6,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify([
                'Tìm tất cả ước của n (từ 1 đến n/2)',
                'Cộng tất cả ước lại',
                'So sánh tổng với n'
            ]),
            testCases: {
                create: [
                    { stdin: '6', expectedOutput: 'YES' },
                    { stdin: '28', expectedOutput: 'YES' },
                    { stdin: '10', expectedOutput: 'NO' },
                ],
            },
        },
    })

    // Problem 25: Mảng đối xứng (Difficulty: 5)
    await prisma.problem.create({
        data: {
            title: 'Bài 25: Mảng đối xứng',
            description: 'Kiểm tra mảng có đối xứng không.\n\nMảng đối xứng: đọc từ trái sang = đọc từ phải sang\n\nVD: [1,2,3,2,1] là đối xứng',
            difficulty: 'Medium',
            difficultyLevel: 5,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify(['So sánh arr[i] với arr[n-1-i]', 'Duyệt đến giữa mảng']),
            testCases: {
                create: [
                    { stdin: '5\n1 2 3 2 1', expectedOutput: 'YES' },
                    { stdin: '3\n1 2 3', expectedOutput: 'NO' },
                    { stdin: '4\n5 5 5 5', expectedOutput: 'YES' },
                ],
            },
        },
    })

    // Problem 26: Sắp xếp tăng dần (Difficulty: 6)
    await prisma.problem.create({
        data: {
            title: 'Bài 26: Sắp xếp mảng',
            description: 'Sắp xếp mảng theo thứ tự tăng dần.\n\n**Input:**\n- Dòng 1: n\n- Dòng 2: n số\n\n**Output:** Mảng đã sắp xếp, các số cách nhau bởi dấu cách',
            difficulty: 'Medium',
            difficultyLevel: 6,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify([
                'Dùng thuật toán Bubble Sort hoặc Selection Sort',
                'So sánh và hoán đổi các phần tử',
                'Lặp lại cho đến khi mảng được sắp xếp'
            ]),
            testCases: {
                create: [
                    { stdin: '4\n3 1 4 2', expectedOutput: '1 2 3 4' },
                    { stdin: '5\n5 2 8 1 9', expectedOutput: '1 2 5 8 9' },
                ],
            },
        },
    })

    // Problem 27: Tìm kiếm trong mảng (Difficulty: 4)
    await prisma.problem.create({
        data: {
            title: 'Bài 27: Tìm kiếm',
            description: 'Tìm vị trí xuất hiện đầu tiên của số x trong mảng.\n\nIn vị trí (bắt đầu từ 0), hoặc -1 nếu không tìm thấy.',
            difficulty: 'Medium',
            difficultyLevel: 4,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n, x;\n    scanf("%d %d", &n, &x);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            testCases: {
                create: [
                    { stdin: '5 3\n1 2 3 4 5', expectedOutput: '2' },
                    { stdin: '4 10\n1 2 3 4', expectedOutput: '-1' },
                ],
            },
        },
    })

    // Problem 28: Số Armstrong (Difficulty: 6)
    await prisma.problem.create({
        data: {
            title: 'Bài 28: Số Armstrong',
            description: 'Kiểm tra n có phải số Armstrong không.\n\nSố Armstrong: tổng lũy thừa bậc k của các chữ số = n\n\nVD: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27',
            difficulty: 'Medium',
            difficultyLevel: 6,
            starterCode: `#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify([
                'Tách các chữ số bằng % 10',
                'Đếm số chữ số trước',
                'Dùng hàm pow() để tính lũy thừa'
            ]),
            testCases: {
                create: [
                    { stdin: '153', expectedOutput: 'YES' },
                    { stdin: '9474', expectedOutput: 'YES' },
                    { stdin: '123', expectedOutput: 'NO' },
                ],
            },
        },
    })

    // Problem 29: Ma trận chuyển vị (Difficulty: 7)
    await prisma.problem.create({
        data: {
            title: 'Bài 29: Ma trận chuyển vị',
            description: 'Tính ma trận chuyển vị của ma trận m×n.\n\n**Input:**\n- Dòng 1: m n\n- m dòng tiếp: mỗi dòng n số\n\n**Output:** Ma trận chuyển vị (n×m)',
            difficulty: 'Hard',
            difficultyLevel: 7,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int m, n;\n    scanf("%d %d", &m, &n);\n    int matrix[m][n];\n    for(int i = 0; i < m; i++) {\n        for(int j = 0; j < n; j++) {\n            scanf("%d", &matrix[i][j]);\n        }\n    }\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify([
                'Ma trận chuyển vị: hoán đổi hàng và cột',
                'A[i][j] -> A_transpose[j][i]',
                'Kích thước mới: n×m'
            ]),
            testCases: {
                create: [
                    { stdin: '2 3\n1 2 3\n4 5 6', expectedOutput: '1 4\n2 5\n3 6' },
                ],
            },
        },
    })

    // Problem 30: Số đối xứng (Palindrome) (Difficulty: 5)
    await prisma.problem.create({
        data: {
            title: 'Bài 30: Số đối xứng',
            description: 'Kiểm tra số n có phải số đối xứng (palindrome) không.\n\nVD: 121, 12321 là số đối xứng',
            difficulty: 'Medium',
            difficultyLevel: 5,
            starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
            lessonId: lesson2.id,
            hints: JSON.stringify([
                'Đảo ngược số rồi so sánh với số gốc',
                'Dùng % 10 để lấy chữ số cuối',
                'Dùng / 10 để bỏ chữ số cuối'
            ]),
            testCases: {
                create: [
                    { stdin: '121', expectedOutput: 'YES' },
                    { stdin: '123', expectedOutput: 'NO' },
                    { stdin: '12321', expectedOutput: 'YES' },
                ],
            },
        },
    })

    console.log('Seeding finished. Created 30 problems total (10 original + 20 new).')
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
