let hw9_p_m_r1 = Math.random() * 100;
let hw9_p_m_r2 = Math.random() * 100;
let hw9_p_m_r3 = Math.random() * 100;
let hw9_p_m_cases = {
    2: [
        [`larger([${hw9_p_m_r1}, ${hw9_p_m_r2+100}])`, hw9_p_m_r2+100],
        [`larger([${hw9_p_m_r1+100}, ${hw9_p_m_r2}])`, hw9_p_m_r1+100],
        [`larger([${hw9_p_m_r2+1}, ${-hw9_p_m_r1-1}])`, hw9_p_m_r2+1],
        [`larger([0, ${hw9_p_m_r1+1}])`, hw9_p_m_r1+1],
        [`larger([${-hw9_p_m_r2-100}, ${-hw9_p_m_r1}])`, -hw9_p_m_r1]
    ],
    3: [
        [`rotate_right([${hw9_p_m_r1}, ${hw9_p_m_r2}, ${hw9_p_m_r3}])`, [hw9_p_m_r3, hw9_p_m_r1, hw9_p_m_r2]],
        [`rotate_right([0, 0, 0])`, [0, 0, 0]],
        [`rotate_right(["alice", "bob", "eve"])`, ['eve', 'alice', 'bob']],
        [`rotate_right([[], [], []])`, [[], [], []]],
        [`rotate_right([[${hw9_p_m_r1}], [${hw9_p_m_r2}, ${hw9_p_m_r1}], [${hw9_p_m_r3}, ${hw9_p_m_r2}, ${hw9_p_m_r1}]])`, [[hw9_p_m_r3, hw9_p_m_r2, hw9_p_m_r1], [hw9_p_m_r1], [hw9_p_m_r2, hw9_p_m_r1]]]
    ],
    4: [
        [true, `var = [["foo", "bar"], ["bar"]]\r\nsafe_delete(var, ["foo", "bar"])`, [["bar"]]],
        [true, `var = [["foo", "bar"], ["bar"]]\r\nsafe_delete(var, ["doot"])`, [["foo", "bar"], ["bar"]]],
        [true, `var = [${hw9_p_m_r1}, ${hw9_p_m_r2}, ${hw9_p_m_r3}]\r\nsafe_delete(var, 101)`, [hw9_p_m_r1, hw9_p_m_r2, hw9_p_m_r3]],
        [true, `var = [${hw9_p_m_r1}, ${hw9_p_m_r2}, ${hw9_p_m_r3}]\r\nsafe_delete(var, ${hw9_p_m_r2})`, [hw9_p_m_r1, hw9_p_m_r3]],
        [true, `var = [[], [], [], []]\r\nsafe_delete(var, [])`, [[], [], []]]
    ],
    5: [
        [`largest([${-hw9_p_m_r1}])`, -hw9_p_m_r1],
        [`largest([${hw9_p_m_r1}, ${hw9_p_m_r2+100}])`, hw9_p_m_r2+100],
        [`largest([${-hw9_p_m_r3}, 0, 0, 0])`, 0],
        [`largest([${hw9_p_m_r1}, ${hw9_p_m_r2}, ${hw9_p_m_r3}, ${hw9_p_m_r1+100}, ${hw9_p_m_r2+100}, ${hw9_p_m_r3+200}])`, hw9_p_m_r3+200],
        [`largest([${-hw9_p_m_r1-100}, ${-hw9_p_m_r2-200}, ${-hw9_p_m_r3}])`, -hw9_p_m_r3]
    ],
    6: [
        [`total([0])`, 0],
        [`total([${hw9_p_m_r1}])`, hw9_p_m_r1],
        [`total([${-hw9_p_m_r2}, ${-hw9_p_m_r3}])`, -hw9_p_m_r2-hw9_p_m_r3],
        [`total([${-hw9_p_m_r2}, 0, 0, ${hw9_p_m_r2}])`, 0],
        [`total([${hw9_p_m_r1}, ${hw9_p_m_r2}, ${hw9_p_m_r3}, ${hw9_p_m_r3}, ${hw9_p_m_r2}, ${hw9_p_m_r1}])`, hw9_p_m_r1+hw9_p_m_r2+hw9_p_m_r3+hw9_p_m_r3+hw9_p_m_r2+hw9_p_m_r1]
    ]
};
