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
    
    let gallery = ``;
    for (let i = 0; i < games.length; i += 3) {
        gallery += `<tr>`;
        for (let j = 0; j < 3 && i + j < games.length; j++) {
            let entry = games[i + j];
            gallery += `<td class="entry">
                <div class="entry-title" onclick="playGame(${i+j})">${entry.game}</div>
                <div class="entry-name">by ${entry.name}</div>
                <div class="entry-caption">${entry.description}</div>
            </td>`;
        }
        gallery += `</tr>`;
    }
    $('#gallery').html(gallery);
})();

function playGame(i) {
    $('.title').hide();
    $('.subtitle').hide();
    $('#gallery').hide();
    let entry = games[i];
    $('#game').html(`
        <div class="back" onclick="location.href = 'games.html'">
            <button class="mdl-button mdl-js-button mdl-button--icon">
                <i class="material-icons">arrow_back</i>
            </button>
            Back
        </div>
        <div class="entry-title">${entry.game}</div>
        <div class="entry-name">by ${entry.name}</div>
        <div class="entry-caption">${entry.description}</div>
        <div class="entry-instructions">${entry.instructions}</div>
        <div class="entry-start">Press the play button to start</div>
        <div style="width: 75vw;">
            <iframe height="750px" width="100%" src="${entry.code}?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        </div>    
    `);
}
