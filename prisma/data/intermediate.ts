import { ProblemData } from '../seed-utils'

export const intermediateProblems: ProblemData[] = [
    {
        title: 'Bài 16: Fibonacci thứ n',
        description: 'In ra số Fibonacci thứ n.\n\nDãy Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, ...',
        difficulty: 'Medium',
        difficultyLevel: 5,
        theory: `### Dãy Fibonacci
        
Dãy Fibonacci là dãy số bắt đầu bằng 0 và 1, các số sau bằng tổng 2 số liền trước.

**Công thức:**
- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2) với n > 1

**Ví dụ:**
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

Để tính số Fibonacci thứ n, ta có thể dùng vòng lặp hoặc đệ quy. Với n lớn, vòng lặp sẽ hiệu quả hơn.`,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    long long f0 = 0, f1 = 1;
    if (n == 0) {
        printf("0");
        return 0;
    }
    if (n == 1) {
        printf("1");
        return 0;
    }
    for (int i = 2; i <= n; i++) {
        long long fn = f0 + f1;
        f0 = f1;
        f1 = fn;
    }
    printf("%lld", f1);
    return 0;
}`,
        hints: [
            'F(0) = 0, F(1) = 1',
            'F(n) = F(n-1) + F(n-2)',
            'Dùng 2 biến để lưu 2 số trước'
        ],
        testCases: [
            { stdin: '0', expectedOutput: '0' },
            { stdin: '1', expectedOutput: '1' },
            { stdin: '6', expectedOutput: '8' },
            { stdin: '10', expectedOutput: '55' },
        ]
    },
    {
        title: 'Bài 17: Tổng mảng',
        description: 'Cho n số nguyên. Tính tổng các số.\n\n**Input:**\n- Dòng 1: n (số lượng)\n- Dòng 2: n số nguyên\n\n**Output:** Tổng',
        difficulty: 'Medium',
        difficultyLevel: 4,
        theory: `### Tính tổng mảng

Để tính tổng các phần tử trong mảng, ta cần:

**Bước 1: Khởi tạo biến tổng**
- Sử dụng kiểu \`long long\` để tránh tràn số khi tổng lớn
- Khởi tạo \`sum = 0\`

**Bước 2: Duyệt qua từng phần tử**
\`\`\`c
for(int i = 0; i < n; i++) {
    sum += arr[i];
}
\`\`\`

**Lưu ý quan trọng:**
- Nếu dùng \`int\`: giới hạn khoảng ±2 tỷ
- Nếu dùng \`long long\`: giới hạn khoảng ±9 × 10¹⁸
- Nếu tổng có thể vượt quá giới hạn của \`int\`, **bắt buộc** dùng \`long long\`

**Độ phức tạp:** O(n) - duyệt qua n phần tử một lần`,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    long long sum = 0;
    for(int i = 0; i < n; i++) {
        sum += arr[i];
    }
    printf("%lld", sum);
    return 0;
}`,
        testCases: [
            { stdin: '3\n1 2 3', expectedOutput: '6' },
            { stdin: '5\n10 20 30 40 50', expectedOutput: '150' },
        ]
    },
    {
        title: 'Bài 18: Số lớn nhất',
        description: 'Tìm số lớn nhất trong n số.\n\n**Input:**\n- Dòng 1: n\n- Dòng 2: n số nguyên',
        difficulty: 'Medium',
        difficultyLevel: 4,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    int max = arr[0];
    for(int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    printf("%d", max);
    return 0;
}`,
        testCases: [
            { stdin: '3\n5 10 3', expectedOutput: '10' },
            { stdin: '4\n-5 -10 -1 -20', expectedOutput: '-1' },
        ]
    },
    {
        title: 'Bài 19: Đảo ngược mảng',
        description: 'In mảng theo thứ tự ngược lại.\n\n**Input:**\n- Dòng 1: n\n- Dòng 2: n số\n\n**Output:** n số theo thứ tự ngược, cách nhau bởi dấu cách',
        difficulty: 'Medium',
        difficultyLevel: 5,
        theory: `### Đảo ngược mảng

Có 2 phương pháp chính:

**Phương pháp 1: In ngược (Không thay đổi mảng)**
\`\`\`c
for(int i = n - 1; i >= 0; i--) {
    printf("%d ", arr[i]);
}
\`\`\`
- Đơn giản, nhanh
- Phù hợp nếu chỉ cần in kết quả

**Phương pháp 2: Hoán đổi tại chỗ (Swap)**
\`\`\`c
for(int i = 0; i < n/2; i++) {
    int temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
}
\`\`\`
- Thay đổi mảng gốc
- Chỉ cần duyệt nửa mảng (n/2 lần)
- Sử dụng biến \`temp\` để hoán đổi

**Kỹ thuật Two Pointers:**
- Con trỏ trái: \`i = 0\`
- Con trỏ phải: \`j = n-1\`
- Hoán đổi \`arr[i]\` với \`arr[j]\`, sau đó \`i++\`, \`j--\`
- Dừng khi \`i >= j\``,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    for(int i = n - 1; i >= 0; i--) {
        printf("%d", arr[i]);
        if (i > 0) printf(" ");
    }
    return 0;
}`,
        hints: ['Duyệt mảng từ cuối lên đầu', 'In từ arr[n-1] đến arr[0]'],
        testCases: [
            { stdin: '3\n1 2 3', expectedOutput: '3 2 1' },
            { stdin: '5\n10 20 30 40 50', expectedOutput: '50 40 30 20 10' },
        ]
    },
    {
        title: 'Bài 20: Đếm số chẵn',
        description: 'Đếm có bao nhiêu số chẵn trong mảng.\n\n**Input:**\n- Dòng 1: n\n- Dòng 2: n số',
        difficulty: 'Easy',
        difficultyLevel: 3,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    int count = 0;
    for(int i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            count++;
        }
    }
    printf("%d", count);
    return 0;
}`,
        testCases: [
            { stdin: '5\n1 2 3 4 5', expectedOutput: '2' },
            { stdin: '4\n2 4 6 8', expectedOutput: '4' },
        ]
    },
    {
        title: 'Bài 21: Tổng các số lẻ',
        description: 'Tính tổng các số lẻ từ 1 đến n.',
        difficulty: 'Medium',
        difficultyLevel: 4,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int sum = 0;
    for(int i = 1; i <= n; i += 2) {
        sum += i;
    }
    printf("%d", sum);
    return 0;
}`,
        testCases: [
            { stdin: '5', expectedOutput: '9' },
            { stdin: '10', expectedOutput: '25' },
        ]
    },
    {
        title: 'Bài 22: ƯCLN',
        description: 'Tìm ước số chung lớn nhất (GCD) của 2 số a và b.',
        difficulty: 'Medium',
        difficultyLevel: 5,
        theory: `### Thuật toán Euclid (ƯCLN)

