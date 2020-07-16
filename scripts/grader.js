const classErrMessage = 'There is no autograder for this class';
const hwErrMessage = 'There is no autograder for this homework';
const compilerErrMessage = 'Your code resulted in an error and could not be graded';
const timeErrMessage = 'Your code took too long to run. Please check for infinite loops';
const hwButtonClass = 'mdl-button mdl-js-button mdl-button--primary';
const glryButtonClass = 'mdl-button mdl-js-button mdl-button--accent';

(() => {
    console.log(`
Hello! Curious about how this website works?
I run a weekly Web Design Club for high schoolers -- if you're interested, let me know!
            __
        ___( o)>
        \\ <_. )
~~~~~~~~~\`---'~~~~~~~~~
    
~ Christina
        `);
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
                <button onclick="gallery('pythonE')" class="${glryButtonClass}">Art Gallery</button>
                <div style="height: 25px;"></div>
                <button onclick="grader('hw13')" class="${hwButtonClass}">Homework 13</button>
                <button onclick="grader('hw12')" class="${hwButtonClass}">Homework 12</button>
                <button onclick="grader('hw11')" class="${hwButtonClass}">Homework 11</button>
                <button onclick="grader('hw10')" class="${hwButtonClass}">Homework 10</button>
                <button onclick="grader('hw9')" class="${hwButtonClass}">Homework 9</button>
                <button onclick="grader('hw7')" class="${hwButtonClass}">Homework 7</button>
                <button onclick="grader('hw6')" class="${hwButtonClass}">Homework 6</button>
                <button onclick="grader('hw5')" class="${hwButtonClass}">Homework 5</button>
                <button onclick="grader('hw4')" class="${hwButtonClass}">Homework 4</button>
                <button onclick="grader('hw3')" class="${hwButtonClass}">Homework 3</button>
            `);
            break;
        case 'pythonM':
            $('#course').html('Intro to CS - Python (M)');
            $('#assignments').html(`
                <button onclick="grader('hw12')" class="${hwButtonClass}">Homework 12</button>
                <button onclick="grader('hw11')" class="${hwButtonClass}">Homework 11</button>
                <button onclick="grader('hw10')" class="${hwButtonClass}">Homework 10</button>
                <button onclick="grader('hw9')" class="${hwButtonClass}">Homework 9</button>
                <button onclick="grader('hw8')" class="${hwButtonClass}">Homework 8</button>
                <button onclick="grader('hw7')" class="${hwButtonClass}">Homework 7</button>
                <button onclick="grader('hw6')" class="${hwButtonClass}">Homework 6</button>
                <button onclick="grader('hw5')" class="${hwButtonClass}">Homework 5</button>
                <button onclick="grader('hw4')" class="${hwButtonClass}">Homework 4</button>
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

function gallery(course) {
    location.href = `gallery.html?course=${course}`;
}

function grader(hw) {
    $('#assignments').hide();
    $('#file-btn').show();
    if (new URLSearchParams(window.location.search).get('course') == 'pythonM' && hw == 'hw7') {
        $('#instructions').html(`Before uploading, make sure to double check that your code will not result in any infinite loops.
                                 If your code seems to be taking a long time to run, close this tab, fix your code, and submit again.`);
    }
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
                case 'hw4':
                case 'hw5':
                case 'hw6':
                case 'hw7':
                case 'hw8':
                case 'hw9':
                case 'hw10':
                case 'hw11':
                case 'hw12':
                    break;
                default:
                    dialog(hwErrMessage);
            }
            break;
        case 'pythonE':
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
    let cases = {};
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
                    fullPoints = hw2_p_m_points;
                    let case1 = scores => run(code, 'minutes_to_seconds(0)', 0, scores, 9, results);
                    let case2 = scores => run(code, 'minutes_to_seconds(12)', 720, scores, 9, case1);
                    let case3 = scores => run(code, 'twenty_twenty()', 2020, scores, 8, case2);
                    let case4 = scores => variable(code, 'watch_tv', '', 308538.4213121, scores, 5, case3);
                    let case5 = scores => variable(code, 'work_hard', '', 1525862.8715121, scores, 5, case4);
                    let case6 = scores => variable(code, 'chicken_eaten', '', -10029587, scores, 4, case5);
                    let case7 = scores => variable(code, 'eat_more_chicken', '', 105964623, scores, 4, case6);
                    variable(code, 'dear_diary', '', 'Popscicles eaten today: 1250123590', {}, 3, case7);
                    break;
                case 'hw3':
                case 'hw4':
                case 'hw5':
                case 'hw6':
                case 'hw7':
                case 'hw8':
                case 'hw9':
                case 'hw10':
                case 'hw11':
                case 'hw12':
                    fullPoints = {};
                    if (hw == 'hw3') cases = hw3_p_m_cases;
                    else if (hw == 'hw4') cases = hw4_p_m_cases;
                    else if (hw == 'hw5') cases = hw5_p_m_cases;
                    else if (hw == 'hw6') cases = hw6_p_m_cases;
                    else if (hw == 'hw7') cases = hw7_p_m_cases;
                    else if (hw == 'hw8') cases = hw8_p_m_cases;
                    else if (hw == 'hw9') cases = hw9_p_m_cases;
                    else if (hw == 'hw10') cases = hw10_m_cases;
                    else if (hw == 'hw11') cases = hw11_m_cases;
                    else if (hw == 'hw12') cases = hw12_m_cases;
                    else dialog(hwErrMessage);
                    let callback = results;
                    for (const num in cases) {
                        fullPoints[num] = 0;
                        for (const c of cases[num]) {
                            fullPoints[num]++;
                            let prev = callback;
                            callback = scores => {
                                if (c.length == 2) {
                                    run(code, c[0], c[1], scores, num, prev);
                                } else if (c.length == 3) {
                                    variable(code, 'var', c[1], c[2], scores, num, prev);
                                }                               
                            }
                        }
                    }
                    callback({});
                    break;
                default:
                    dialog(hwErrMessage);
            }
            break;
        case 'pythonE':
            fullPoints = {};
            if (hw == 'hw3') cases = hw3_p_e_cases;
            else if (hw == 'hw4') cases = hw4_p_e_cases;
            else if (hw == 'hw5') cases = hw5_p_e_cases;
            else if (hw == 'hw6') cases = hw6_p_e_cases;
            else if (hw == 'hw7') cases = hw7_p_e_cases;
            else if (hw == 'hw9') cases = hw9_p_e_cases;
            else if (hw == 'hw10') cases = hw10_e_cases;
            else if (hw == 'hw11') cases = hw11_e_cases;
            else if (hw == 'hw12') cases = hw12_e_cases;
            else if (hw == 'hw13') cases = hw13_e_cases;
            else dialog(hwErrMessage);
            let callback = results;
            for (const num in cases) {
                fullPoints[num] = 0;
                for (const c of cases[num]) {
                    fullPoints[num]++;
                    let prev = callback;
                    callback = scores => {
                        if (c.length == 2) {
                            run(code, c[0], c[1], scores, num, prev);
                        } else if (c.length == 3) {
                            variable(code, 'var', c[1], c[2], scores, num, prev);
                        }                               
                    }
                }
            }
            callback({});
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
        let correct = result == expected || floatEqual(result, expected);
        if (Array.isArray(expected) && Array.isArray(result)) {
            correct = arraysEqual(result, expected);
        }
        if (scores[num]) {
            scores[num] += (correct ? 1 : 0);
        } else {
            scores[num] = (correct ? 1 : 0);
        }
        callback(scores);
    }).catch(err => {
        $('#loading').hide();
        console.log(err);
        dialog(compilerErrMessage);
    });
}

function variable(code, variable, call, expected, scores, num, callback) {
    pypyjs.exec(
        code + call
    ).then(function () {
        return pypyjs.get(variable);
    }).then(function (result) {
        let correct = result == expected || floatEqual(result, expected);
        if (Array.isArray(expected) && Array.isArray(result)) {
            correct = arraysEqual(result, expected);
        }
        if (scores[num]) {
            scores[num] += (correct ? 1 : 0);
        } else {
            scores[num] = (correct ? 1 : 0);
        }
        callback(scores);
    }).catch(err => {
        $('#loading').hide();
        console.log(err);
        dialog(compilerErrMessage);
    });
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (floatEqual(a, b)) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (!arraysEqual(a[i], b[i])) return false;
    }
    return true;
}

function floatEqual(a, b) {
    if (typeof a == 'number' && typeof b == 'number') return Math.abs(a - b) <= 0.0001;
    return false;
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
