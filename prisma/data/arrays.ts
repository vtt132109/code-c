import { ProblemData } from '../seed-utils'

export const arrayProblems: ProblemData[] = [
    {
        title: 'Bài 46: Nhập và in mảng',
        description: 'Nhập vào số phần tử n và n số nguyên. In ra mảng đó trên một dòng, cách nhau bởi khoảng trắng.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Dùng vòng for để nhập', 'Dùng vòng for để in'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,
        testCases: [
            { stdin: '5\n1 2 3 4 5', expectedOutput: '1 2 3 4 5 ' },
            { stdin: '3\n10 20 30', expectedOutput: '10 20 30 ' }
        ]
    },
    {
        title: 'Bài 47: Tổng các phần tử mảng',
        description: 'Nhập vào n và n số nguyên. Tính tổng các phần tử trong mảng.',
        difficulty: 'Easy',
        difficultyLevel: 1,
        hints: ['Dùng biến sum để cộng dồn'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    printf("%lld", sum);
    return 0;
}`,
        testCases: [
            { stdin: '5\n1 2 3 4 5', expectedOutput: '15' },
            { stdin: '3\n10 20 30', expectedOutput: '60' }
        ]
    },
    {
        title: 'Bài 48: Tìm max trong mảng',
        description: 'Nhập vào n và n số nguyên. Tìm giá trị lớn nhất trong mảng.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Khởi tạo max = arr[0]', 'Duyệt mảng và cập nhật max'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    printf("%d", max);
    return 0;
}`,
        testCases: [
            { stdin: '5\n1 5 3 2 4', expectedOutput: '5' },
            { stdin: '4\n-10 -5 -20 -3', expectedOutput: '-3' }
        ]
    },
    {
        title: 'Bài 49: Đếm số chẵn trong mảng',
        description: 'Nhập vào n và n số nguyên. Đếm số phần tử chẵn trong mảng.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Kiểm tra arr[i] % 2 == 0'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            count++;
        }
    }
    printf("%d", count);
    return 0;
}`,
        testCases: [
            { stdin: '5\n1 2 3 4 5', expectedOutput: '2' },
            { stdin: '4\n2 4 6 8', expectedOutput: '4' }
        ]
    },
    {
        title: 'Bài 50: Tìm kiếm tuyến tính',
        description: 'Nhập mảng n phần tử và giá trị x cần tìm. In ra vị trí (index) đầu tiên của x trong mảng. Nếu không tìm thấy, in -1.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Duyệt từ đầu đến cuối mảng', 'Khi tìm thấy thì in ra index và return'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n, x;\n    scanf("%d %d", &n, &x);\n    int arr[n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n, x;
    scanf("%d %d", &n, &x);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    for (int i = 0; i < n; i++) {
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
            { stdin: '4 10\n1 2 3 4', expectedOutput: '-1' }
        ]
    },
    {
        title: 'Bài 51: Đảo ngược mảng',
        description: 'Nhập mảng n phần tử. In ra mảng theo thứ tự ngược lại.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Duyệt từ cuối về đầu', 'Hoặc hoán đổi arr[i] với arr[n-1-i]'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    for (int i = n - 1; i >= 0; i--) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,
        testCases: [
            { stdin: '5\n1 2 3 4 5', expectedOutput: '5 4 3 2 1 ' },
            { stdin: '3\n10 20 30', expectedOutput: '30 20 10 ' }
        ]
    },
    {
        title: 'Bài 52: Sắp xếp nổi bọt (Bubble Sort)',
        description: 'Nhập mảng n phần tử. Sắp xếp mảng theo thứ tự tăng dần bằng thuật toán Bubble Sort. In ra mảng sau khi sắp xếp.',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['Dùng 2 vòng for lồng nhau', 'So sánh và hoán đổi arr[i] với arr[j]'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    // Bubble sort
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
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
        title: 'Bài 53: Đếm độ dài chuỗi',
        description: 'Nhập vào một chuỗi (không chứa khoảng trắng). In ra độ dài của chuỗi (không dùng hàm strlen).',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Duyệt từng ký tự cho đến khi gặp \\0'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    char s[1000];\n    scanf("%s", s);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    char s[1000];
    scanf("%s", s);
    int len = 0;
    while (s[len] != '\\0') {
        len++;
    }
    printf("%d", len);
    return 0;
}`,
        testCases: [
            { stdin: 'hello', expectedOutput: '5' },
            { stdin: 'C', expectedOutput: '1' },
            { stdin: 'programming', expectedOutput: '11' }
        ]
    },
    {
        title: 'Bài 54: In chuỗi ngược',
        description: 'Nhập vào một chuỗi. In ra chuỗi đó theo thứ tự ngược lại.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Tính độ dài chuỗi trước', 'Duyệt từ cuối về đầu'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    char s[1000];\n    scanf("%s", s);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[1000];
    scanf("%s", s);
    int len = strlen(s);
    for (int i = len - 1; i >= 0; i--) {
        printf("%c", s[i]);
    }
    return 0;
}`,
        testCases: [
            { stdin: 'hello', expectedOutput: 'olleh' },
            { stdin: 'abc', expectedOutput: 'cba' }
        ]
    },
    {
        title: 'Bài 55: Đếm nguyên âm',
        description: 'Nhập vào một chuỗi (chỉ chứa chữ thường). Đếm số ký tự nguyên âm (a, e, i, o, u) trong chuỗi.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Duyệt từng ký tự', 'Kiểm tra xem ký tự có phải a, e, i, o, u không'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    char s[1000];\n    scanf("%s", s);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[1000];
    scanf("%s", s);
    int count = 0;
    for (int i = 0; i < strlen(s); i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || 
            s[i] == 'o' || s[i] == 'u') {
            count++;
        }
    }
    printf("%d", count);
    return 0;
}`,
        testCases: [
            { stdin: 'hello', expectedOutput: '2' },
            { stdin: 'programming', expectedOutput: '3' },
            { stdin: 'xyz', expectedOutput: '0' }
        ]
    },
    {
        title: 'Bài 56: Kiểm tra chuỗi đối xứng',
        description: 'Nhập vào một chuỗi. Kiểm tra xem chuỗi có phải là palindrome (đối xứng) không. In "YES" hoặc "NO".',
        difficulty: 'Medium',
        difficultyLevel: 3,
        hints: ['So sánh s[i] với s[len-1-i]', 'Duyệt từ đầu đến giữa chuỗi'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    char s[1000];\n    scanf("%s", s);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[1000];
    scanf("%s", s);
    int len = strlen(s);
    int isPalindrome = 1;
    for (int i = 0; i < len / 2; i++) {
        if (s[i] != s[len - 1 - i]) {
            isPalindrome = 0;
            break;
        }
    }
    if (isPalindrome) printf("YES");
    else printf("NO");
    return 0;
}`,
        testCases: [
            { stdin: 'racecar', expectedOutput: 'YES' },
            { stdin: 'hello', expectedOutput: 'NO' },
            { stdin: 'aba', expectedOutput: 'YES' }
        ]
    },
    {
        title: 'Bài 57: Chuyển chữ hoa thành chữ thường',
        description: 'Nhập vào một chuỗi chỉ chứa chữ cái. Chuyển tất cả chữ hoa thành chữ thường và in ra.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Nếu s[i] >= \'A\' && s[i] <= \'Z\' thì s[i] = s[i] + 32'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    char s[1000];\n    scanf("%s", s);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[1000];
    scanf("%s", s);
    for (int i = 0; i < strlen(s); i++) {
        if (s[i] >= 'A' && s[i] <= 'Z') {
            s[i] = s[i] + 32;
        }
    }
    printf("%s", s);
    return 0;
}`,
        testCases: [
            { stdin: 'HELLO', expectedOutput: 'hello' },
            { stdin: 'WoRLd', expectedOutput: 'world' }
        ]
    },
    {
        title: 'Bài 58: Đếm từ trong câu',
        description: 'Nhập vào một câu (dòng text có thể chứa nhiều từ cách nhau bởi khoảng trắng). Đếm số từ trong câu.',
        difficulty: 'Medium',
        difficultyLevel: 3,
        hints: ['Đếm số khoảng trắng + 1', 'Hoặc dùng fgets và đếm transitions từ space sang non-space'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    char s[1000];\n    fgets(s, 1000, stdin);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s[1000];
    fgets(s, 1000, stdin);
    int count = 0;
    int inWord = 0;
    for (int i = 0; i < strlen(s); i++) {
        if (s[i] != ' ' && s[i] != '\\n' && s[i] != '\\t') {
            if (!inWord) {
                count++;
                inWord = 1;
            }
        } else {
            inWord = 0;
        }
    }
    printf("%d", count);
    return 0;
}`,
        testCases: [
            { stdin: 'hello world', expectedOutput: '2' },
            { stdin: 'C programming is fun', expectedOutput: '4' },
            { stdin: 'one', expectedOutput: '1' }
        ]
    },
    {
        title: 'Bài 59: So sánh 2 chuỗi',
        description: 'Nhập vào 2 chuỗi. So sánh 2 chuỗi (không dùng strcmp). In "EQUAL" nếu bằng nhau, "NOT EQUAL" nếu khác nhau.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['So sánh độ dài trước', 'Sau đó so sánh từng ký tự'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    char s1[1000], s2[1000];\n    scanf("%s %s", s1, s2);\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s1[1000], s2[1000];
    scanf("%s %s", s1, s2);
    int len1 = strlen(s1);
    int len2 = strlen(s2);
    if (len1 != len2) {
        printf("NOT EQUAL");
        return 0;
    }
    for (int i = 0; i < len1; i++) {
        if (s1[i] != s2[i]) {
            printf("NOT EQUAL");
            return 0;
        }
    }
    printf("EQUAL");
    return 0;
}`,
        testCases: [
            { stdin: 'hello hello', expectedOutput: 'EQUAL' },
            { stdin: 'hello world', expectedOutput: 'NOT EQUAL' },
            { stdin: 'abc ABC', expectedOutput: 'NOT EQUAL' }
        ]
    },
    {
        title: 'Bài 60: Tìm phần tử xuất hiện nhiều nhất',
        description: 'Nhập mảng n phần tử (n <= 100, các giá trị từ 0-100). Tìm phần tử xuất hiện nhiều nhất. Nếu có nhiều phần tử có cùng số lần xuất hiện cao nhất, in ra phần tử nhỏ nhất.',
        difficulty: 'Medium',
        difficultyLevel: 5,
        hints: ['Dùng mảng đếm tần suất freq[101]', 'Duyệt mảng freq để tìm max'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    int freq[101] = {0};
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        freq[arr[i]]++;
    }
    int maxFreq = 0;
    int result = 0;
    for (int i = 0; i <= 100; i++) {
        if (freq[i] > maxFreq) {
            maxFreq = freq[i];
            result = i;
        }
    }
    printf("%d", result);
    return 0;
}`,
        testCases: [
            { stdin: '7\n1 2 3 2 2 4 5', expectedOutput: '2' },
            { stdin: '5\n5 5 3 3 1', expectedOutput: '3' }
        ]
    },
    {
        title: 'Bài 61: Tìm kiếm nhị phân',
        description: 'Cho mảng đã được sắp xếp tăng dần gồm n phần tử. Tìm vị trí của phần tử x bằng thuật toán Binary Search. In ra vị trí (index), nếu không tìm thấy in -1.',
        difficulty: 'Medium',
        difficultyLevel: 5,
        hints: ['Dùng 2 con trỏ left và right', 'mid = (left + right) / 2', 'So sánh arr[mid] với x'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n, x;\n    scanf("%d %d", &n, &x);\n    int arr[n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n, x;
    scanf("%d %d", &n, &x);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = (left + right) / 2;
        if (arr[mid] == x) {
            printf("%d", mid);
            return 0;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    printf("-1");
    return 0;
}`,
        testCases: [
            { stdin: '5 3\n1 2 3 4 5', expectedOutput: '2' },
            { stdin: '6 10\n2 4 6 8 10 12', expectedOutput: '4' },
            { stdin: '4 5\n1 2 3 4', expectedOutput: '-1' }
        ]
    },
    {
        title: 'Bài 62: Loại bỏ phần tử trùng lặp',
        description: 'Nhập mảng n phần tử đã sắp xếp. In ra mảng sau khi loại bỏ các phần tử trùng lặp (chỉ giữ lại 1 lần xuất hiện).',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['Duyệt mảng, chỉ in arr[i] nếu arr[i] != arr[i-1]'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    if (n > 0) printf("%d ", arr[0]);
    for (int i = 1; i < n; i++) {
        if (arr[i] != arr[i - 1]) {
            printf("%d ", arr[i]);
        }
    }
    return 0;
}`,
        testCases: [
            { stdin: '7\n1 1 2 2 3 4 4', expectedOutput: '1 2 3 4 ' },
            { stdin: '5\n5 5 5 5 5', expectedOutput: '5 ' }
        ]
    },
    {
        title: 'Bài 63: Ma trận chuyển vị',
        description: 'Nhập ma trận m x n. In ra ma trận chuyển vị (transpose) n x m.',
        difficulty: 'Medium',
        difficultyLevel: 4,
        hints: ['Hoán đổi hàng và cột', 'transpose[j][i] = matrix[i][j]'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int m, n;\n    scanf("%d %d", &m, &n);\n    int a[m][n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int a[m][n];
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &a[i][j]);
        }
    }
    // In ma trận chuyển vị
    for (int j = 0; j < n; j++) {
        for (int i = 0; i < m; i++) {
            printf("%d ", a[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`,
        testCases: [
            { stdin: '2 3\n1 2 3\n4 5 6', expectedOutput: '1 4 \n2 5 \n3 6 \n' },
            { stdin: '3 2\n1 2\n3 4\n5 6', expectedOutput: '1 3 5 \n2 4 6 \n' }
        ]
    },
    {
        title: 'Bài 64: Tổng đường chéo ma trận',
        description: 'Nhập ma trận vuông n x n. Tính tổng các phần tử trên đường chéo chính.',
        difficulty: 'Easy',
        difficultyLevel: 2,
        hints: ['Đường chéo chính: a[i][i] với i từ 0 đến n-1'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int a[n][n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int a[n][n];
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &a[i][j]);
        }
    }
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        sum += a[i][i];
    }
    printf("%lld", sum);
    return 0;
}`,
        testCases: [
            { stdin: '3\n1 2 3\n4 5 6\n7 8 9', expectedOutput: '15' },
            { stdin: '2\n10 20\n30 40', expectedOutput: '50' }
        ]
    },
    {
        title: 'Bài 65: Xoay mảng sang phải',
        description: 'Nhập mảng n phần tử và số k. Xoay mảng sang phải k vị trí. (Phần tử cuối chuyển lên đầu)',
        difficulty: 'Medium',
        difficultyLevel: 5,
        hints: ['k = k % n để tránh xoay thừa', 'Có thể đảo ngược 3 lần: toàn bộ, 0->k-1, k->n-1'],
        starterCode: '#include <stdio.h>\n\nint main() {\n    int n, k;\n    scanf("%d %d", &n, &k);\n    int arr[n];\n    // Code của bạn\n    return 0;\n}',
        solution: `#include <stdio.h>

void reverse(int arr[], int start, int end) {
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

int main() {
    int n, k;
    scanf("%d %d", &n, &k);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    k = k % n;
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,
        testCases: [
            { stdin: '5 2\n1 2 3 4 5', expectedOutput: '4 5 1 2 3 ' },
            { stdin: '4 1\n10 20 30 40', expectedOutput: '40 10 20 30 ' }
        ]
    }
]
