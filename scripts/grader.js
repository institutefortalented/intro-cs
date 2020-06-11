const classErrMessage = 'There is no autograder for this class';
const hwErrMessage = 'There is no autograder for this homework';
const compilerErrMessage = 'Your code resulted in an error and could not be graded';
const hwButtonClass = 'mdl-button mdl-js-button mdl-button--primary';

(() => {
    var dialog = document.querySelector('dialog');
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
    $('#file-btn').hide();
    $('#file-btn-disabled').hide();
    $('#loading').hide();
    $('#score').hide();
    let urlParser = new URLSearchParams(window.location.search);
    let course = urlParser.get('course');
    switch (course) {
        case 'pythonE':
            $('#course').html('Intro to CS - Python (E)');
            $('#assignments').html(`
            `);
            break;
        case 'pythonM':
            $('#course').html('Intro to CS - Python (M)');
            $('#assignments').html(`
                <button onclick="grader('hw3')" class="${hwButtonClass}">Homework 3</button>
                <button onclick="grader('hw2')" class="${hwButtonClass}">Homework 2</button>
            `);
            break;
        case 'java':
            $('#course').html('Intro to CS - Java');
            $('#assignments').html(`
            `);
            break;
        default:
            location.href = 'index.html';
            return;
    }
})();

function grader(hw) {
    $('#assignments').hide();
    $('#file-btn').show();
    $('#assignment').html(`Homework ${hw.slice(2)}`);
    document.getElementById('inputfile')
    .addEventListener('change', function () {
        var fr = new FileReader();
        fr.onload = function () {
            $('#loading').show();
            if (unchanged(fr.result, hw) == 1) {
                $('#loading').hide();
                dialog("You have edited parts that should not have been changed");
            }
        }
        fr.readAsText(this.files[0]);
    });
}

function unchanged(code, hw) {
    let urlParser = new URLSearchParams(window.location.search);
    let course = urlParser.get('course');
    switch (course) {
        case 'pythonM':
            switch (hw) {
                case 'hw2':
                    if (code.indexOf('dear_diary = "Popscicles eaten today: "') == -1) return 1;
                    let popsicles = 0;
                    let nugs = 0;
                    let bank = 0;
                    code.split(/\s+/).forEach(item => {
                        popsicles += (item.indexOf('popsicles') != -1) ? 1 : 0;
                        nugs += (item.indexOf('chicken_nuggets') != -1) ? 1 : 0;
                        bank += (item.indexOf('bank_account') != -1) ? 1 : 0;
                    });
                    if (popsicles < 3 || nugs < 3 || bank < 3) return 1;
                    break;
                case 'hw3':
                    break;
                default:
                    dialog(hwErrMessage);
            }
            break;
        default:
            dialog(classErrMessage);
    }
    grade(code, hw);
}

function grade(code, hw) {
    let urlParser = new URLSearchParams(window.location.search);
    let course = urlParser.get('course');
    let fullPoints = {};
    let results = scores => {
        $('#file-btn').hide();
        $('#file-btn-disabled').show();
        $('#loading').hide();
        let display = ``;
        for (const num in scores) {
            display += `<div>Problem ${num}: ${scores[num]}/${fullPoints[num]} test case${fullPoints[num] == 1 ? '' : 's'}</div>`;
        }
        $('#score').html(display);
        $('#score').show();
    }
    switch (course) {
        case 'pythonM':
            switch (hw) {
                case 'hw2':
                    fullPoints = {
                        3: 1,
                        4: 2,
                        5: 2,
                        8: 1,
                        9: 2
                    };
                    let case1 = scores => run(code, 'minutes_to_seconds(0)', 0, scores, 9, results);
                    let case2 = scores => run(code, 'minutes_to_seconds(12)', 720, scores, 9, case1);
                    let case3 = scores => run(code, 'twenty_twenty()', 2020, scores, 8, case2);
                    let case4 = scores => variable(code, 'watch_tv', 308538.4213121, scores, 5, case3);
                    let case5 = scores => variable(code, 'work_hard', 1525862.8715121, scores, 5, case4);
                    let case6 = scores => variable(code, 'chicken_eaten', -10029587, scores, 4, case5);
                    let case7 = scores => variable(code, 'eat_more_chicken', 105964623, scores, 4, case6);
                    variable(code, 'dear_diary', 'Popscicles eaten today: 1250123590', {}, 3, case7);
                    break;
                case 'hw3':
                    fullPoints = {
                        1: 3,
                        2: 3,
                        3: 2,
                        4: 2,
                        5: 3,
                        6: 3,
                        7: 2,
                        8: 2,
                        10: 2,
                        11: 2
                    };
                    let cases = {
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
                    let callback = results;
                    for (const num in cases) {
                        for (const c of cases[num]) {
                            let prev = callback;
                            callback = scores => run(code, c[0], c[1], scores, num, prev);
                        }
                    }
                    callback({});
                    break;
                default:
                    dialog(hwErrMessage);
            }
            break;
        default:
            dialog(classErrMessage);
    }    
}

function run(code, call, expected, scores, num, callback) {
    pypyjs.exec(
        code + `result = ${call}`
    ).then(function () {
        return pypyjs.get('result');
    }).then(function (result) {
        if (scores[num]) {
            scores[num] += (result == expected ? 1 : 0);
        } else {
            scores[num] = (result == expected ? 1 : 0);
        }
        callback(scores);
    }).catch(err => {
        $('#loading').hide();
        console.log(err);
        dialog(compilerErrMessage);
    });
}

function variable(code, variable, expected, scores, num, callback) {
    pypyjs.exec(
        code
    ).then(function () {
        return pypyjs.get(variable);
    }).then(function (result) {
        if (scores[num]) {
            scores[num] += (result == expected ? 1 : 0);
        } else {
            scores[num] = (result == expected ? 1 : 0);
        }
        callback(scores);
    }).catch(err => {
        $('#loading').hide();
        console.log(err);
        dialog(compilerErrMessage);
    });
}

function check(form) {
    const user = form.user.value;
    const pass = form.pass.value;

    if (user == 'test' && pass == 'hi') {
        login(user, pass);
    }
}

function login(user, pass) {
    document.getElementById('login').style = 'visibility: hidden';
    document.getElementById('welcome').innerHTML = 'Welcome ' + user;
}

function dialog(message) {
    $('.mdl-dialog__title').html(message);
    var dialog = document.querySelector('dialog');
    dialog.showModal();
}

function done() {
    $('#file-btn').hide();
    $('#file-btn-disabled').show();
}
