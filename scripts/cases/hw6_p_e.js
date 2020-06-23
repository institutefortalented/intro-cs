let hw6_p_e_r1 = Math.random() * 100;
let hw6_p_e_r2 = Math.random() * 100;
let hw6_p_e_r3 = Math.random() * 100;
let hw6_p_e_r4 = Math.random() * 10;
let hw6_p_e_cases = {
    1: [
        [`happy_ducks(23)`, false],
        [`happy_ducks(24)`, true],
        [`happy_ducks(1000)`, true],
        [`happy_ducks(1001)`, false]
    ],
    2: [
        [`smaller(${hw6_p_e_r1}, ${hw6_p_e_r1+10})`, hw6_p_e_r1],
        [`smaller(${hw6_p_e_r2+139}, ${hw6_p_e_r2})`, hw6_p_e_r2],
        [`smaller(${-hw6_p_e_r3}, ${hw6_p_e_r3})`, -hw6_p_e_r3]
    ],
    3: [
        [`multiplexer(${hw6_p_e_r1}, ${hw6_p_e_r2}, True)`, hw6_p_e_r1],
        [`multiplexer(${hw6_p_e_r3}, ${hw6_p_e_r2}, False)`, hw6_p_e_r2]
    ],
    4: [
        [`sum_or_diff(${hw6_p_e_r1}, ${hw6_p_e_r1+1})`, 2*hw6_p_e_r1+1],
        [`sum_or_diff(${hw6_p_e_r2}, ${hw6_p_e_r2})`, 0],
        [`sum_or_diff(${hw6_p_e_r3}, ${-hw6_p_e_r3})`, 0]
    ],
    5: [
        [`makes_42(42, ${hw6_p_e_r1})`, true],
        [`makes_42(${hw6_p_e_r2}, 42)`, true],
        [`makes_42(-25, 67)`, true],
        [`makes_42(42, 42)`, true],
        [`makes_42(${hw6_p_e_r4}, ${hw6_p_e_r4}+1)`, false]
    ],
    6: [
        [`this_is_easier_than_it_seems(${hw6_p_e_r1}, ${hw6_p_e_r2})`, false],
        [`this_is_easier_than_it_seems(${hw6_p_e_r3}, ${hw6_p_e_r3})`, false]
    ],
    7: [
        [`divisible_by_six(0)`, true],
        [`divisible_by_six(2)`, false],
        [`divisible_by_six(3)`, false],
        [`divisible_by_six(6)`, true],
        [`divisible_by_six(${parseInt(hw6_p_e_r2)*6})`, true],
        [`divisible_by_six(${parseInt(hw6_p_e_r1)*6+1})`, false]
    ]
};
