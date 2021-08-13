const gameGridContainer = document.querySelector(".game-grid-container");
const gameGrid = document.querySelector(".game-grid");

// gameGridContainer.addEventListener('mousedown', );

gameGrid.addEventListener('mousedown', myEvent.bind(gameGrid));



function myEvent(e) {
    startX = e.pageX;
    startY = e.pageY;
    console.log(this);
}


// function textToRed(e) {
//     return this.style.color="red";
// }

// function textToPurple(e) {
//     return this.style.color = "purple";
// }