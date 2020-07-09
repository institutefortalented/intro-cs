let hw11_e_cases = {
    1: [
        [`life([42])`, 1],
        [`life([0, -42, 6, 7])`, 0],
        [`life([42, 42, 42, 69, 42])`, 4],
        [`life([${l1}])`, l1.reduce((total, num) => num == 42 ? total + 1 : total, 0)],
        [`life([${l2}])`, 0]
    ],
    2: [
        [`average([${r1}])`, r1],
        [`average([${r2}, ${r2}, ${r2}, ${r2}, ${r2}])`, r2],
        [`average([${l0}])`, l0.reduce((total, num) => total + num, 0)/l0.length],
        [`average([-1, 0, 1])`, 0],
        [`average([${r3}, ${r3*3}])`, r3*2]
    ],
    3: [
        [`oddly_even([33, 1024, 228, 93])`, false],
        [`oddly_even([57])`, false],
        [`oddly_even([576])`, true],
        [`oddly_even([${l1}])`, l1.reduce((total, num) => { if (num % 2 == 0) { return total + 1; } else { return total - 1; } }, 0) > 0],
        [`oddly_even([${l2}])`, l2.reduce((total, num) => { if (num % 2 == 0) { return total + 1; } else { return total - 1; } }, 0) > 0]
    ],
    4: [
        [`factorial(1)`, 1],
        [`factorial(2)`, 2],
        [`factorial(6)`, 720],
        [`factorial(9)`, 362880],
        [`factorial(${r0})`, (() => { let result = 1; for (let i = 1; i <= r0; i++) { result *= i; } return result; })()]
    ],
    5: [
        [`sum_squares(1)`, 1],
        [`sum_squares(2)`, 5],
        [`sum_squares(6)`, 91],
        [`sum_squares(10)`, 385],
        [`sum_squares(${r0})`, (() => { let result = 0; for (let i = 1; i <= r0; i++) { result += i*i; } return result; })()]
    ]
};