**Ý tưởng:**
ƯCLN(a, b) = ƯCLN(b, a mod b)

**Ví dụ:** ƯCLN(12, 8)
- ƯCLN(12, 8) = ƯCLN(8, 4)   // 12 % 8 = 4
- ƯCLN(8, 4) = ƯCLN(4, 0)    // 8 % 4 = 0
- ƯCLN(4, 0) = **4**         // b = 0, trả về a

**Code mẫu:**
\`\`\`c
while(b != 0) {
    int temp = b;
    b = a % b;
    a = temp;
}
printf("%d", a); // a chính là ƯCLN
\`\`\`

**Tại sao hiệu quả?**
- Mỗi bước giảm ít nhất một nửa giá trị
- Độ phức tạp: O(log(min(a,b)))
- Nhanh hơn nhiều so với duyệt từ 1 đến min(a,b)

**Tính chất:**
- ƯCLN(a, 0) = a
- ƯCLN(a, b) = ƯCLN(b, a)
- ƯCLN luôn > 0 với a, b > 0`,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    while(b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    printf("%d", a);
    return 0;
}`,
        hints: [
            'Dùng thuật toán Euclid',
            'GCD(a, b) = GCD(b, a % b)',
            'Dừng khi b = 0, kết quả là a'
        ],
        testCases: [
            { stdin: '12 8', expectedOutput: '4' },
            { stdin: '7 3', expectedOutput: '1' },
            { stdin: '100 50', expectedOutput: '50' },
        ]
    },
    {
        title: 'Bài 23: BCNN',
        description: 'Tìm bội số chung nhỏ nhất (LCM) của 2 số a và b.\n\nCông thức: LCM(a, b) = (a × b) / GCD(a, b)',
        difficulty: 'Medium',
        difficultyLevel: 5,
        theory: `### Bội số chung nhỏ nhất (BCNN)

**Công thức quan trọng:**
BCNN(a, b) = (a × b) / ƯCLN(a, b)

**Ví dụ:** BCNN(4, 6)
- Bước 1: Tìm ƯCLN(4, 6) = **2**
- Bước 2: BCNN = (4 × 6) / 2 = **12**

**Giải thích:**
- Bội chung nhỏ nhất là số nhỏ nhất chia hết cho cả a và b
- VD: BC(4, 6) = {12, 24, 36, ...} → BCN = 12

**Tại sao công thức đúng?**
- a × b chứa tất cả thừa số của cả a và b
- Nhưng các thừa số chung bị đếm 2 lần
- Chia cho ƯCLN để loại bỏ phần thừa

