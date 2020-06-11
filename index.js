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
    location.href = `grader.html?course=${course}`;
}
