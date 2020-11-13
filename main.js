window.addEventListener('load', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const buttonAboutMe = document.getElementById('om');
    buttonAboutMe.onclick = printAboutMe;
}

function printAboutMe() {
    const om = document.getElementById('om');
}

/*
window.addEventListener('load', main);



function main() {
    houseAnimation();
}

function houseAnimation() {
    setInterval(houseFly, 8)
}

function houseFly() {
    let left = 0;
    const house = document.querySelector('home');
    left += 1;
    house.style.left = left + '%';
}    

*/