**Lưu ý khi code:**
\`\`\`c
// Sai: có thể tràn số
int lcm = (a * b) / gcd;

// Đúng: chia trước để tránh tràn
int lcm = a / gcd * b;
\`\`\`

**Tính chất:**
- BCNN(a, b) ≥ max(a, b)
- BCNN(a, 1) = a
- ƯCLN(a, b) × BCNN(a, b) = a × b`,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    int temp_a = a, temp_b = b;
    while(temp_b != 0) {
        int temp = temp_b;
        temp_b = temp_a % temp_b;
        temp_a = temp;
    }
    int gcd = temp_a;
    printf("%d", (a * b) / gcd);
    return 0;
}`,
        hints: ['Tính GCD trước', 'LCM = (a * b) / GCD'],
        testCases: [
            { stdin: '4 6', expectedOutput: '12' },
            { stdin: '3 5', expectedOutput: '15' },
        ]
    },
    {
        title: 'Bài 24: Số hoàn hảo',
        description: 'Kiểm tra n có phải số hoàn hảo không.\n\nSố hoàn hảo: tổng các ước (không kể n) = n\n\nVí dụ: 6 = 1 + 2 + 3',
        difficulty: 'Medium',
        difficultyLevel: 6,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int sum = 0;
    for(int i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum == n && n > 0) {
        printf("YES");
    } else {
        printf("NO");
    }
    return 0;
}`,
        hints: [
            'Tìm tất cả ước của n (từ 1 đến n/2)',
            'Cộng tất cả ước lại',
            'So sánh tổng với n'
        ],
        testCases: [
            { stdin: '6', expectedOutput: 'YES' },
            { stdin: '28', expectedOutput: 'YES' },
            { stdin: '10', expectedOutput: 'NO' },
        ]
    },
    {
        title: 'Bài 25: Mảng đối xứng',
        description: 'Kiểm tra mảng có đối xứng không.\n\nMảng đối xứng: đọc từ trái sang = đọc từ phải sang\n\nVD: [1,2,3,2,1] là đối xứng',
        difficulty: 'Medium',
        difficultyLevel: 5,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    int isPalindrome = 1;
    for(int i = 0; i < n / 2; i++) {
        if (arr[i] != arr[n - 1 - i]) {
            isPalindrome = 0;
            break;
        }
    }
    if (isPalindrome) {
        printf("YES");
    } else {
        printf("NO");
    }
    return 0;
}`,
        hints: ['So sánh arr[i] với arr[n-1-i]', 'Duyệt đến giữa mảng'],
        testCases: [
            { stdin: '5\n1 2 3 2 1', expectedOutput: 'YES' },
            { stdin: '3\n1 2 3', expectedOutput: 'NO' },
            { stdin: '4\n5 5 5 5', expectedOutput: 'YES' },
        ]
    },
    {
        title: 'Bài 26: Sắp xếp mảng',
        description: 'Sắp xếp mảng theo thứ tự tăng dần.\n\n**Input:**\n- Dòng 1: n\n- Dòng 2: n số\n\n**Output:** Mảng đã sắp xếp, các số cách nhau bởi dấu cách',
        difficulty: 'Medium',
        difficultyLevel: 6,
        theory: `### Thuật toán sắp xếp nổi bọt (Bubble Sort)

**Ý tưởng:**
Đẩy phần tử lớn nhất về cuối mảng sau mỗi vòng lặp.

**Minh họa:** [5, 2, 8, 1]
- **Vòng 1:** [2, 5, 1, **8**] - 8 "nổi" lên cuối
- **Vòng 2:** [2, 1, **5**, 8] - 5 "nổi" lên
- **Vòng 3:** [1, **2**, 5, 8] - 2 "nổi" lên
- Kết quả: [1, 2, 5, 8]

