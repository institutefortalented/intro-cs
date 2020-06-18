let hw5_p_e_r1 = Math.random() * 100;
let hw5_p_e_r2 = Math.random() * 100;
let hw5_p_e_r3 = Math.random() * 100;
let hw5_p_e_cases = {
    2: [
        [`less(${hw5_p_e_r1}, ${hw5_p_e_r1+4})`, true],
        [`less(${hw5_p_e_r2+56}, ${hw5_p_e_r2})`, false]
    ],
    3: [
        [`less_or_equal(${hw5_p_e_r1}, ${hw5_p_e_r1})`, true],
        [`less_or_equal(${hw5_p_e_r2}, ${hw5_p_e_r2+349})`, true],
        [`less_or_equal(${hw5_p_e_r3+242}, ${hw5_p_e_r3})`, false]
    ],
    4: [
        ['eight_less(20, 12)', false],
        [`eight_less(${hw5_p_e_r2}, ${hw5_p_e_r2-2})`, false],
        [`eight_less(${hw5_p_e_r1}, ${hw5_p_e_r1+8})`, true]
    ],
    5: [
        [`all_same(${hw5_p_e_r1}, ${hw5_p_e_r1}, ${hw5_p_e_r1})`, true],
        [`all_same(${hw5_p_e_r1}, ${hw5_p_e_r2}, ${hw5_p_e_r1})`, false],
        [`all_same(${hw5_p_e_r2}, ${hw5_p_e_r1}, ${hw5_p_e_r3})`, false],
        [`all_same(${hw5_p_e_r1}, ${hw5_p_e_r1}, ${hw5_p_e_r3})`, false],
    ],
    6: [
        [`is_duck(True, True)`, true],
        [`is_duck(False, True)`, false],
        [`is_duck(True, False)`, false],
        [`is_duck(False, False)`, false]
    ]
};
