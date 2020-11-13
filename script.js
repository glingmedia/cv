window.addEventListener('load', main);


function main() {
    addEventListeners();
}

function addEventListeners() {
    document.getElementById('portfolio').addEventListener('click', portfolioButton);
}

function portfolioButton(event) {
    const button = event.target;
}