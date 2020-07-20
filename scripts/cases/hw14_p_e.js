hw14_e_cases = {
    1: [
        [`happily("happily")`, true],
        [`happily("really")`, true],
        [`happily("ly")`, true],
        [`happily("very")`, false],
        [`happily("llyy")`, false],
        [`happily("y")`, false],
        [`happily("l")`, false],
        [`happily("")`, false]
    ],
    2: [
        [`safe_search("hello world", "hello")`, 0],
        [`safe_search("hello world", "hi")`, null],
        [`safe_search("hello", "l")`, 2],
        [`safe_search("hi pip", " ")`, 2]
    ],
    3: [
        [`contains_vowel("u")`, true],
        [`contains_vowel("aeiou")`, true],
        [`contains_vowel("xayz")`, true],
        [`contains_vowel("xyez")`, true],
        [`contains_vowel("xiyz")`, true],
        [`contains_vowel("wxoyz")`, true],
        [`contains_vowel("xyuz")`, true],
        [`contains_vowel("xyz")`, false]
    ],
    4: [
        [`space("")`, 0],
        [`space(" ")`, 1],
        [`space("a    z")`, 4],
        [`space("hello world")`, 1],
        [`space(" a b c ")`, 4]
    ],
    5: [
        [`slo_mo("slow motion")`, "ssllooww  mmoottiioonn"],
        [`slo_mo(" ")`, "  "],
        [`slo_mo("")`, ""],
        [`slo_mo("billy bob joe")`, "bbiillllyy  bboobb  jjooee"]
    ]
};
