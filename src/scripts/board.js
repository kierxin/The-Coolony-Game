const { StarterBoard } = require("./starterBoard.js");
const { RestOfBoard } = require("./restOfBoard.js");

export function Board() {

    const starter = StarterBoard();
    const theRest = RestOfBoard();
    const wholeBoard = starter.concat(theRest);

    // console.log("ih");
    console.log(wholeBoard);


    return wholeBoard;

}