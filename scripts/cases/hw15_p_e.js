let hw15_e_cases = {
    1: [
        [`rect_peri(1, 1)`, 4],
        [`rect_peri(0.5, 2)`, 5],
        [`rect_peri(${r1}, ${r2})`, 2*r1+2*r2]
    ],
    2: [
        [`rect_area(1, 1)`, 1],
        [`rect_area(0.5, 2)`, 1],
        [`rect_area(${r1}, ${r2})`, r1*r2]
    ],
    3: [
        [`square_peri(1)`, 4],
        [`square_peri(0.25)`, 1],
        [`square_peri(${r1})`, 4*r1]
    ],
    4: [
        [`square_area(1)`, 1],
        [`square_area(0.5)`, 0.25],
        [`square_area(0${r2})`, r2*r2]
    ],
    5: [
        [`prism_vol(1, 1, 1)`, 1],
        [`prism_vol(0.25, 4, 9)`, 9],
        [`prism_vol(${r3}, ${r2}, ${r1})`, r1*r2*r3]
    ],
    6: [
        [`cube_vol(1)`, 1],
        [`cube_vol(0.5)`, 0.125],
        [`cube_vol(${r2})`, r2*r2*r2]
    ],
    7: [
        [`is_palindrome("racecar")`, true],
        [`is_palindrome("abccba")`, true],
        [`is_palindrome("xyz")`, false]
    ],
    8: [
        [`merge([1, 3, 5], [2, 4, 6])`, [1, 2, 3, 4, 5, 6]],
        [`merge([5, 7], [2, 4, 6])`, [2, 4, 5, 6, 7]],
        [`merge([], [2, 4, 6])`, [2, 4, 6]],
        [`merge([1, 2, 3], [])`, [1, 2, 3]]
    ]
};
