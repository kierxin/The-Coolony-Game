const { StarterBoard } = require("./starterBoard.js");
const { RestOfBoard } = require("./restOfBoard.js");

export function WholeBoardArr() {

    // consolidate board
    const starter = StarterBoard();
    const theRest = RestOfBoard();

    const board2DArr = starter.concat(theRest);


    // make 2D board into 1D array
    const board1DArr = [];

    board2DArr.forEach(row => {
        row.forEach(col => board1DArr.push(col));
    })


    // return the 1D array
    return board1DArr;
}