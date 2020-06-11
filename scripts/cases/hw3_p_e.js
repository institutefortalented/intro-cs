let hw3_p_e_points = {
    1: 3,
    2: 3,
    3: 3,
    4: 3,
    5: 1,
    6: 3,
    7: 2,
    8: 2,
};
let hw3_p_e_cases = {
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
        ['foo(0, 0)', 0],
        ['foo(2, 1)', 3],
        ['foo(3, 7)', -40]
    ],
    4: [
        ['bar(0, 1)', 0.0],
        ['bar(4, 2)', 10.0],
        ['bar(12, -4)', -51.0],
    ],
    5: [
        ['twenty_twenty()', 2020]
    ],
    6: [
        ['minutes_to_seconds(0)', 0],
        ['minutes_to_seconds(12)', 720],
        ['minutes_to_seconds(2)', 120]
    ],
    7: [
        ['abab("Hi", "Bye")', "HiByeHiBye"],
        ['abab("Chris", "tina")', "ChristinaChristina"]
    ],
    8: [
        ['to_the_moon("Apollo")', "Apollo is going to the moon!"],
        ['to_the_moon("Artemis")', "Artemis is going to the moon!"]
    ]
};
