let hw7_p_m_r1 = Math.random() * 10;
let hw7_p_m_r2 = Math.random() * 100;
let hw7_p_m_r3 = Math.random() * 100;
let hw7_p_m_cases = {
    1: [
        [`remainder(0, 3)`, 0],
        [`remainder(1, 1)`, 0],
        [`remainder(5, 1)`, 0],
        [`remainder(2, 7)`, 2],
        [`remainder(7, 2)`, 1],
        [`remainder(12, 3)`, 0],
        [`remainder(3, 12)`, 3],
        [`remainder(${parseInt(hw7_p_m_r2)}, ${parseInt(hw7_p_m_r1)+1})`, parseInt(hw7_p_m_r2)%(parseInt(hw7_p_m_r1)+1)]
    ],
    2: [
        [`factorial(1)`, 1],
        [`factorial(2)`, 2],
        [`factorial(3)`, 6],
        [`factorial(10)`, 3628800]
    ],
    3: [
        [`sum_squares(1)`, 1],
        [`sum_squares(2)`, 5],
        [`sum_squares(5)`, 55],
        [`sum_squares(100)`, 338350],
        [`sum_squares(124)`, 643250]
    ],
    4: [
        [`string_times("Quack", 4)`, "QuackQuackQuackQuack"],
        [`string_times("foobar", 0)`, ""],
        [`string_times("barfoo", 1)`, "barfoo"],
        [`string_times("alice", 10)`, "alicealicealicealicealicealicealicealicealicealice"]
    ],
    5: [
        [`hailstone(1)`, 1],
        [`hailstone(2)`, 2],
        [`hailstone(3)`, 8],
        [`hailstone(10)`, 7],
        [`hailstone(100)`, 26]
    ]
};
