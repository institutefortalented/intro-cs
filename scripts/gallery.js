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
        case 'pythonE':
            let data = [];
            if (course == 'java') data = javaGallery;
            else if (course == 'pythonE') data = pythonEGallery;
            $('#course').html('Intro to CS - Java');
            let gallery = ``;
            for (let i = 0; i < data.length; i+=3) {
                gallery += `<tr>`;
                for (let j = 0; j < 3 && i+j < data.length; j++) {
                    let entry = data[i+j];
                    gallery += `<td class="entry">
                        <img src="${entry.img}"/>
                        <div class="entry-title">${entry.title}</div>
                        <div class="entry-name">by ${entry.name ? entry.name : 'Anonymous'}</div>
                        <div class="entry-caption">${entry.caption}</div>
                    </td>`;
                }
                gallery += `</tr>`;
            }
            $('#gallery').html(gallery);
            break;
        default:
            location.href = 'index.html';
            return;
    }
})();
