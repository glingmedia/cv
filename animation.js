window.addEventListener('load', main);


function main() {
    addEventListeners();
}

function addEventListeners() {
    movingThing()
}

function movingThing() {
    let thing = document.getElementById("animation");   
    let pos = 0;
    let id = setInterval(frame, 3);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        thing.style.top = pos + "px"; 
        thing.style.left = pos + "px"; 
      }
    }
}

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
function houseAnimation();
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