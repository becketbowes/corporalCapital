//for each person write a card
const generateCards = function (teamRoster)  {
    for (let i = 0; i < teamRoster.length; i++) {
        let teamMember = teamRoster[i];
        return `${customCard(teamMember)}`;
    };
    
};

//slightly differently depending on the third button content, which depends on the position, for each type of team member
const customCard = teamMember => { 
    if (teamMember.position === 'Manager') {
        return `
        <article>
            <div>
                <h2>${teamMember.person}</h2>
                <h3>${teamMember.position}</h3>
            </div>
            <div>
                <div>
                    <button>${teamMember.id}</button>
                    <button><a href="mailto:${teamMember.email}">${teamMember.email}</a></button>
                    <button>${teamMember.office}</button>
                </div>
            </div>
        </article>`
    } else if (teamMember.position === 'Engineer') {
        return `
        <article>
            <div>
                <h2>${teamMember.person}</h2>
                <h3>${teamMember.position}</h3>
            </div>
            <div>
                <div>
                    <button>${teamMember.id}</button>
                    <button><a href="mailto:${teamMember.email}">${teamMember.email}</a></button>
                    <button><a href="${teamMember.github}>${teamMember.github}</a></button>
                </div>
            </div>
        </article>`
    } else {
        return `
        <article>
            <div>
                <h2>${teamMember.person}</h2>
                <h3>${teamMember.position}</h3>
            </div>
            <div>
                <div>
                    <button>${teamMember.id}</button>
                    <button><a href="mailto:${teamMember.email}">${teamMember.email}</a></button>
                    <button><a href="${teamMember.github}>${teamMember.github}</a></button>
                </div>
            </div>
        </article>`
    }
};

//and add these cards to the page
const theHtml = (projectTitle, teamRoster) => {
    console.log(projectTitle, teamRoster);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/css/style.css">
        <title>${projectTitle}</title>
    </head>
    <body>
        <header>
            <h1>${projectTitle}</h1>
        </header>
        <section id='rolodex'>
        ${generateCards(teamRoster)}
        </section>
        <footer>©2022 corporalCapital, codeclast</footer>
    </body>
    </html>
    `;
  };

module.exports = theHtml