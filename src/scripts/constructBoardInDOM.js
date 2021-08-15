const { BoardAs1DArray } = require("./boardAs1DArray.js");


export function ConstructBoardInDOM() {
    const grid = document.querySelector(".grid");

    let boardArr = BoardAs1DArray();

    console.log(boardArr);

    for (let i = 0; i < boardArr.length; i++) {
        const gridCell = document.createElement("div");

        gridCell.classList.add("grid-cell");

        const tileType = boardArr[i][0]

        if (tileType === "-") {
            gridCell.style.opacity = "0";
        } else if (tileType === "T") {
            gridCell.style.backgroundColor = `rgb(156, 119, 83)`;
            gridCell.style.boxShadow = "0 0 1px black inset";
        } else {
            gridCell.style.backgroundColor = `rgb(105, 80, 66)`;
            gridCell.innerText = `${tileType}`;

            if (tileType === "C") {
                gridCell.style.textShadow = "1px 1px 0 #ffa51f";
            } else if (tileType === "O") {
                gridCell.style.textShadow = "1px 1px 0 #a3978c";
            } else if (tileType === "G") {
                gridCell.style.textShadow = "1px 1px 0 #ebbc13";
            } else if (tileType === "E") {
                gridCell.style.backgroundColor = `rgb(156, 119, 83)`;
                gridCell.style.boxShadow = "0 0 1px black inset";
                gridCell.innerText = "";
                gridCell.style.backgroundSize = "100%";
                gridCell.style.backgroundImage = "url('./src/images/excavate-icon.png')";
            }

        }

        if (boardArr[i].includes("H")) {
            gridCell.classList.add("hidden-from-player");
        }

        grid.appendChild(gridCell);
    }

    return "Rendered board's grid lines to HTML";
}
