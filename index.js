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
})();

function goToCourse(course) {
    switch (course) {
        case 'pythonE':
        case 'pythonM':
            location.href = `grader.html?course=${course}`;
            break;
        case 'java':
            location.href = `gallery.html?course=${course}`;
            break;
        default:
            location.href = 'index.html';
            return;
    }
}
