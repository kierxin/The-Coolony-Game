const { ConstructBoardInDOM } = require("./scripts/constructBoardInDOM.js");
const { Draggable } = require("./scripts/draggable.js");


document.addEventListener('DOMContentLoaded', () => {
    Draggable();

    console.log(ConstructBoardInDOM());
});


// function constructBoard() {
//     const b = Board;

//     b.starter = StarterBoard();
//     b.theRest = RestOfBoard();

//     return b;
// }