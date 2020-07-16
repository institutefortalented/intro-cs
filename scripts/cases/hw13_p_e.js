hw13_e_cases = {
    2: [
        [`first_half("foobar")`, "foo"],
        [`first_half("hi")`, "h"],
        [`first_half("abcdefghijkl")`, "abcdef"]
    ],
    3: [
        [`surround("<-->", "use substring")`, "<-use substring->"],
        [`surround("####", "hashtag")`, "##hashtag##"],
        [`surround("-__-", "-__-")`, "-_-__-_-"]
    ],
    4: [
        [`cutoff("Hello!")`, "ello"],
        [`cutoff("abcdefg")`, "bcdef"],
        [`cutoff("  ")`, ""]
    ],
    5: [
        [`combo("Billy", "bobjoe")`, "BillybobjoeBilly"],
        [`combo("_qwerty_", "uiop")`, "uiop_qwerty_uiop"],
        [`combo("", "a")`, "a"],
        [`combo("c", "")`, "c"]
    ],
    6: [
        [`appears("lo", "Hello!")`, true],
        [`appears("hi there", "hi there")`, true],
        [`appears("billy bob joe", "bob")`, false],
        [`appears(" ", "hello world")`, true]
    ]
};
