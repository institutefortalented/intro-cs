let hw17_e_cases = {
    2: [
        [`two_two([1, 2, 2])`, true],
        [`two_two([1, 2, 2, 2])`, true],
        [`two_two([1, 2, 1, 2])`, false],
        [`two_two([])`, false],
        [`two_two([2])`, false],
        [`two_two([0, 2, 2, 0, 0])`, true]
    ],
    3: [
        [`remove_last([1, 3, 2, 3, 4, 3, 5], 3)`, 3],
        [`remove_last([${r1}], ${r1})`, r1],
        [`remove_last([], 5)`, null],
        [true, `var = [1, 3, 2, 3, 4, 3, 5]\r\nremove_last(var, 3)`, [1, 3, 2, 3, 4, 5]],
        [true, `var = [${r1}]\r\nremove_last(var, ${r1})`, []],
        [true, `var = []\r\nremove_last(var, 5)`, []]
    ],
    4: [
        [true, `var = [1, 2, 3, 4, 5]\r\nrotate_right(var)`, [5, 1, 2, 3, 4]],
        [true, `var = []\r\nrotate_right(var)`, []],
        [true, `var = [0]\r\nrotate_right(var)`, [0]],
        [true, `var = [1, 2]\r\nrotate_right(var)`, [2, 1]],
        [true, `var = [8, 7, 6, 5, 4, 3, 2, 1]\r\nrotate_right(var)`, [1, 8, 7, 6, 5, 4, 3, 2]],
        [true, `var = [4, 6, 8]\r\nrotate_right(var)`, [8, 4, 6]]
    ],
    5: [
        [`fifteen(3)`, 0],
        [`fifteen(5)`, 3],
        [`fifteen(10)`, 23],
        [`fifteen(15)`, 45],
        [`fifteen(16)`, 60],
        [`fifteen(100)`, 2318]
    ]
};
