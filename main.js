window.onload = start;

let left = 0;

function start() {
    vroom();
}

function vroom() {
    setInterval(startCar, 10)
}

function startCar() {
    const car = document.querySelector('img');
    left += 0.2;
    car.style.left = left + '%';
}