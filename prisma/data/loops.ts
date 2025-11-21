import { ProblemData } from '../seed-utils'

export const loopProblems: ProblemData[] = [
    {
        title: 'Bài 31: In các số từ 1 đến n',
        description: 'Viết chương trình nhập vào số nguyên dương n. In ra các số từ 1 đến n, mỗi số trên một dòng.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Sử dụng vòng lặp for hoặc while', 'Khởi tạo biến đếm i = 1', 'Điều kiện lặp i <= n'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        printf("%d\\n", i);
    }
    return 0;
}`,
        testCases: [
            { stdin: '5', expectedOutput: '1\n2\n3\n4\n5' },
            { stdin: '1', expectedOutput: '1' },
            { stdin: '3', expectedOutput: '1\n2\n3' }
        ]
    },
    {
        title: 'Bài 32: Tổng các số từ 1 đến n',
        description: 'Viết chương trình tính tổng các số nguyên từ 1 đến n.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Dùng biến sum để cộng dồn', 'Khởi tạo sum = 0'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    long long sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    printf("%lld", sum);
    return 0;
}`,
        testCases: [
            { stdin: '5', expectedOutput: '15' },
            { stdin: '10', expectedOutput: '55' },
            { stdin: '1', expectedOutput: '1' }
        ]
    },
    {
        title: 'Bài 33: Bảng cửu chương',
        description: 'Nhập vào số nguyên n (1 <= n <= 9). In ra bảng cửu chương của n theo định dạng "n * i = result".',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Vòng lặp từ 1 đến 10', 'In theo định dạng %d * %d = %d'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= 10; i++) {
        printf("%d * %d = %d\\n", n, i, n * i);
    }
    return 0;
}`,
        testCases: [
            { stdin: '2', expectedOutput: '2 * 1 = 2\n2 * 2 = 4\n2 * 3 = 6\n2 * 4 = 8\n2 * 5 = 10\n2 * 6 = 12\n2 * 7 = 14\n2 * 8 = 16\n2 * 9 = 18\n2 * 10 = 20' },
            { stdin: '5', expectedOutput: '5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50' }
        ]
    },
    {
        title: 'Bài 34: Tính giai thừa',
        description: 'Nhập vào số nguyên dương n. Tính n! (n giai thừa).',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['n! = 1 * 2 * ... * n', 'Lưu ý với n=0 thì 0! = 1'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    long long gt = 1;
    for (int i = 1; i <= n; i++) {
        gt *= i;
    }
    printf("%lld", gt);
    return 0;
}`,
        testCases: [
            { stdin: '5', expectedOutput: '120' },
            { stdin: '3', expectedOutput: '6' },
            { stdin: '0', expectedOutput: '1' },
            { stdin: '1', expectedOutput: '1' }
        ]
    },
    {
        title: 'Bài 35: Đếm số ước của n',
        description: 'Nhập vào số nguyên dương n. Đếm xem n có bao nhiêu ước số dương.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Duyệt từ 1 đến n', 'Nếu n chia hết cho i thì tăng biến đếm'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int count = 0;
    for (int i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++;
        }
    }
    printf("%d", count);
    return 0;
}`,
        testCases: [
            { stdin: '10', expectedOutput: '4' }, // 1, 2, 5, 10
            { stdin: '7', expectedOutput: '2' },  // 1, 7
            { stdin: '1', expectedOutput: '1' }
        ]
    },
    {
        title: 'Bài 36: Kiểm tra số nguyên tố',
        description: 'Nhập vào số nguyên dương n. Kiểm tra xem n có phải là số nguyên tố hay không. In ra "YES" nếu đúng, "NO" nếu sai.',
        difficulty: 'Medium',
        difficultyLevel: 3,
        hints: ['Số nguyên tố chỉ chia hết cho 1 và chính nó', 'Duyệt từ 2 đến căn bậc 2 của n', 'Nếu n < 2 thì không phải số nguyên tố'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>
#include <math.h>

int main() {
    int n;
    scanf("%d", &n);
    if (n < 2) {
        printf("NO");
        return 0;
    }
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) {
            printf("NO");
            return 0;
        }
    }
    printf("YES");
    return 0;
}`,
        testCases: [
            { stdin: '7', expectedOutput: 'YES' },
            { stdin: '10', expectedOutput: 'NO' },
            { stdin: '1', expectedOutput: 'NO' },
            { stdin: '2', expectedOutput: 'YES' }
        ]
    },
    {
        title: 'Bài 37: Vẽ hình chữ nhật đặc',
        description: 'Nhập vào chiều dài m và chiều rộng n. Vẽ hình chữ nhật đặc bằng dấu sao (*).',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Dùng 2 vòng lặp lồng nhau'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int m, n;\n    scanf("%d %d", &m, &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`,
        testCases: [
            { stdin: '3 4', expectedOutput: '****\n****\n****' },
            { stdin: '2 2', expectedOutput: '**\n**' }
        ]
    },
    {
        title: 'Bài 38: Vẽ tam giác vuông',
        description: 'Nhập vào chiều cao h. Vẽ tam giác vuông cân đặc bằng dấu sao (*).',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Dòng i in ra i dấu sao'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int h;\n    scanf("%d", &h);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int h;
    scanf("%d", &h);
    for (int i = 1; i <= h; i++) {
        for (int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`,
        testCases: [
            { stdin: '3', expectedOutput: '*\n**\n***' },
            { stdin: '5', expectedOutput: '*\n**\n***\n****\n*****' }
        ]
    },
    {
        title: 'Bài 39: Tổng các chữ số',
        description: 'Nhập vào số nguyên dương n. Tính tổng các chữ số của n.',
        difficulty: 'Medium',
        difficultyLevel: 3,
        hints: ['Dùng phép chia lấy dư % 10 để lấy chữ số cuối', 'Dùng phép chia nguyên / 10 để bỏ chữ số cuối'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    printf("%d", sum);
    return 0;
}`,
        testCases: [
            { stdin: '123', expectedOutput: '6' },
            { stdin: '100', expectedOutput: '1' },
            { stdin: '99', expectedOutput: '18' }
        ]
    },
    {
        title: 'Bài 40: Số đảo ngược',
        description: 'Nhập vào số nguyên dương n. In ra số đảo ngược của n.',
        difficulty: 'Medium',
        difficultyLevel: 3,
        hints: ['Tương tự bài tính tổng chữ số', 'Nhân kết quả cũ với 10 rồi cộng chữ số mới'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int rev = 0;
    while (n > 0) {
        rev = rev * 10 + n % 10;
        n /= 10;
    }
    printf("%d", rev);
    return 0;
}`,
        testCases: [
            { stdin: '123', expectedOutput: '321' },
            { stdin: '100', expectedOutput: '1' }, // 001 -> 1
            { stdin: '12345', expectedOutput: '54321' }
        ]
    },
    {
        title: 'Bài 41: Tìm ước chung lớn nhất (UCLN)',
        description: 'Nhập vào 2 số nguyên dương a và b. Tìm UCLN của a và b.',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['Sử dụng thuật toán Euclid', 'UCLN(a, b) = UCLN(b, a % b)'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    printf("%d", a);
    return 0;
}`,
        testCases: [
            { stdin: '12 18', expectedOutput: '6' },
            { stdin: '10 5', expectedOutput: '5' },
            { stdin: '7 13', expectedOutput: '1' }
        ]
    },
    {
        title: 'Bài 42: Tìm bội chung nhỏ nhất (BCNN)',
        description: 'Nhập vào 2 số nguyên dương a và b. Tìm BCNN của a và b.',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['BCNN(a, b) = (a * b) / UCLN(a, b)'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    int x = a, y = b;
    while (y != 0) {
        int temp = y;
        y = x % y;
        x = temp;
    }
    printf("%lld", (long long)a * b / x);
    return 0;
}`,
        testCases: [
            { stdin: '12 18', expectedOutput: '36' },
            { stdin: '10 5', expectedOutput: '10' },
            { stdin: '7 3', expectedOutput: '21' }
        ]
    },
    {
        title: 'Bài 43: Dãy Fibonacci',
        description: 'Nhập vào n. In ra n số đầu tiên của dãy Fibonacci. (F0=0, F1=1)',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['Dùng 2 biến lưu 2 số trước đó'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    long long f0 = 0, f1 = 1;
    if (n >= 1) printf("0 ");
    if (n >= 2) printf("1 ");
    for (int i = 3; i <= n; i++) {
        long long fn = f0 + f1;
        printf("%lld ", fn);
        f0 = f1;
        f1 = fn;
    }
    return 0;
}`,
        testCases: [
            { stdin: '5', expectedOutput: '0 1 1 2 3 ' },
            { stdin: '1', expectedOutput: '0 ' },
            { stdin: '3', expectedOutput: '0 1 1 ' }
        ]
    },
    {
        title: 'Bài 44: Kiểm tra số hoàn hảo',
        description: 'Nhập vào số nguyên dương n. Kiểm tra xem n có phải là số hoàn hảo không (tổng các ước thực sự bằng chính nó). In "YES" hoặc "NO".',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['Tính tổng các ước từ 1 đến n/2'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int sum = 0;
    for (int i = 1; i <= n/2; i++) {
        if (n % i == 0) sum += i;
    }
    if (sum == n) printf("YES");
    else printf("NO");
    return 0;
}`,
        testCases: [
            { stdin: '6', expectedOutput: 'YES' }, // 1+2+3 = 6
            { stdin: '28', expectedOutput: 'YES' }, // 1+2+4+7+14 = 28
            { stdin: '10', expectedOutput: 'NO' }
        ]
    },
    {
        title: 'Bài 45: In hình thoi',
        description: 'Nhập vào số lẻ n. Vẽ hình thoi bằng dấu sao có đường chéo bằng n.',
        difficulty: 'Hard',
        difficultyLevel: 6,
        hints: ['Chia thành 2 phần: tam giác trên và tam giác dưới', 'Tính số khoảng trắng và số dấu sao từng dòng'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    scanf("%d", &n);
    int mid = n / 2;
    for (int i = 0; i < n; i++) {
        int stars = n - 2 * abs(mid - i);
        int spaces = abs(mid - i);
        for (int j = 0; j < spaces; j++) printf(" ");
        for (int j = 0; j < stars; j++) printf("*");
        printf("\\n");
    }
    return 0;
}`,
        testCases: [
            { stdin: '3', expectedOutput: ' *\n***\n *' },
            { stdin: '1', expectedOutput: '*' }
        ]
    }
]
