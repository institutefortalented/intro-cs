let hw5_p_m_r1 = Math.random() * 100;
let hw5_p_m_r2 = Math.random() * 100;
let hw5_p_m_r3 = Math.random() * 100;
let hw5_p_m_r4 = Math.random() * 10;
let hw5_p_m_cases = {
    1: [
        [`smaller(${hw5_p_m_r1}, ${hw5_p_m_r1+10})`, hw5_p_m_r1],
        [`smaller(${hw5_p_m_r2+139}, ${hw5_p_m_r2})`, hw5_p_m_r2],
        [`smaller(${-hw5_p_m_r3}, ${hw5_p_m_r3})`, -hw5_p_m_r3]
    ],
    2: [
        [`shipping_cost(${hw5_p_m_r4})`, 5],
        [`shipping_cost(10)`, 5],
        [`shipping_cost(${hw5_p_m_r4+10})`, hw5_p_m_r4/2+5]
    ],
    3: [
        [`divisible_by_six(0)`, true],
        [`divisible_by_six(2)`, false],
        [`divisible_by_six(3)`, false],
        [`divisible_by_six(6)`, true],
        [`divisible_by_six(${parseInt(hw5_p_m_r2)*6})`, true],
        [`divisible_by_six(${parseInt(hw5_p_m_r1)*6+1})`, false]
    ],
    4: [
        [`is_centipede(26)`, false],
        [`is_centipede(29)`, false],
        [`is_centipede(30)`, true],
        [`is_centipede(34)`, true],
        [`is_centipede(300)`, false],
        [`is_centipede(301)`, false],
        [`is_centipede(354)`, true],
        [`is_centipede(355)`, false],
        [`is_centipede(356)`, false]
    ],
    6: [
        [`be_rare_or_be_square(${hw5_p_m_r1}, ${hw5_p_m_r1+1})`, 2*hw5_p_m_r1+1],
        [`be_rare_or_be_square(${hw5_p_m_r2}, ${hw5_p_m_r2})`, 4*hw5_p_m_r2*hw5_p_m_r2],
        [`be_rare_or_be_square(${hw5_p_m_r3}, ${-hw5_p_m_r3})`, 0]
    ],
    7: [
        [`makes_42(42, ${hw5_p_m_r1})`, true],
        [`makes_42(${hw5_p_m_r2}, 42)`, true],
        [`makes_42(-25, 67)`, true],
        [`makes_42(42, 42)`, true],
        [`makes_42(${hw5_p_m_r4}, ${hw5_p_m_r4}+1)`, false]
    ]
};
