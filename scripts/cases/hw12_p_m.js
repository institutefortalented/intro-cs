let hw12_m_cases = {
    1: [
        [true, `var = ["a", "s", "d", "f"]\r\ncopy([1, 2, 3, 4], var)`, [1, 2, 3, 4]],
        [true, `old = [1, 2, 3, 4]\r\nvar = ["a", "s", "d", "f"]\r\ncopy(old, var)\r\nold[0] = 42`, [1, 2, 3, 4]],
        [true, `var = [0, 1, 2, 3, 4]\r\ncopy([[], [], [], [], []], var)`, [[], [], [], [], []]],
        [true, `old = [[], [], [], [], []]\r\nvar = [0, 1, 2, 3, 4]\r\ncopy(old, var)\r\nold[0] = [42]`, [[], [], [], [], []]]
    ],
    2: [
        [`space("")`, 0],
        [`space(" ")`, 1],
        [`space("Hello World! ")`, 2],
        [`space("a    z")`, 4]
    ],
    3: [
        [`slo_mo("slow motion")`, "ssllooww  mmoottiioonn"],
        [`slo_mo(" ")`, "  "],
        [`slo_mo("")`, ""],
        [`slo_mo("billy bob joe")`, "bbiillllyy  bboobb  jjooee"]
    ],
    5: [
        [`fact_sum(1)`, 1],
        [`fact_sum(2)`, 3],
        [`fact_sum(5)`, 153],
        [`fact_sum(9)`, 409113]
    ]
};
