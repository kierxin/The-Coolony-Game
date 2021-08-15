const { StarterBoard } = require("./starterBoard.js");
const { RestOfBoard } = require("./restOfBoard.js");

export function Board() {

    const starter = StarterBoard();
    const theRest = RestOfBoard();

    let wholeBoard;
    // setTimeout(() => {
        wholeBoard = starter.concat(theRest);
        // console.log(wholeBoard);
        return wholeBoard;
    // }, 5000);

}