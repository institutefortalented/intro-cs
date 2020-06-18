let hw4_p_m_r1 = Math.random() * 100;
let hw4_p_m_r2 = Math.random() * 100;
let hw4_p_m_r3 = Math.random() * 100;
let hw4_p_m_cases = {
    2: [
        ['eight_less(20, 12)', false],
        [`eight_less(${hw4_p_m_r2}, ${hw4_p_m_r2-2})`, false],
        [`eight_less(${hw4_p_m_r1}, ${hw4_p_m_r1+8})`, true]
    ],
    3: [
        [`see_more(${hw4_p_m_r1}, ${hw4_p_m_r1+2}, 3)`, false],
        [`see_more(${hw4_p_m_r2}, ${hw4_p_m_r2+hw4_p_m_r3}, ${hw4_p_m_r3})`, false],
        [`see_more(${hw4_p_m_r2+hw4_p_m_r3}, ${hw4_p_m_r2}, ${hw4_p_m_r3})`, true]
    ],
    4: [
        [`mooove_over(${hw4_p_m_r3*4}, ${hw4_p_m_r3})`, false],
        [`mooove_over(${hw4_p_m_r3*2}, ${hw4_p_m_r3})`, false],
        [`mooove_over(${hw4_p_m_r3*1.99}, ${hw4_p_m_r3})`, true]
    ],
    5: [
        [`happy_ducks(23)`, false],
        [`happy_ducks(24)`, true],
        [`happy_ducks(1000)`, true],
        [`happy_ducks(1001)`, false]
    ],
    6: [
        [`right_triangle(1, 1, 2)`, false],
        [`right_triangle(${hw4_p_m_r1**2}, ${hw4_p_m_r2**2}, ${hw4_p_m_r1**2+hw4_p_m_r2**2-1})`, false],
        [`right_triangle(3, 4, 5)`, true],
        [`right_triangle(5, 12, 13)`, true]
    ],
    7: [
        [`this_is_easier_than_it_seems(${hw4_p_m_r1}, ${hw4_p_m_r1})`, false],
        [`this_is_easier_than_it_seems(${hw4_p_m_r1}, ${hw4_p_m_r2})`, false],
        [`this_is_easier_than_it_seems(${hw4_p_m_r2}, ${hw4_p_m_r3})`, false]
    ]
};
