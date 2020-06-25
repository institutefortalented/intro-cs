let hw6_p_m_r1 = Math.random() * 10;
let hw6_p_m_r2 = Math.random() * 100;
let hw6_p_m_r3 = Math.random() * 100;
let hw6_p_m_cases = {
    2: [
        [`bananas(10)`, 'I have 10 bananas'],
        [`bananas(2)`, 'I have 2 bananas'],
        [`bananas(1)`, 'I have 1 banana'],
        [`bananas(0)`, 'I have no bananas'],
        [`bananas(-1)`, 'My disappointment is immeasurable and my day is ruined']
    ],
    3: [
        [`fizz_buzz(0)`, 'FizzBuzz'],
        [`fizz_buzz(1)`, ''],
        [`fizz_buzz(3)`, 'Fizz'],
        [`fizz_buzz(5)`, 'Buzz'],
        [`fizz_buzz(15)`, 'FizzBuzz'],
        [`fizz_buzz(${Math.pow(2, parseInt(hw6_p_m_r1)+1)*3})`, 'Fizz'],
        [`fizz_buzz(${Math.pow(2, parseInt(hw6_p_m_r1)+1)*5})`, 'Buzz'],
        [`fizz_buzz(${Math.pow(2, parseInt(hw6_p_m_r1)+1)*15})`, 'FizzBuzz']
    ],
    4: [
        [`round_up(${parseInt(hw6_p_m_r2)+0.1})`, parseInt(hw6_p_m_r2)+1],
        [`round_up(${parseInt(hw6_p_m_r3)})`, parseInt(hw6_p_m_r3)],
        [`round_up(${parseInt(hw6_p_m_r2)+0.9})`, parseInt(hw6_p_m_r2)+1]
    ],
    5: [
        [`nand(True, True)`, false],
        [`nand(True, False)`, true],
        [`nand(False, True)`, true],
        [`nand(False, False)`, true]
    ],
    6: [
        [`speeding(345, False)`, 0],
        [`speeding(346, False)`, 0],
        [`speeding(4241, False)`, 42],
        [`speeding(4242, False)`, -2342],
        [`speeding(4243, False)`, -2342],
        [`speeding(350, True)`, 0],
        [`speeding(351, True)`, 0],
        [`speeding(4246, True)`, 42],
        [`speeding(4247, True)`, -2342],
        [`speeding(4248, True)`, -2342]
    ]
};
