let pageTitle = "Elzero", pageDescription = 'Elzero Web School', pageDate='25/10';

let card = `
    <div class='card'>
    <h3>Hello ${pageTitle}</h3>
    <p>${pageDescription}</p>
    <span>${pageDate}</span>
    </div>
`.repeat(4)

document.write(card)