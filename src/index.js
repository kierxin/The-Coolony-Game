const Board = require("./scripts/board.js");
const Draggable = require("./scripts/draggable.js");
const { RestOfBoard } = require("./scripts/restOfBoard.js");
const { StarterBoard } = require("./scripts/starterBoard.js");


document.addEventListener('DOMContentLoaded', () => {
    // console.log(Draggable);

    // const start = Board.starterBoard();
    // console.log(start);
    const board = constructBoard();
    
    console.log(board);
});


function constructBoard() {
    const b = Board;

    b.starter = StarterBoard();
    // b.theRest = RestOfBoard();

    return b;
}