window.addEventListener('load', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const portfolioButton = document.getElementById('portfolio');
    portfolioButton.onclick = printPortfolio;
}

function printPortfolio() {
    document.getElementById('portfolio').style.display='block';
}

/* window.addEventListener('load', main);


function main() {
    addEventListeners();
}

function addEventListeners() {
    document.getElementById('portfolio').addEventListener('click', portfolioButton);
}

function portfolioButton(event) {
    const button = event.target;
}

*/