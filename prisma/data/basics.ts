import { ProblemData } from '../seed-utils'

export const basicProblems: ProblemData[] = [
    {
        title: 'Bài 1: Xin chào C',
        description: 'Viết chương trình in ra dòng chữ "Xin chao C" (không dấu).',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Sử dụng hàm printf'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    printf("Xin chao C");
    return 0;
}`,
        testCases: [
            { stdin: '', expectedOutput: 'Xin chao C' }
        ]
    },
    {
        title: 'Bài 2: Tổng hai số',
        description: 'Nhập vào hai số nguyên a và b. In ra tổng của chúng.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Sử dụng scanf để nhập', 'Sử dụng toán tử +'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", a + b);
    return 0;
}`,
        testCases: [
            { stdin: '3 5', expectedOutput: '8' },
            { stdin: '10 -2', expectedOutput: '8' },
            { stdin: '0 0', expectedOutput: '0' }
        ]
    },
    {
        title: 'Bài 3: Diện tích hình chữ nhật',
        description: 'Nhập vào chiều dài và chiều rộng của hình chữ nhật (số nguyên). In ra diện tích.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Diện tích = dài * rộng'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int dai, rong;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int dai, rong;
    scanf("%d %d", &dai, &rong);
    printf("%d", dai * rong);
    return 0;
}`,
        testCases: [
            { stdin: '4 5', expectedOutput: '20' },
            { stdin: '10 10', expectedOutput: '100' }
        ]
    },
    {
        title: 'Bài 4: Chu vi hình tròn',
        description: 'Nhập vào bán kính r (số thực). In ra chu vi hình tròn với 2 chữ số thập phân. Lấy PI = 3.14.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Chu vi = 2 * PI * r', 'Dùng %.2f để in số thực'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    float r;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    float r;
    scanf("%f", &r);
    printf("%.2f", 2 * 3.14 * r);
    return 0;
}`,
        testCases: [
            { stdin: '5', expectedOutput: '31.40' },
            { stdin: '1', expectedOutput: '6.28' }
        ]
    },
    {
        title: 'Bài 5: Đổi đơn vị đo',
        description: 'Nhập vào độ dài tính bằng cm (số nguyên). Đổi sang mét và in ra kết quả (số thực 2 chữ số thập phân).',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['1m = 100cm', 'Ép kiểu sang float khi chia'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int cm;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int cm;
    scanf("%d", &cm);
    printf("%.2f", cm / 100.0);
    return 0;
}`,
        testCases: [
            { stdin: '150', expectedOutput: '1.50' },
            { stdin: '50', expectedOutput: '0.50' }
        ]
    },
    {
        title: 'Bài 6: Trung bình cộng',
        description: 'Nhập vào 3 số nguyên. In ra trung bình cộng của chúng (lấy 2 chữ số thập phân).',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Tổng chia 3', 'Chú ý ép kiểu'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    printf("%.2f", (a + b + c) / 3.0);
    return 0;
}`,
        testCases: [
            { stdin: '1 2 3', expectedOutput: '2.00' },
            { stdin: '2 2 5', expectedOutput: '3.00' }
        ]
    },
    {
        title: 'Bài 7: Tìm số dư',
        description: 'Nhập vào hai số nguyên a và b. In ra phần dư của phép chia a cho b.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Dùng toán tử %'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", a % b);
    return 0;
}`,
        testCases: [
            { stdin: '10 3', expectedOutput: '1' },
            { stdin: '15 5', expectedOutput: '0' }
        ]
    },
    {
        title: 'Bài 8: Bình phương',
        description: 'Nhập vào một số nguyên n. In ra bình phương của nó.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['n * n'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    printf("%d", n * n);
    return 0;
}`,
        testCases: [
            { stdin: '5', expectedOutput: '25' },
            { stdin: '-3', expectedOutput: '9' }
        ]
    },
    {
        title: 'Bài 9: Đổi độ C sang độ F',
        description: 'Nhập vào nhiệt độ C (số thực). Đổi sang độ F và in ra (2 số thập phân). Công thức: F = (C * 9/5) + 32.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Chú ý 9/5 là phép chia nguyên nếu không ép kiểu'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    float c;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    float c;
    scanf("%f", &c);
    printf("%.2f", (c * 9.0 / 5.0) + 32);
    return 0;
}`,
        testCases: [
            { stdin: '0', expectedOutput: '32.00' },
            { stdin: '100', expectedOutput: '212.00' }
        ]
    },
    {
        title: 'Bài 10: Tính tuổi',
        description: 'Nhập vào năm sinh (số nguyên). In ra tuổi hiện tại (giả sử năm hiện tại là 2024).',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['2024 - năm sinh'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int year;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int year;
    scanf("%d", &year);
    printf("%d", 2024 - year);
    return 0;
}`,
        testCases: [
            { stdin: '2000', expectedOutput: '24' },
            { stdin: '1990', expectedOutput: '34' }
        ]
    },
    {
        title: 'Bài 11: Giá trị tuyệt đối',
        description: 'Nhập vào số nguyên n. In ra giá trị tuyệt đối của n (không dùng hàm abs).',
        difficulty: 'Easy',
        difficultyLevel: 3,
        hints: ['Nếu n < 0 thì in ra -n'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    if (n < 0) {
        printf("%d", -n);
    } else {
        printf("%d", n);
    }
    return 0;
}`,
        testCases: [
            { stdin: '-5', expectedOutput: '5' },
            { stdin: '10', expectedOutput: '10' }
        ]
    },
    {
        title: 'Bài 12: Số lớn nhất trong 2 số',
        description: 'Nhập 2 số nguyên. In ra số lớn hơn.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Dùng if else hoặc toán tử 3 ngôi'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    if (a > b) {
        printf("%d", a);
    } else {
        printf("%d", b);
    }
    return 0;
}`,
        testCases: [
            { stdin: '10 20', expectedOutput: '20' },
            { stdin: '5 5', expectedOutput: '5' }
        ]
    },
    {
        title: 'Bài 13: Kiểm tra số chẵn lẻ',
        description: 'Nhập số nguyên n. In "Chan" nếu n chẵn, "Le" nếu n lẻ.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['n % 2 == 0'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    if (n % 2 == 0) {
        printf("Chan");
    } else {
        printf("Le");
    }
    return 0;
}`,
        testCases: [
            { stdin: '4', expectedOutput: 'Chan' },
            { stdin: '7', expectedOutput: 'Le' }
        ]
    },
    {
        title: 'Bài 14: Kiểm tra số dương âm',
        description: 'Nhập số nguyên n. In "Duong" nếu n > 0, "Am" nếu n < 0, "Khong" nếu n = 0.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Dùng if else if'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    if (n > 0) {
        printf("Duong");
    } else if (n < 0) {
        printf("Am");
    } else {
        printf("Khong");
    }
    return 0;
}`,
        testCases: [
            { stdin: '5', expectedOutput: 'Duong' },
            { stdin: '-2', expectedOutput: 'Am' },
            { stdin: '0', expectedOutput: 'Khong' }
        ]
    },
    {
        title: 'Bài 15: Năm nhuận',
        description: 'Nhập năm dương lịch. Kiểm tra có phải năm nhuận không. In "Yes" hoặc "No". (Năm nhuận chia hết cho 400 hoặc (chia hết cho 4 nhưng không chia hết cho 100)).',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['((n % 400 == 0) || (n % 4 == 0 && n % 100 != 0))'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int year;\n    // Code của bạn ở đây\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int year;
    scanf("%d", &year);
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        printf("Yes");
    } else {
        printf("No");
    }
    return 0;
}`,
        testCases: [
            { stdin: '2000', expectedOutput: 'Yes' },
            { stdin: '2024', expectedOutput: 'Yes' },
            { stdin: '2100', expectedOutput: 'No' }
        ]
    }
]
