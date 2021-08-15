const { BoardAsString } = require("./boardAsString.js");


export function ConstructBoardInDOM() {
    const grid = document.querySelector(".grid");

    let boardString = BoardAsString();

    for (let i = 0; i < boardString.length; i++) {
        const gridCell = document.createElement("div");

        gridCell.classList.add("grid-cell");

        if (boardString[i] === "-") {
            gridCell.style.opacity = "0";
        } else if (boardString[i] === "T") {
            gridCell.style.backgroundColor = `rgb(80, 55, 49)`;
            // gridCell.innerText = `${boardString[i]}`;
        } else {
            gridCell.style.backgroundColor = `rgb(105, 80, 66)`;
            gridCell.innerText = `${boardString[i]}`;

            if (boardString[i] === "C") {
                gridCell.style.textShadow = "1px 1px 0 #ffa51f";
            } else if (boardString[i] === "O") {
                gridCell.style.textShadow = "1px 1px 0 #a3978c";
            } else if (boardString[i] === "G") {
                gridCell.style.textShadow = "1px 1px 0 #ebbc13";
            } else if (boardString[i] === "E") {
                gridCell.style.textShadow = "none";
                gridCell.innerText = "E";
                gridCell.style.backgroundImage = "url('./src/images/excavate-icon.png')";
                gridCell.style.backgroundSize = `${gridCell.offsetWidth}px`;
            }
        }
    

        grid.appendChild(gridCell);
    }

    return "Rendered board's grid lines to HTML";
}
