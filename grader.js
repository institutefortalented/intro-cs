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
                <button onclick="grader('hw2')" class="${hwButtonClass}">Homework 2</button>
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
    switch (course) {
        case 'pythonM':
            switch (hw) {
                case 'hw2':
                    let fullPoints = {
                        3: 1,
                        4: 2,
                        5: 2,
                        8: 1,
                        9: 2
                    }
                    let results = scores => {
                        $('#file-btn').hide();
                        $('#file-btn-disabled').show();
                        $('#loading').hide();
                        let display = ``;
                        for (const num in scores) {
                            display += `<div>Problem ${num}: ${scores[num]} out of ${fullPoints[num]} test case${fullPoints[num] == 1 ? '' : 's'}</div>`;
                        }
                        $('#score').html(display);
                        $('#score').show();
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
                    run(code, 'abab("foo", "bar")', "foobarfoobar", points, (points) =>
                    run(code, 'makeHTML("li", "I can code!")', "<li>I can code!</li>", points, (points) =>
                    run(code, 'circlePerimeter(10)', 62.83185307179586, points, (points) => {
                        $('#file-btn').hide();
                        $('#file-btn-disabled').show();
                        $('#loading').hide();
                        $('#score').html(`You passed ${points} out of 5 test cases`);
                        $('#score').show();
                    })));
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