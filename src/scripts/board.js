function board() {

    const starterBoard1 = [["", "T", "", "", "", "", "", "", "C", ""],
                          ["O", "T", "T", "T", "T", "T", "T", "T", "T", ""],
                          ["", "T", "", "", "", "O", "", "", "T", "C"],
                          ["", "T", "", "T", "", "", "N", "N", "T", ""],
                          ["", "F", "T", "T", "T", "T", "N", "N", "", ""],
                          ["", "F", "", "", "E", "", "", "", "", ""]];

    const starterBoard2 = [["", "", "", "", "O", "", "T", "", "", ""],
                          ["", "T", "T", "T", "T", "T", "T", "T", "", "C"],
                          ["", "", "N", "N", "T", "", "", "T", "", "O"],
                          ["", "T", "N", "N", "", "", "C", "T", "", ""],
                          ["", "T", "", "T", "", "", "", "T", "T", "T"],
                          ["F", "F", "", "", "", "", "", "", "", "E"]];

    const starterBoard3 = [["", "", "", "", "", "", "", "", "", "T"],
                          ["O", "T", "", "", "", "T", "C", "T", "T", "T"],
                          ["", "T", "T", "", "C", "", "T", "T", "T", ""],
                          ["", "T", "", "", "", "", "T", "", "F", "F"],
                          ["", "N", "N", "T", "T", "T", "T", "T", "", ""],
                          ["", "N", "N", "E", "", "", "", "O", "", ""]];

    const potentialStarterBoards = [starterBoard1, starterBoard2, starterBoard3]

    // const gameBoard = document.querySelector(".game-grid");

    gridRender(starterBoard1, starterBoard2, starterBoard3);

}

function gridRender(starterBoard1, starterBoard2, starterBoard3) {

}