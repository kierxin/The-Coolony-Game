function Board(strToPrintAsTest) {

    this.starterBoard1 = [["", "T", "", "", "", "", "", "", "C", ""],
                          ["O", "T", "T", "T", "T", "T", "T", "T", "T", ""],
                          ["", "T", "", "", "", "O", "", "", "T", "C"],
                          ["", "T", "", "T", "", "", "N", "N", "T", ""],
                          ["", "F", "T", "T", "T", "T", "N", "N", "", ""],
                          ["", "F", "", "", "E", "", "", "", "", ""]];

    this.starterBoard2 = [["", "", "", "", "O", "", "T", "", "", ""],
                          ["", "T", "T", "T", "T", "T", "T", "T", "", "C"],
                          ["", "", "N", "N", "T", "", "", "T", "", "O"],
                          ["", "T", "N", "N", "", "", "C", "T", "", ""],
                          ["", "T", "", "T", "", "", "", "T", "T", "T"],
                          ["F", "F", "", "", "", "", "", "", "", "E"]];

    this.starterBoard3 = [["", "", "", "", "", "", "", "", "", "T"],
                          ["O", "T", "", "", "", "T", "C", "T", "T", "T"],
                          ["", "T", "T", "", "C", "", "T", "T", "T", ""],
                          ["", "T", "", "", "", "", "T", "", "F", "F"],
                          ["", "N", "N", "T", "T", "T", "T", "T", "", ""],
                          ["", "N", "N", "E", "", "", "", "O", "", ""]];

    this.potentialStarterBoards = [starterBoard1, starterBoard2, starterBoard3]

    // const gameBoard = document.querySelector(".game-grid");

    this.gridRender(potentialStarterBoards, strToPrintAsTest);

    this.testinggg();
}

Board.prototype.gridRender = function(potentialStarterBoards, strToPrintAsTest) {
    console.log(strToPrintAsTest);
    console.log(potentialStarterBoards[1]);
}

Board.prototype.testinggg = function() {
    return "yay";
}

module.exports = Board;
