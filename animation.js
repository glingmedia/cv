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