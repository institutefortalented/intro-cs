let hw16_m_cases = {
    2: [
        [`make_multiplier(4)(3)`, 12],
        [`make_multiplier(0)(100)`, 0],
        [`make_multiplier(${r1})(${r2})`, r1*r2],
        [true, `f = make_multiplier(3)\r\nvar = f(4)`, 12],
        [true, `f = make_multiplier(${r3})\r\nvar = f(${r2})`, r2*r3]
    ],
    3: [
        [`remove_last([1, 3, 2, 3, 4, 3, 5], 3)`, 3],
        [`remove_last([${r1}], ${r1})`, r1],
        [true, `var = [1, 3, 2, 3, 4, 3, 5]\r\nremove_last(var, 3)`, [1, 3, 2, 3, 4, 5]],
        [true, `var = [${r1}]\r\nremove_last(var, ${r1})`, []],
        [true, `var = []\r\nremove_last(var, 5)`, []]
    ],
    4: [
        [`count_x("")`, 0],
        [`count_x("x")`, 1],
        [`count_x("xyzzyx")`, 2],
        [true, `var = ["", "xxx", "abc", "xyz"]\r\nsort_x(var)`, ["", "abc", "xyz", "xxx"]],
        [true, `var = ["axbxcx", "", "x         ", "xoxo"]\r\nsort_x(var)`, ["", "x         ", "xoxo", "axbxcx"]]
    ],
    5: [
        [`merge([1, 3, 5], [2, 4, 6])`, [1, 2, 3, 4, 5, 6]],
        [`merge([5, 7], [2, 4, 6])`, [2, 4, 5, 6, 7]],
        [`merge([], [2, 4, 6])`, [2, 4, 6]],
        [`merge([1, 2, 3], [])`, [1, 2, 3]],
        [`merge([], [])`, []]
    ]
};
