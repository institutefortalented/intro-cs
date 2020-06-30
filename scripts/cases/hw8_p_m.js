let hw8_p_m_r1 = Math.random() * 10;
let hw8_p_m_r2 = Math.random() * 100;
let hw8_p_m_r3 = Math.random() * 100;
let hw8_p_m_cases = {
    2: [
        [`first([${hw8_p_m_r1}])`, hw8_p_m_r1],
        [`first([${hw8_p_m_r3}, ${hw8_p_m_r2}, ${hw8_p_m_r1}])`, hw8_p_m_r3],
        [`first(["asdfghjkl"])`, 'asdfghjkl'],
        [`first(["testing${hw8_p_m_r1}"])`, `testing${hw8_p_m_r1}`],
        [`first(["123${hw8_p_m_r2}", "test${hw8_p_m_r3}"])`, `123${hw8_p_m_r2}`]
    ],
    3: [
        [`total_length([], [], [])`, 0],
        [`total_length([${hw8_p_m_r3}], [], [])`, 1],
        [`total_length([], [${hw8_p_m_r2}], [])`, 1],
        [`total_length([], [], [${hw8_p_m_r1}])`, 1],
        [`total_length([${hw8_p_m_r2}], [${hw8_p_m_r3}], [${hw8_p_m_r1}])`, 3],
        [`total_length([], [${hw8_p_m_r2}, ${hw8_p_m_r1}], [${hw8_p_m_r3}])`, 3],
        [`total_length([${hw8_p_m_r1}, ${hw8_p_m_r1}], [${hw8_p_m_r1}, ${hw8_p_m_r1}, ${hw8_p_m_r1}, ${hw8_p_m_r1}], [${hw8_p_m_r1}])`, 7],
        [`total_length([${hw8_p_m_r3}, ${hw8_p_m_r3}, ${hw8_p_m_r3}, ${hw8_p_m_r3}], [], [${hw8_p_m_r3}])`, 5]
    ],
    4: [
        [true, `var = ["foo", "bar"]\r\nfoobar(var)`, ["foo", "bar"]],
        [true, `var = ["foo", "bar", ${hw8_p_m_r3}, ${hw8_p_m_r2}]\r\nfoobar(var)`, ["foo", "bar", hw8_p_m_r3, hw8_p_m_r2]],
        [true, `var = [${hw8_p_m_r3}, ${hw8_p_m_r1}]\r\nfoobar(var)`, ["foo", "bar"]],
        [true, `var = [${hw8_p_m_r3}, ${hw8_p_m_r1}, ${hw8_p_m_r3}]\r\nfoobar(var)`, ["foo", "bar", hw8_p_m_r3]],
        [true, `var = [${hw8_p_m_r3}, ${hw8_p_m_r1}, ${hw8_p_m_r3}, ${hw8_p_m_r1}, ${hw8_p_m_r2}]\r\nfoobar(var)`, ["foo", "bar", hw8_p_m_r3, hw8_p_m_r1, hw8_p_m_r2]]
    ],
    5: [
        [`same_start([${hw8_p_m_r1}], [${hw8_p_m_r1}])`, true],
        [`same_start([${hw8_p_m_r1}, ${hw8_p_m_r3}], [${hw8_p_m_r1}, ${hw8_p_m_r2}])`, true],
        [`same_start([${hw8_p_m_r1}, ${hw8_p_m_r3}], [${hw8_p_m_r1}, ${hw8_p_m_r2}, ${hw8_p_m_r3}])`, true],
        [`same_start([${hw8_p_m_r2}], [${hw8_p_m_r3}])`, false],
        [`same_start([${hw8_p_m_r2}, ${hw8_p_m_r1}], [${hw8_p_m_r3}, ${hw8_p_m_r1}])`, false]
    ]
};
