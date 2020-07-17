hw13_m_cases = {
    2: [
        [`same_first([[1, 2], [4, 5]], [[1, 0]])`, true],
        [`same_first([[0]], [[0]])`, true],
        [`same_first([[0]], [[1]])`, false],
        [`same_first([["foo"], ["bar"]], [["bar", "foo"]])`, false]
    ],
    3: [
        [`crash(0, -1)`, true],
        [`crash(-1, 0)`, true],
        [`crash(-2, -5)`, true],
        [`crash(3, 2)`, true],
        [`crash(2, 4)`, true],
        [`crash(10, 10)`, true],
        [`crash(2, 3)`, false],
        [`crash(0, 0)`, false]
    ],
    4: [
        [`first_column([[1, 2], [3, 4], [5, 6]])`, [1, 3, 5]],
        [`first_column([[0]])`, [0]],
        [`first_column([["billy", "foo"], ["bob", "bar", "x"], ["joe"]])`, ["billy", "bob", "joe"]],
        [`first_column([[101], [102], [103], [104], [105]])`, [101, 102, 103, 104, 105]]
    ],
    5: [
        [`appears([[1, 2], [3, 4], [5, 6]], 0)`, false],
        [`appears([[1, 2], [3, 4], [5, 6]], 4)`, true],
        [`appears([], 0)`, false],
        [`appears([[], []], 0)`, false],
        [`appears([[1], [1], [1]], 1)`, true]
    ]
};
