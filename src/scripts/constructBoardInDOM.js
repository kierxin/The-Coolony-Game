const { BoardAs1DArray } = require("./boardAs1DArray.js");


export function ConstructBoardInDOM() {
    const grid = document.querySelector(".grid");

    let boardArr = BoardAs1DArray();

    console.log(boardArr);

    for (let i = 0; i < boardArr.length; i++) {
        const gridCell = document.createElement("div");

        const tileType = boardArr[i][0];

        

        gridCell.classList.add("grid-cell");

        if (boardArr[i].includes("H")) {
            gridCell.classList.add("hidden-from-player");
        }

        if (tileType !== "-") {
            gridCell.classList.add("discovered");
        }



        if (tileType === "-") {
            gridCell.style.opacity = "0";
            
        } else if (tileType === "T") {
            gridCell.classList.add("tile-type-tunnel");

        } else {
            gridCell.innerText = `${tileType}`;

            if (tileType === "C") {
                gridCell.classList.add("tile-type-clay");
                gridCell.innerText = "";

            } else if (tileType === "O") {
                gridCell.classList.add("tile-type-ore");
                gridCell.innerText = "";

            } else if (tileType === "G") {
                gridCell.classList.add("tile-type-gold");

            } else if (tileType === "E") {
                gridCell.classList.add("tile-type-excavate");
                gridCell.innerText = "";

            } else if (tileType === "F") {
                gridCell.classList.add("tile-type-food");

            } else if (tileType === "N") {
                gridCell.classList.add("tile-type-nest");
            }

        }

        grid.appendChild(gridCell);
    }

    return "Rendered board's grid lines to HTML";
}
