let hw12_e_cases = {
    2: [
        [`near_ten(10)`, true],
        [`near_ten(29)`, true],
        [`near_ten(38)`, true],
        [`near_ten(41)`, true],
        [`near_ten(50)`, true],
        [`near_ten(62)`, true],
        [`near_ten(105)`, false],
        [`near_ten(97)`, false],
    ],
    3: [
        [`remainder(0, 3)`, 0],
        [`remainder(1, 1)`, 0],
        [`remainder(5, 1)`, 0],
        [`remainder(2, 7)`, 2],
        [`remainder(7, 2)`, 1],
        [`remainder(12, 3)`, 0],
        [`remainder(3, 12)`, 3],
        [`remainder(100, 100)`, 0]
    ],
    4: [
        [`middle([1, 2, 3, 4, 5])`, 3],
        [`middle(["billy", "bob", "joe"])`, "bob"],
        [`middle([0])`, 0],
        [`middle([[], [], [], [], [], [], []])`, []]
    ],
    5: [
        [true, `var = ["a", "s", "d", "f"]\r\ncopy([1, 2, 3, 4], var)`, [1, 2, 3, 4]],
        [true, `old = [1, 2, 3, 4]\r\nvar = ["a", "s", "d", "f"]\r\ncopy(old, var)\r\nold[0] = 42`, [1, 2, 3, 4]],
        [true, `var = [0, 1, 2, 3, 4]\r\ncopy([[], [], [], [], []], var)`, [[], [], [], [], []]],
        [true, `old = [[], [], [], [], []]\r\nvar = [0, 1, 2, 3, 4]\r\ncopy(old, var)\r\nold[0] = [42]`, [[], [], [], [], []]]
    ],
    6: [
        [`crash(0, -1)`, true],
        [`crash(-1, 0)`, true],
        [`crash(-2, -5)`, true],
        [`crash(3, 2)`, true],
        [`crash(2, 4)`, true],
        [`crash(10, 10)`, true],
        [`crash(2, 3)`, false],
        [`crash(0, 0)`, false]
    ]
};
