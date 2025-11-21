import { ProblemData } from '../seed-utils'

export const functionProblems: ProblemData[] = [
    {
        title: 'Bài 66: Hàm tính tổng 2 số',
        description: 'Viết hàm `int sum(int a, int b)` để tính tổng 2 số. Nhập vào 2 số và in ra kết quả.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Định nghĩa hàm trước main()', 'Hàm trả về kiểu int'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm ở đây\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Gọi hàm và in kết quả\n    return 0;\n}',
        solution: `#include <stdio.h>

int sum(int a, int b) {
    return a + b;
}

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", sum(a, b));
    return 0;
}`,
        testCases: [
            { stdin: '5 3', expectedOutput: '8' },
            { stdin: '10 20', expectedOutput: '30' }
        ]
    },
    {
        title: 'Bài 67: Hàm kiểm tra số chẵn',
        description: 'Viết hàm `int isEven(int n)` trả về 1 nếu n chẵn, 0 nếu n lẻ. Nhập n và in "YES" hoặc "NO".',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Hàm trả về 1 hoặc 0 (boolean)', 'Kiểm tra n % 2 == 0'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm ở đây\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int isEven(int n) {
    return n % 2 == 0;
}

int main() {
    int n;
    scanf("%d", &n);
    if (isEven(n)) {
        printf("YES");
    } else {
        printf("NO");
    }
    return 0;
}`,
        testCases: [
            { stdin: '4', expectedOutput: 'YES' },
            { stdin: '7', expectedOutput: 'NO' }
        ]
    },
    {
        title: 'Bài 68: Hàm tìm max',
        description: 'Viết hàm `int max(int a, int b)` trả về số lớn hơn giữa a và b. Nhập 2 số và in ra số lớn hơn.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Dùng if else để so sánh'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm ở đây\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int max(int a, int b) {
    if (a > b) return a;
    else return b;
}

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", max(a, b));
    return 0;
}`,
        testCases: [
            { stdin: '5 10', expectedOutput: '10' },
            { stdin: '20 15', expectedOutput: '20' }
        ]
    },
    {
        title: 'Bài 69: Hàm tính giai thừa (đệ quy)',
        description: 'Viết hàm đệ quy `long long factorial(int n)` để tính n!. Nhập n và in ra kết quả.',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['factorial(0) = 1, factorial(1) = 1', 'factorial(n) = n * factorial(n-1)'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm đệ quy ở đây\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

long long factorial(int n) {
    if (n == 0 || n == 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%lld", factorial(n));
    return 0;
}`,
        testCases: [
            { stdin: '5', expectedOutput: '120' },
            { stdin: '0', expectedOutput: '1' },
            { stdin: '3', expectedOutput: '6' }
        ]
    },
    {
        title: 'Bài 70: Fibonacci đệ quy',
        description: 'Viết hàm đệ quy `long long fib(int n)` tính số Fibonacci thứ n (F(0)=0, F(1)=1). Nhập n và in kết quả.',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['fib(n) = fib(n-1) + fib(n-2)', 'Điều kiện dừng: fib(0)=0, fib(1)=1'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm đệ quy ở đây\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

long long fib(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%lld", fib(n));
    return 0;
}`,
        testCases: [
            { stdin: '0', expectedOutput: '0' },
            { stdin: '1', expectedOutput: '1' },
            { stdin: '6', expectedOutput: '8' },
            { stdin: '10', expectedOutput: '55' }
        ]
    },
    {
        title: 'Bài 71: Lũy thừa đệ quy',
        description: 'Viết hàm đệ quy `long long power(int a, int n)` tính a^n. Nhập a và n, in kết quả.',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['power(a, 0) = 1', 'power(a, n) = a * power(a, n-1)'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm đệ quy ở đây\n\nint main() {\n    int a, n;\n    scanf("%d %d", &a, &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

long long power(int a, int n) {
    if (n == 0) return 1;
    return a * power(a, n - 1);
}

int main() {
    int a, n;
    scanf("%d %d", &a, &n);
    printf("%lld", power(a, n));
    return 0;
}`,
        testCases: [
            { stdin: '2 3', expectedOutput: '8' },
            { stdin: '5 2', expectedOutput: '25' },
            { stdin: '10 0', expectedOutput: '1' }
        ]
    },
    {
        title: 'Bài 72: Tổng các chữ số (đệ quy)',
        description: 'Viết hàm đệ quy `int sumDigits(int n)` tính tổng các chữ số của n. Nhập n và in kết quả.',
        difficulty: 'Medium',
        difficultyLevel: 5,
        hints: ['sumDigits(n) = (n % 10) + sumDigits(n / 10)', 'Điều kiện dừng: n == 0'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm đệ quy ở đây\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int sumDigits(int n) {
    if (n == 0) return 0;
    return (n % 10) + sumDigits(n / 10);
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%d", sumDigits(n));
    return 0;
}`,
        testCases: [
            { stdin: '123', expectedOutput: '6' },
            { stdin: '999', expectedOutput: '27' }
        ]
    },
    {
        title: 'Bài 73: Giới thiệu về con trỏ',
        description: 'Khai báo biến int x = 10. Khai báo con trỏ int *p trỏ đến x. In ra địa chỉ của x và giá trị mà p trỏ đến (chỉ in giá trị).',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['p = &x để lấy địa chỉ', '*p để lấy giá trị'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    // Khai báo con trỏ và in giá trị\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int x = 10;
    int *p = &x;
    printf("%d", *p);
    return 0;
}`,
        testCases: [
            { stdin: '', expectedOutput: '10' }
        ]
    },
    {
        title: 'Bài 74: Hoán đổi 2 số bằng hàm',
        description: 'Viết hàm `void swap(int *a, int *b)` để hoán đổi giá trị của 2 biến. Nhập 2 số, hoán đổi, in ra theo định dạng "a b".',
        difficulty: 'Medium',
        difficultyLevel: 3,
        hints: ['Truyền địa chỉ vào hàm: &a, &b', 'Trong hàm dùng *a và *b để truy xuất giá trị'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm swap ở đây\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Gọi hàm swap\n    printf("%d %d", a, b);\n    return 0;\n}',
        solution: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    swap(&a, &b);
    printf("%d %d", a, b);
    return 0;
}`,
        testCases: [
            { stdin: '5 10', expectedOutput: '10 5' },
            { stdin: '3 7', expectedOutput: '7 3' }
        ]
    },
    {
        title: 'Bài 75: Con trỏ và mảng',
        description: 'Nhập mảng n phần tử. Dùng con trỏ để duyệt và in mảng (mỗi phần tử cách nhau bởi khoảng trắng).',
        difficulty: 'Medium',
        difficultyLevel: 3,
        hints: ['arr là địa chỉ phần tử đầu tiên', 'Dùng *(arr + i) hoặc arr[i]'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Nhập mảng và dùng con trỏ in ra\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    int *p = arr;
    for (int i = 0; i < n; i++) {
        printf("%d ", *(p + i));
    }
    return 0;
}`,
        testCases: [
            { stdin: '5\n1 2 3 4 5', expectedOutput: '1 2 3 4 5 ' },
            { stdin: '3\n10 20 30', expectedOutput: '10 20 30 ' }
        ]
    },
    {
        title: 'Bài 76: Hàm tìm max trong mảng',
        description: 'Viết hàm `int findMax(int arr[], int n)` tìm phần tử lớn nhất trong mảng. Nhập mảng và in kết quả.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Mảng được truyền vào hàm như con trỏ', 'Duyệt mảng và so sánh'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm ở đây\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Nhập mảng, gọi hàm và in\n    return 0;\n}',
        solution: `#include <stdio.h>

int findMax(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    printf("%d", findMax(arr, n));
    return 0;
}`,
        testCases: [
            { stdin: '5\n1 5 3 2 4', expectedOutput: '5' },
            { stdin: '4\n-10 -5 -20 -3', expectedOutput: '-3' }
        ]
    },
    {
        title: 'Bài 77: Hàm sắp xếp mảng',
        description: 'Viết hàm `void sortArray(int arr[], int n)` để sắp xếp mảng tăng dần. Nhập mảng, sắp xếp và in ra.',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['Dùng Bubble Sort hoặc Selection Sort', 'Hàm void không trả về giá trị'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm ở đây\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Nhập, sắp xếp và in\n    return 0;\n}',
        solution: `#include <stdio.h>

void sortArray(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    sortArray(arr, n);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,
        testCases: [
            { stdin: '5\n5 2 8 1 9', expectedOutput: '1 2 5 8 9 ' },
            { stdin: '4\n4 3 2 1', expectedOutput: '1 2 3 4 ' }
        ]
    },
    {
        title: 'Bài 78: Hàm đếm ký tự trong chuỗi',
        description: 'Viết hàm `int countChar(char str[], char c)` đếm số lần ký tự c xuất hiện trong chuỗi. Nhập chuỗi và ký tự, in kết quả.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Duyệt chuỗi cho đến \\0', 'So sánh str[i] == c'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm ở đây\n\nint main() {\n    char str[1000], c;\n    scanf("%s", str);\n    scanf(" %c", &c);\n    // Gọi hàm và in\n    return 0;\n}',
        solution: `#include <stdio.h>

int countChar(char str[], char c) {
    int count = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        if (str[i] == c) {
            count++;
        }
    }
    return count;
}

int main() {
    char str[1000], c;
    scanf("%s", str);
    scanf(" %c", &c);
    printf("%d", countChar(str, c));
    return 0;
}`,
        testCases: [
            { stdin: 'hello\ne', expectedOutput: '1' },
            { stdin: 'programming\nm', expectedOutput: '2' }
        ]
    },
    {
        title: 'Bài 79: Hàm đảo ngược chuỗi',
        description: 'Viết hàm `void reverseString(char str[])` đảo ngược chuỗi tại chỗ (in-place). Nhập chuỗi, đảo ngược và in ra.',
        difficulty: 'Medium',
        difficultyLevel: 3,
        hints: ['Dùng 2 con trỏ: đầu và cuối', 'Hoán đổi str[i] với str[len-1-i]'],
        starterCode: '#include <stdio.h>\n#include <string.h>\n\n// Định nghĩa hàm ở đây\n\nint main() {\n    char str[1000];\n    scanf("%s", str);\n    // Gọi hàm và in\n    return 0;\n}',
        solution: `#include <stdio.h>
#include <string.h>

void reverseString(char str[]) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        char temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }
}

int main() {
    char str[1000];
    scanf("%s", str);
    reverseString(str);
    printf("%s", str);
    return 0;
}`,
        testCases: [
            { stdin: 'hello', expectedOutput: 'olleh' },
            { stdin: 'abc', expectedOutput: 'cba' }
        ]
    },
    {
        title: 'Bài 80: Hàm kiểm tra số nguyên tố',
        description: 'Viết hàm `int isPrime(int n)` kiểm tra số nguyên tố. Nhập n và in "YES" hoặc "NO".',
        difficulty: 'Medium',
        difficultyLevel: 3,
        hints: ['Trả về 1 nếu là số nguyên tố, 0 nếu không', 'Duyệt từ 2 đến sqrt(n)'],
        starterCode: '#include <stdio.h>\n#include <math.h>\n\n// Định nghĩa hàm ở đây\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>
#include <math.h>

int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main() {
    int n;
    scanf("%d", &n);
    if (isPrime(n)) {
        printf("YES");
    } else {
        printf("NO");
    }
    return 0;
}`,
        testCases: [
            { stdin: '7', expectedOutput: 'YES' },
            { stdin: '10', expectedOutput: 'NO' },
            { stdin: '2', expectedOutput: 'YES' }
        ]
    },
    {
        title: 'Bài 81: Tính tổng mảng bằng con trỏ',
        description: 'Viết hàm `long long sumArray(int *arr, int n)` tính tổng mảng sử dụng con trỏ. Nhập mảng và in tổng.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Dùng *(arr + i) để truy xuất phần tử'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm ở đây\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Nhập mảng, gọi hàm và in\n    return 0;\n}',
        solution: `#include <stdio.h>

long long sumArray(int *arr, int n) {
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        sum += *(arr + i);
    }
    return sum;
}

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    printf("%lld", sumArray(arr, n));
    return 0;
}`,
        testCases: [
            { stdin: '5\n1 2 3 4 5', expectedOutput: '15' },
            { stdin: '3\n10 20 30', expectedOutput: '60' }
        ]
    },
    {
        title: 'Bài 82: Tháp Hà Nội (đệ quy)',
        description: 'Viết hàm đệ quy giải bài toán Tháp Hà Nội với n đĩa. In ra số bước di chuyển tối thiểu (2^n - 1).',
        difficulty: 'Hard',
        difficultyLevel: 6,
        hints: ['hanoi(n) = 2 * hanoi(n-1) + 1', 'hanoi(1) = 1', 'Hoặc dùng công thức 2^n - 1'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Tính và in số bước\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    long long steps = (1LL << n) - 1;
    printf("%lld", steps);
    return 0;
}`,
        testCases: [
            { stdin: '1', expectedOutput: '1' },
            { stdin: '3', expectedOutput: '7' },
            { stdin: '4', expectedOutput: '15' }
        ]
    },
    {
        title: 'Bài 83: Hàm tính UCLN',
        description: 'Viết hàm `int gcd(int a, int b)` tính UCLN của a và b bằng thuật toán Euclid đệ quy. Nhập a, b và in UCLN.',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['gcd(a, b) = gcd(b, a % b)', 'Điều kiện dừng: b == 0'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm đệ quy ở đây\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Gọi hàm và in\n    return 0;\n}',
        solution: `#include <stdio.h>

int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", gcd(a, b));
    return 0;
}`,
        testCases: [
            { stdin: '12 18', expectedOutput: '6' },
            { stdin: '10 5', expectedOutput: '5' },
            { stdin: '7 13', expectedOutput: '1' }
        ]
    },
    {
        title: 'Bài 84: Hàm tính tổ hợp C(n,k)',
        description: 'Viết hàm đệ quy `long long combination(int n, int k)` tính tổ hợp C(n,k) = n!/(k!(n-k)!). Nhập n, k và in kết quả.',
        difficulty: 'Hard',
        difficultyLevel: 6,
        hints: ['C(n,k) = C(n-1, k-1) + C(n-1, k)', 'C(n, 0) = C(n, n) = 1'],
        starterCode: '#include <stdio.h>\n\n// Định nghĩa hàm đệ quy ở đây\n\nint main() {\n    int n, k;\n    scanf("%d %d", &n, &k);\n    // Gọi hàm và in\n    return 0;\n}',
        solution: `#include <stdio.h>

long long combination(int n, int k) {
    if (k == 0 || k == n) return 1;
    return combination(n - 1, k - 1) + combination(n - 1, k);
}

int main() {
    int n, k;
    scanf("%d %d", &n, &k);
    printf("%lld", combination(n, k));
    return 0;
}`,
        testCases: [
            { stdin: '5 2', expectedOutput: '10' },
            { stdin: '4 2', expectedOutput: '6' },
            { stdin: '6 3', expectedOutput: '20' }
        ]
    },
    {
        title: 'Bài 85: Con trỏ hàm cơ bản',
        description: 'Khai báo hàm `int square(int x)` tính bình phương. Dùng con trỏ hàm để gọi hàm này. Nhập x và in x^2.',
        difficulty: 'Hard',
        difficultyLevel: 7,
        hints: ['Khai báo: int (*funcPtr)(int) = &square;', 'Gọi: (*funcPtr)(x)'],
        starterCode: '#include <stdio.h>\n\nint square(int x) {\n    return x * x;\n}\n\nint main() {\n    int x;\n    scanf("%d", &x);\n    // Dùng con trỏ hàm\n    return 0;\n}',
        solution: `#include <stdio.h>

int square(int x) {
    return x * x;
}

int main() {
    int x;
    scanf("%d", &x);
    int (*funcPtr)(int) = &square;
    printf("%d", (*funcPtr)(x));
    return 0;
}`,
        testCases: [
            { stdin: '5', expectedOutput: '25' },
            { stdin: '3', expectedOutput: '9' }
        ]
    }
]
