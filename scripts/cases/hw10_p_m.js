let r0 = parseInt(Math.random() * 12) + 1;
let r1 = Math.random() * 100;
let r2 = Math.random() * 100;
let r3 = Math.random() * 100;
let l0 = [];
for (let i = 0; i < Math.random() * 100 + 1; i++) {
    l0[i] = Math.random() * 100;
}
let l1 = [];
for (let i = 0; i < Math.random() * 100 + 1; i++) {
    l1[i] = parseInt(Math.random() * 50) + 25;
}
let l2 = [];
for (let i = 0; i < Math.random() * 100 + 1; i++) {
    l2[i] = parseInt(Math.random() * 100) + 100;
}
let hw10_m_cases = {
    1: [
        [`average([${r1}])`, r1],
        [`average([${r2}, ${r2}, ${r2}, ${r2}, ${r2}])`, r2],
        [`average([${l0}])`, l0.reduce((total, num) => total + num, 0)/l0.length],
        [`average([-1, 0, 1])`, 0],
        [`average([${r3}, ${r3*3}])`, r3*2]
    ],
    2: [
        [`life([42])`, 1],
        [`life([0, -42, 6, 7])`, 0],
        [`life([42, 42, 42, 69, 42])`, 4],
        [`life([${l1}])`, l1.reduce((total, num) => num == 42 ? total + 1 : total, 0)],
        [`life([${l2}])`, 0]
    ],
    3: [
        [`oddlye_ven([33, 1024, 228, 93])`, false],
        [`oddlye_ven([57])`, false],
        [`oddlye_ven([576])`, true],
        [`oddlye_ven([${l1}])`, l1.reduce((total, num) => { if (num % 2 == 0) { return total + 1; } else { return total - 1; } }, 0) > 0],
        [`oddlye_ven([${l2}])`, l2.reduce((total, num) => { if (num % 2 == 0) { return total + 1; } else { return total - 1; } }, 0) > 0]
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