**Code:**
\`\`\`c
for(int i = 0; i < n-1; i++) {
    for(int j = 0; j < n-i-1; j++) {
        if(arr[j] > arr[j+1]) {
            // Hoán đổi arr[j] và arr[j+1]
            int temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
\`\`\`

**Giải thích:**
- Vòng ngoài (\`i\`): số lần lặp = n-1
- Vòng trong (\`j\`): so sánh các cặp kề nhau
- \`n-i-1\`: vì i phần tử cuối đã đúng vị trí

**Độ phức tạp:**
- Tốt nhất: O(n) - mảng đã sắp xếp
- Trung bình & Tệ nhất: O(n²)

**Thuật toán khác (nâng cao):**
- **Selection Sort:** Chọn phần tử nhỏ nhất đưa lên đầu - O(n²)
- **Quick Sort:** Chia để trị - O(n log n)
- **Merge Sort:** Trộn dãy con - O(n log n)`,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    // Bubble sort
    for(int i = 0; i < n - 1; i++) {
        for(int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    for(int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i < n - 1) printf(" ");
    }
    return 0;
}`,
        hints: [
            'Dùng thuật toán Bubble Sort hoặc Selection Sort',
            'So sánh và hoán đổi các phần tử',
            'Lặp lại cho đến khi mảng được sắp xếp'
        ],
        testCases: [
            { stdin: '4\n3 1 4 2', expectedOutput: '1 2 3 4' },
            { stdin: '5\n5 2 8 1 9', expectedOutput: '1 2 5 8 9' },
        ]
    },
    {
        title: 'Bài 27: Tìm kiếm',
        description: 'Tìm vị trí xuất hiện đầu tiên của số x trong mảng.\n\nIn vị trí (bắt đầu từ 0), hoặc -1 nếu không tìm thấy.',
        difficulty: 'Medium',
        difficultyLevel: 4,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n, x;\n    scanf("%d %d", &n, &x);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int n, x;
    scanf("%d %d", &n, &x);
    int arr[n];
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    for(int i = 0; i < n; i++) {
        if (arr[i] == x) {
            printf("%d", i);
            return 0;
        }
    }
    printf("-1");
    return 0;
}`,
        testCases: [
            { stdin: '5 3\n1 2 3 4 5', expectedOutput: '2' },
            { stdin: '4 10\n1 2 3 4', expectedOutput: '-1' },
        ]
    },
    {
        title: 'Bài 28: Số Armstrong',
        description: 'Kiểm tra n có phải số Armstrong không.\n\nSố Armstrong: tổng lũy thừa bậc k của các chữ số = n\n\nVD: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27',
        difficulty: 'Medium',
        difficultyLevel: 6,
        starterCode: `#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>
#include <math.h>

int main() {
    int n;
    scanf("%d", &n);
    int original = n;
    int digits = 0;
    int temp = n;
    while(temp > 0) {
        digits++;
        temp /= 10;
    }
    int sum = 0;
    temp = n;
    while(temp > 0) {
        int digit = temp % 10;
        sum += pow(digit, digits);
        temp /= 10;
    }
    if (sum == original) {
        printf("YES");
    } else {
        printf("NO");
    }
    return 0;
}`,
        hints: [
            'Tách các chữ số bằng % 10',
            'Đếm số chữ số trước',
            'Dùng hàm pow() để tính lũy thừa'
        ],
        testCases: [
            { stdin: '153', expectedOutput: 'YES' },
            { stdin: '9474', expectedOutput: 'YES' },
            { stdin: '123', expectedOutput: 'NO' },
        ]
    },
    {
        title: 'Bài 29: Ma trận chuyển vị',
        description: 'Tính ma trận chuyển vị của ma trận m×n.\n\n**Input:**\n- Dòng 1: m n\n- m dòng tiếp: mỗi dòng n số\n\n**Output:** Ma trận chuyển vị (n×m)',
        difficulty: 'Hard',
        difficultyLevel: 7,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int m, n;\n    scanf("%d %d", &m, &n);\n    int matrix[m][n];\n    for(int i = 0; i < m; i++) {\n        for(int j = 0; j < n; j++) {\n            scanf("%d", &matrix[i][j]);\n        }\ n    }\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int matrix[m][n];
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            scanf("%d", &matrix[i][j]);
        }
    }
    for(int j = 0; j < n; j++) {
        for(int i = 0; i < m; i++) {
            printf("%d", matrix[i][j]);
            if (i < m - 1) printf(" ");
        }
        printf("\\n");
    }
    return 0;
}`,
        hints: [
            'Ma trận chuyển vị: hoán đổi hàng và cột',
            'A[i][j] -> A_transpose[j][i]',
            'Kích thước mới: n×m'
        ],
        testCases: [
            { stdin: '2 3\n1 2 3\n4 5 6', expectedOutput: '1 4\n2 5\n3 6' },
        ]
    },
    {
        title: 'Bài 30: Số đối xứng',
        description: 'Kiểm tra số n có phải số đối xứng (palindrome) không.\n\nVD: 121, 12321 là số đối xứng',
        difficulty: 'Medium',
        difficultyLevel: 5,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int original = n;
    int reversed = 0;
    while(n > 0) {
        reversed = reversed * 10 + (n % 10);
        n /= 10;
    }
    if (reversed == original) {
        printf("YES");
    } else {
        printf("NO");
    }
    return 0;
}`,
        hints: [
            'Đảo ngược số rồi so sánh với số gốc',
            'Dùng % 10 để lấy chữ số cuối',
            'Dùng / 10 để bỏ chữ số cuối'
        ],
        testCases: [
            { stdin: '121', expectedOutput: 'YES' },
            { stdin: '123', expectedOutput: 'NO' },
            { stdin: '12321', expectedOutput: 'YES' },
        ]
    }
]
