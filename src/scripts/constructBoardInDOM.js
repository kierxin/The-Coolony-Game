const { BoardAsString } = require("./boardAsString.js");


export function ConstructBoardInDOM() {
    const grid = document.querySelector(".grid");
    console.log(grid);

    let boardString = BoardAsString();

    for (let i = 0; i < boardString.length; i++) {
        grid.appendChild(document.createTextNode("hi"));
    }

    return "Rendered board's grid lines to HTML";
}
