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
    let urlParser = new URLSearchParams(window.location.search);
    let course = urlParser.get('course');
    switch (course) {
        case 'java':
            $('#course').html('Intro to CS - Java');
            break;
        default:
            location.href = 'index.html';
            return;
    }
})();
