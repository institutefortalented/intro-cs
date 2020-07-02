let hw9_p_e_r1 = Math.random() * 10;
let hw9_p_e_r2 = Math.random() * 100;
let hw9_p_e_r3 = Math.random() * 100;
let hw9_p_e_cases = {
    2: [
        [`first([${hw9_p_e_r1}])`, hw9_p_e_r1],
        [`first([${hw9_p_e_r3}, ${hw9_p_e_r2}, ${hw9_p_e_r1}])`, hw9_p_e_r3],
        [`first(["asdfghjkl"])`, 'asdfghjkl'],
        [`first(["testing${hw9_p_e_r1}"])`, `testing${hw9_p_e_r1}`],
        [`first([["123${hw9_p_e_r2}", ${hw9_p_e_r2}], "test${hw9_p_e_r3}"])`, [`123${hw9_p_e_r2}`, hw9_p_e_r2]]
    ],
    3: [
        [`second([${hw9_p_e_r3}, ${hw9_p_e_r1}])`, hw9_p_e_r1],
        [`second([${hw9_p_e_r1}, ${hw9_p_e_r3}, ${hw9_p_e_r2}, ${hw9_p_e_r1}])`, hw9_p_e_r3],
        [`second(["qwertyuiop", "asdfghjkl"])`, 'asdfghjkl'],
        [`second([${hw9_p_e_r1}, "testing${hw9_p_e_r1}"])`, `testing${hw9_p_e_r1}`],
        [`second([[${hw9_p_e_r1}], ["123${hw9_p_e_r2}", ${hw9_p_e_r2}], "test${hw9_p_e_r3}"])`, [`123${hw9_p_e_r2}`, hw9_p_e_r2]]
    ],
    4: [
        [`sum_three([${hw9_p_e_r1}, ${hw9_p_e_r2}, ${hw9_p_e_r3}])`, hw9_p_e_r1+hw9_p_e_r2+hw9_p_e_r3],
        [`sum_three([0, 0, 0])`, 0],
        [`sum_three([0, 0, 0, ${hw9_p_e_r2}, ${hw9_p_e_r3}, ${hw9_p_e_r1}])`, 0],
        [`sum_three([0, ${hw9_p_e_r2}, 0, ${hw9_p_e_r1}, ${hw9_p_e_r3}])`, hw9_p_e_r2],
        [`sum_three([${hw9_p_e_r3}, ${-hw9_p_e_r2}, ${-hw9_p_e_r1}, ${hw9_p_e_r1}, ${hw9_p_e_r2}])`, hw9_p_e_r3-hw9_p_e_r2-hw9_p_e_r1]
    ],
    5: [
        [`total_length([], [], [])`, 0],
        [`total_length([], [0], [])`, 1],
        [`total_length([0], [0], [0])`, 3],
        [`total_length([0]*${parseInt(hw9_p_e_r1)}, [1]*${parseInt(hw9_p_e_r2)}, [2]*${parseInt(hw9_p_e_r3)})`, parseInt(hw9_p_e_r1)+parseInt(hw9_p_e_r2)+parseInt(hw9_p_e_r3)],
        [`total_length([0, 1]*${parseInt(hw9_p_e_r1)}, [1, 0, 1]*${parseInt(hw9_p_e_r2)}, [2]*${parseInt(hw9_p_e_r3)})`, 2*parseInt(hw9_p_e_r1)+3*parseInt(hw9_p_e_r2)+parseInt(hw9_p_e_r3)]
    ],
    6: [
        [true, `var = ["foo", "bar"]\r\nfoobar(var)`, ["foo", "bar"]],
        [true, `var = ["foo", "bar", ${hw9_p_e_r3}, ${hw9_p_e_r2}]\r\nfoobar(var)`, ["foo", "bar", hw9_p_e_r3, hw9_p_e_r2]],
        [true, `var = [${hw9_p_e_r3}, ${hw9_p_e_r1}]\r\nfoobar(var)`, ["foo", "bar"]],
        [true, `var = [${hw9_p_e_r3}, ${hw9_p_e_r1}, ${hw9_p_e_r3}]\r\nfoobar(var)`, ["foo", "bar", hw9_p_e_r3]],
        [true, `var = [${hw9_p_e_r3}, ${hw9_p_e_r1}, ${hw9_p_e_r3}, ${hw9_p_e_r1}, ${hw9_p_e_r2}]\r\nfoobar(var)`, ["foo", "bar", hw9_p_e_r3, hw9_p_e_r1, hw9_p_e_r2]]
    ],
    7: [
        [`same_start([${hw9_p_e_r1}], [${hw9_p_e_r1}])`, true],
        [`same_start([${hw9_p_e_r1}, ${hw9_p_e_r3}], [${hw9_p_e_r1}, ${hw9_p_e_r2}])`, true],
        [`same_start([${hw9_p_e_r1}, ${hw9_p_e_r3}], [${hw9_p_e_r1}, ${hw9_p_e_r2}, ${hw9_p_e_r3}])`, true],
        [`same_start([${hw9_p_e_r2}], [${hw9_p_e_r3}])`, false],
        [`same_start([${hw9_p_e_r2}, ${hw9_p_e_r1}], [${hw9_p_e_r3}, ${hw9_p_e_r1}])`, false]
    ]
};
