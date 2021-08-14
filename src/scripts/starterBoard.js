function StarterBoard() {

    this.starterBoard1 = [
        ["", "T", "", "", "", "", "", "", "C", ""],
        ["O", "T", "T", "T", "T", "T", "T", "T", "T", ""],
        ["", "T", "", "", "", "O", "", "", "T", "C"],
        ["", "T", "", "T", "", "", "N", "N", "T", ""],
        ["", "F", "T", "T", "T", "T", "N", "N", "", ""],
        ["", "F", "", "", "E", "", "", "", "", ""]
    ];

    this.starterBoard2 = [
        ["", "", "", "", "O", "", "T", "", "", ""],
        ["", "T", "T", "T", "T", "T", "T", "T", "", "C"],
        ["", "", "N", "N", "T", "", "", "T", "", "O"],
        ["", "T", "N", "N", "", "", "C", "T", "", ""],
        ["", "T", "", "T", "", "", "", "T", "T", "T"],
        ["F", "F", "", "", "", "", "", "", "", "E"]
    ];

    this.starterBoard3 = [
        ["", "", "", "", "", "", "", "", "", "T"],
        ["O", "T", "", "", "", "T", "C", "T", "T", "T"],
        ["", "T", "T", "", "C", "", "T", "T", "T", ""],
        ["", "T", "", "", "", "", "T", "", "F", "F"],
        ["", "N", "N", "T", "T", "T", "T", "T", "", ""],
        ["", "N", "N", "E", "", "", "", "O", "", ""]
    ];

    this.potentialStarterBoards = [this.starterBoard1, this.starterBoard2, this.starterBoard3];

    const randomized = () => {
        return Math.floor(Math.random(2.9));
    }

    const starterBoardResult = this.potentialStarterBoards[randomized()];
    return starterBoardResult;
}

module.exports = StarterBoard;
