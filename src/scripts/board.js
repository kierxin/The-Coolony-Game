const starterBoard = require("./starterBoard.js");
const restOfBoard = require("./restOfBoard.js");

export function Board() {

    this.starter = starterBoard();
    this.theRest = restOfBoard();
    this.wholeBoard = []

}