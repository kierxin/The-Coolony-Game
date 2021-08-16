const { StarterBoard } = require("./starterBoard.js");
const { RestOfBoard } = require("./restOfBoard.js");

export function WholeBoardArr() {

    // consolidate board
    const starter = StarterBoard();
    const theRest = RestOfBoard();

    const board2DArr = starter.concat(theRest);


    // attach the position to each element's value
    const boardWithPositionAndValue = [];

    board2DArr.forEach((row, i) => {
        row.forEach((col, j) => boardWithPositionAndValue.push([[i, j], col]));
    })


    // // return the 1D array
    return boardWithPositionAndValue;
}