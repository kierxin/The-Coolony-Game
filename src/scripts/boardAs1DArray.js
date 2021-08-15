const { StarterBoard } = require("./starterBoard.js");
const { RestOfBoard } = require("./restOfBoard.js");

export function BoardAs1DArray() {

    const starter = StarterBoard();
    const theRest = RestOfBoard();

    const board2DArr = starter.concat(theRest);

    const board1DArr = [];

    board2DArr.forEach(row => {
        row.forEach(col => board1DArr.push(col));
    })

    return board1DArr;
}