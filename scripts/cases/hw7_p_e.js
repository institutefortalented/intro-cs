let hw7_p_e_r1 = Math.random() * 10;
let hw7_p_e_r2 = Math.random() * 100;
let hw7_p_e_r3 = Math.random() * 100;
let hw7_p_e_cases = {
    1: [
        [`shipping_cost(${hw7_p_e_r1})`, 5],
        [`shipping_cost(10)`, 5],
        [`shipping_cost(${hw7_p_e_r1+11})`, (hw7_p_e_r1+11)/2]
    ],
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
        [`fizz_buzz(${Math.pow(2, parseInt(hw7_p_e_r1)+1)*3})`, 'Fizz'],
        [`fizz_buzz(${Math.pow(2, parseInt(hw7_p_e_r1)+1)*5})`, 'Buzz'],
        [`fizz_buzz(${Math.pow(2, parseInt(hw7_p_e_r1)+1)*15})`, 'FizzBuzz']
    ],
    4: [
        [`speeding(345)`, 0],
        [`speeding(346)`, 0],
        [`speeding(4241)`, 42],
        [`speeding(4242)`, -2342],
        [`speeding(4243)`, -2342]
    ],
    5: [
        [`pos_neg(${-hw7_p_e_r2-1}, ${-hw7_p_e_r3-1}, True)`, true],
        [`pos_neg(${-hw7_p_e_r3-1}, ${hw7_p_e_r2+1}, True)`, false],
        [`pos_neg(${hw7_p_e_r3+1}, ${-hw7_p_e_r2-1}, True)`, false],
        [`pos_neg(${-hw7_p_e_r2-1}, ${-hw7_p_e_r3-1}, False)`, false],
        [`pos_neg(${-hw7_p_e_r3-1}, ${hw7_p_e_r2+1}, False)`, true],
        [`pos_neg(${hw7_p_e_r3+1}, ${-hw7_p_e_r2-1}, False)`, true],
        [`pos_neg(${hw7_p_e_r3+1}, ${hw7_p_e_r2+1}, False)`, false]
    ],
    6: [
        [`nand(True, True)`, false],
        [`nand(True, False)`, true],
        [`nand(False, True)`, true],
        [`nand(False, False)`, true]
    ]
};
