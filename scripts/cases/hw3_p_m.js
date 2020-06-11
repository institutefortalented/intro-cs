let hw3_p_m_cases = {
    1: [
        ['add(0, 0, 0)', 0],
        ['add(1, 2, 5)', 8],
        ['add(1, 2, -4)', -1]
    ],
    2: [
        ['multiply(0, 0, 0)', 0],
        ['multiply(1, 2, 5)', 10],
        ['multiply(1, 2, -4)', -8]
    ],
    3: [
        ['perimeter(0, 0)', 0],
        ['perimeter(3, 5)', 16]
    ],
    4: [
        ['area(0, 0)', 0],
        ['area(3, 5)', 15]
    ],
    5: [
        ['foo(0, 0)', 0],
        ['foo(2, 1)', 3],
        ['foo(3, 7)', -40]
    ],
    6: [
        ['bar(0, 1)', 0.0],
        ['bar(4, 2)', 10.0],
        ['bar(12, -4)', -51.0],
    ],
    7: [
        ['abab("Hi", "Bye")', "HiByeHiBye"],
        ['abab("Chris", "tina")', "ChristinaChristina"]
    ],
    8: [
        ['to_the_moon("Apollo")', "Apollo is going to the moon!"],
        ['to_the_moon("Artemis")', "Artemis is going to the moon!"]
    ],
    10: [
        ['makeHTML("li", "I can code!")', "<li>I can code!</li>"],
        ['makeHTML("div", "Passed this case")', "<div>Passed this case</div>"]
    ],
    11: [
        ['giveChange(9, 10)', 1],
        ['giveChange(4.5, 20)', 15.5]
    ]
};
