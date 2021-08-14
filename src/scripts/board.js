const starterBoard = require("./starterBoard");
const restOfBoard = require("./restOfBoard");

function Board() {

    this.starter = starterBoard();
    this.theRest = restOfBoard();
    this.wholeBoard = []

}


module.exports = Board;