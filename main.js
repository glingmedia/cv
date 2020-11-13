window.addEventListener('load', main);

function main() {
    houseAnimation();
}

function houseAnimation() {
    setInterval(houseRotation, 5)
}

function houseRotation() {
    const house = document.querySelector('home');