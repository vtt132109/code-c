import { ProblemData } from '../seed-utils'

export const conditionalProblems: ProblemData[] = [
    {
        title: 'Bài 21: Kiểm tra chẵn lẻ',
        description: 'Nhập vào số nguyên n. Kiểm tra xem n là số chẵn hay lẻ. In ra "Chan" hoặc "Le".',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Dùng toán tử %', 'n % 2 == 0 là chẵn'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
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
            { stdin: '7', expectedOutput: 'Le' },
            { stdin: '0', expectedOutput: 'Chan' }
        ]
    },
    {
        title: 'Bài 22: So sánh 2 số',
        description: 'Nhập vào 2 số nguyên a và b. In ra số lớn hơn. Nếu bằng nhau in ra "Bang nhau".',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Dùng if else if'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    if (a > b) {
        printf("%d", a);
    } else if (b > a) {
        printf("%d", b);
    } else {
        printf("Bang nhau");
    }
    return 0;
}`,
        testCases: [
            { stdin: '5 10', expectedOutput: '10' },
            { stdin: '20 5', expectedOutput: '20' },
            { stdin: '8 8', expectedOutput: 'Bang nhau' }
        ]
    },
    {
        title: 'Bài 23: Giải phương trình bậc 2',
        description: 'Giải phương trình ax^2 + bx + c = 0. Nhập a, b, c (a != 0). Tính Delta = b^2 - 4ac.\n- Delta < 0: In "Vo nghiem"\n- Delta = 0: In "Nghiem kep x = ..."\n- Delta > 0: In "x1 = ..., x2 = ..."\nKết quả làm tròn 2 chữ số thập phân.',
        difficulty: 'Medium',
        difficultyLevel: 3,
        hints: ['Dùng thư viện math.h để tính căn bậc 2: sqrt()', 'Xét các trường hợp của Delta'],
        starterCode: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    float a, b, c;\n    scanf("%f %f %f", &a, &b, &c);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>
#include <math.h>

int main() {
    float a, b, c;
    scanf("%f %f %f", &a, &b, &c);
    float delta = b*b - 4*a*c;
    
    if (delta < 0) {
        printf("Vo nghiem");
    } else if (delta == 0) {
        float x = -b / (2*a);
        printf("Nghiem kep x = %.2f", x);
    } else {
        float x1 = (-b + sqrt(delta)) / (2*a);
        float x2 = (-b - sqrt(delta)) / (2*a);
        printf("x1 = %.2f, x2 = %.2f", x1, x2);
    }
    return 0;
}`,
        testCases: [
            { stdin: '1 -2 1', expectedOutput: 'Nghiem kep x = 1.00' },
            { stdin: '1 -3 2', expectedOutput: 'x1 = 2.00, x2 = 1.00' },
            { stdin: '1 1 1', expectedOutput: 'Vo nghiem' }
        ]
    },
    {
        title: 'Bài 24: Xếp loại học lực',
        description: 'Nhập điểm trung bình (0-10). Xếp loại:\n- >= 9.0: Xuat sac\n- 8.0 - < 9.0: Gioi\n- 6.5 - < 8.0: Kha\n- 5.0 - < 6.5: Trung binh\n- < 5.0: Yeu',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Dùng if else if lồng nhau hoặc liên tiếp'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    float dtb;\n    scanf("%f", &dtb);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    float dtb;
    scanf("%f", &dtb);
    if (dtb >= 9.0) printf("Xuat sac");
    else if (dtb >= 8.0) printf("Gioi");
    else if (dtb >= 6.5) printf("Kha");
    else if (dtb >= 5.0) printf("Trung binh");
    else printf("Yeu");
    return 0;
}`,
        testCases: [
            { stdin: '9.5', expectedOutput: 'Xuat sac' },
            { stdin: '8.5', expectedOutput: 'Gioi' },
            { stdin: '7.0', expectedOutput: 'Kha' },
            { stdin: '5.5', expectedOutput: 'Trung binh' },
            { stdin: '4.0', expectedOutput: 'Yeu' }
        ]
    },
    {
        title: 'Bài 25: Kiểm tra năm nhuận',
        description: 'Nhập vào năm dương lịch. Kiểm tra xem có phải năm nhuận không. (Năm nhuận chia hết cho 400 hoặc (chia hết cho 4 nhưng không chia hết cho 100)). In "YES" hoặc "NO".',
        difficulty: 'Medium',
        difficultyLevel: 2,
        hints: ['((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int year;\n    scanf("%d", &year);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int year;
    scanf("%d", &year);
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        printf("YES");
    } else {
        printf("NO");
    }
    return 0;
}`,
        testCases: [
            { stdin: '2000', expectedOutput: 'YES' },
            { stdin: '2024', expectedOutput: 'YES' },
            { stdin: '2100', expectedOutput: 'NO' },
            { stdin: '2023', expectedOutput: 'NO' }
        ]
    }
]
