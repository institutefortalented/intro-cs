let hw10_e_r1 = Math.random() * 100;
let hw10_e_r2 = Math.random() * 100;
let hw10_e_r3 = Math.random() * 100;
let hw10_e_cases = {
    2: [
        [`larger([${hw10_e_r1}, ${hw10_e_r2+100}])`, hw10_e_r2+100],
        [`larger([${hw10_e_r1+100}, ${hw10_e_r2}])`, hw10_e_r1+100],
        [`larger([${hw10_e_r2+1}, ${-hw10_e_r1-1}])`, hw10_e_r2+1],
        [`larger([0, ${hw10_e_r1+1}])`, hw10_e_r1+1],
        [`larger([${-hw10_e_r2-100}, ${-hw10_e_r1}])`, -hw10_e_r1]
    ],
    3: [
        [true, `var = [["foo", "bar"], ["bar"]]\r\nsafe_delete(var, ["foo", "bar"])`, [["bar"]]],
        [true, `var = [["foo", "bar"], ["bar"]]\r\nsafe_delete(var, ["doot"])`, [["foo", "bar"], ["bar"]]],
        [true, `var = [${hw10_e_r1}, ${hw10_e_r2}, ${hw10_e_r3}]\r\nsafe_delete(var, 101)`, [hw10_e_r1, hw10_e_r2, hw10_e_r3]],
        [true, `var = [${hw10_e_r1}, ${hw10_e_r2}, ${hw10_e_r3}]\r\nsafe_delete(var, ${hw10_e_r2})`, [hw10_e_r1, hw10_e_r3]],
        [true, `var = [[], [], [], []]\r\nsafe_delete(var, [])`, [[], [], []]]
    ],
    4: [
        [`largest([${-hw9_p_m_r1}])`, -hw9_p_m_r1],
        [`largest([${hw9_p_m_r1}, ${hw9_p_m_r2+100}])`, hw9_p_m_r2+100],
        [`largest([${-hw9_p_m_r3}, 0, 0, 0])`, 0],
        [`largest([${hw9_p_m_r1}, ${hw9_p_m_r2}, ${hw9_p_m_r3}, ${hw9_p_m_r1+100}, ${hw9_p_m_r2+100}, ${hw9_p_m_r3+200}])`, hw9_p_m_r3+200],
        [`largest([${-hw9_p_m_r1-100}, ${-hw9_p_m_r2-200}, ${-hw9_p_m_r3}])`, -hw9_p_m_r3]
    ],
    5: [
        [`total([0])`, 0],
        [`total([${hw9_p_m_r1}])`, hw9_p_m_r1],
        [`total([${-hw9_p_m_r2}, ${-hw9_p_m_r3}])`, -hw9_p_m_r2-hw9_p_m_r3],
        [`total([${-hw9_p_m_r2}, 0, 0, ${hw9_p_m_r2}])`, 0],
        [`total([${hw9_p_m_r1}, ${hw9_p_m_r2}, ${hw9_p_m_r3}, ${hw9_p_m_r3}, ${hw9_p_m_r2}, ${hw9_p_m_r1}])`, hw9_p_m_r1+hw9_p_m_r2+hw9_p_m_r3+hw9_p_m_r3+hw9_p_m_r2+hw9_p_m_r1]
    ]
};
