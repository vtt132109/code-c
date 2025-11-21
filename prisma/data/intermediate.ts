import { ProblemData } from '../seed-utils'

export const intermediateProblems: ProblemData[] = [
    {
        title: 'Bài 16: Fibonacci thứ n',
        description: 'In ra số Fibonacci thứ n.\n\nDãy Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, ...',
        difficulty: 'Medium',
        difficultyLevel: 5,
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    // Code của bạn\n    return 0;\n}`,
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
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
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
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
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
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Code của bạn\n    return 0;\n}`,
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
        starterCode: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    // Code của bạn\n    return 0;\n}`,
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
        starterCode: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int arr[n];\n    for(int i = 0; i < n; i++) {\n        scanf("%d", &arr[i]);\n    }\n    // Code của bạn\n    return 0;\n}`,
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
        starterCode: `#include <stdio.h>\n\nint main() {\n    int m, n;\n    scanf("%d %d", &m, &n);\n    int matrix[m][n];\n    for(int i = 0; i < m; i++) {\n        for(int j = 0; j < n; j++) {\n            scanf("%d", &matrix[i][j]);\n        }\n    }\n    // Code của bạn\n    return 0;\n}`,
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
