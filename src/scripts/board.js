const starterBoard = require("./starterBoard");


function Board() {
    this.starter = starterBoard();
    this.gridRender(this.starter);
}

Board.prototype.gridRender = function(starterBoard) {
    console.log(starterBoard);
}


module.exports = Board;