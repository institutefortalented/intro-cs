let r1 = Math.random() * 100;
let r2 = Math.random() * 100;
let r3 = Math.random() * 100;
let hw4_p_m_cases = {
    2: [
        ['eight_less(20, 12)', false],
        [`eight_less(${r2}, ${r2-2})`, false],
        [`eight_less(${r1}, ${r1+8})`, true]
    ],
    3: [
        [`see_more(${r1}, ${r1+2}, 3)`, false],
        [`see_more(${r2}, ${r2+r3}, ${r3})`, false],
        [`see_more(${r2+r3}, ${r2}, ${r3})`, true]
    ],
    4: [
        [`mooove_over(${r3*4}, ${r3})`, false],
        [`mooove_over(${r3*2}, ${r3})`, false],
        [`mooove_over(${r3*1.99}, ${r3})`, true]
    ],
    5: [
        [`happy_ducks(23)`, false],
        [`happy_ducks(24)`, true],
        [`happy_ducks(1000)`, true],
        [`happy_ducks(1001)`, false]
    ],
    6: [
        [`right_triangle(1, 1, 2)`, false],
        [`right_triangle(${r1**2}, ${r2**2}, ${r1**2+r2**2-1})`, false],
        [`right_triangle(3, 4, 5)`, true],
        [`right_triangle(5, 12, 13)`, true]
    ],
    7: [
        [`this_is_easier_than_it_seems(${r1}, ${r1})`, false],
        [`this_is_easier_than_it_seems(${r1}, ${r2})`, false],
        [`this_is_easier_than_it_seems(${r2}, ${r3})`, false]
    ]
};
