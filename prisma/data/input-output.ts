import { ProblemData } from '../seed-utils'

export const inputOutputProblems: ProblemData[] = [
    {
        title: 'Bài 4: Tính diện tích hình tròn',
        description: 'Viết chương trình nhập vào bán kính r (số thực) của hình tròn. Tính và in ra diện tích S = PI * r^2. Lấy PI = 3.14. Kết quả làm tròn đến 2 chữ số thập phân.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Sử dụng kiểu dữ liệu float hoặc double', 'In ra với định dạng %.2f'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    float r;\n    scanf("%f", &r);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    float r;
    scanf("%f", &r);
    float pi = 3.14;
    float s = pi * r * r;
    printf("%.2f", s);
    return 0;
}`,
        testCases: [
            { stdin: '5', expectedOutput: '78.50' },
            { stdin: '1', expectedOutput: '3.14' },
            { stdin: '10', expectedOutput: '314.00' }
        ]
    },
    {
        title: 'Bài 5: Đổi đơn vị tiền tệ',
        description: 'Viết chương trình nhập vào số tiền USD. Đổi sang VND với tỉ giá 1 USD = 23500 VND. In ra kết quả là số nguyên.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Nhập số tiền USD', 'Nhân với 23500', 'In ra kết quả'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int usd;\n    scanf("%d", &usd);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int usd;
    scanf("%d", &usd);
    long long vnd = (long long)usd * 23500;
    printf("%lld", vnd);
    return 0;
}`,
        testCases: [
            { stdin: '1', expectedOutput: '23500' },
            { stdin: '10', expectedOutput: '235000' },
            { stdin: '100', expectedOutput: '2350000' }
        ]
    },
    {
        title: 'Bài 6: Tính chu vi hình chữ nhật',
        description: 'Nhập vào chiều dài và chiều rộng của hình chữ nhật (số nguyên). Tính chu vi P = (dài + rộng) * 2.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Áp dụng công thức P = (a + b) * 2'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int d, r;\n    scanf("%d %d", &d, &r);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int d, r;
    scanf("%d %d", &d, &r);
    int p = (d + r) * 2;
    printf("%d", p);
    return 0;
}`,
        testCases: [
            { stdin: '5 3', expectedOutput: '16' },
            { stdin: '10 10', expectedOutput: '40' }
        ]
    },
    {
        title: 'Bài 7: Tính điểm trung bình',
        description: 'Nhập vào điểm Toán, Lý, Hóa (số thực). Tính điểm trung bình cộng và in ra với 2 chữ số thập phân.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['(Toán + Lý + Hóa) / 3', 'Chú ý kiểu dữ liệu float'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    float t, l, h;\n    scanf("%f %f %f", &t, &l, &h);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    float t, l, h;
    scanf("%f %f %f", &t, &l, &h);
    float dtb = (t + l + h) / 3;
    printf("%.2f", dtb);
    return 0;
}`,
        testCases: [
            { stdin: '8 8 8', expectedOutput: '8.00' },
            { stdin: '7 8 9', expectedOutput: '8.00' },
            { stdin: '5.5 6.5 7.5', expectedOutput: '6.50' }
        ]
    },
    {
        title: 'Bài 8: Chuyển đổi nhiệt độ',
        description: 'Nhập vào nhiệt độ C. Chuyển sang độ F theo công thức F = (C * 9/5) + 32. In ra với 2 chữ số thập phân.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Chú ý phép chia 9/5 trong C nếu là số nguyên sẽ ra 1', 'Viết là 9.0/5.0 hoặc 1.8'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    float c;\n    scanf("%f", &c);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    float c;
    scanf("%f", &c);
    float f = (c * 1.8) + 32;
    printf("%.2f", f);
    return 0;
}`,
        testCases: [
            { stdin: '0', expectedOutput: '32.00' },
            { stdin: '100', expectedOutput: '212.00' },
            { stdin: '37', expectedOutput: '98.60' }
        ]
    }
]
