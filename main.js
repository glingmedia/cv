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