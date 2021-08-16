const { BoardWithTilesProperties } = require("./boardFactory/boardWithTilesProperties.js");


export function ConstructBoardInDOM() {
    const grid = document.querySelector(".grid");

    const boardArr = BoardWithTilesProperties();

    console.log(boardArr);

    for (const key in boardArr) {
        const tile = boardArr[key];
        const type = tile.tileType;

        const gridCell = document.createElement("button");
        gridCell.innerText = `${type}`;
        gridCell.classList.add("grid-cell");
        
        if (tile.visibility === false) {
            gridCell.classList.add("hidden-from-player");
        }

        if (type !== "-") {
            gridCell.classList.add("discovered");
        }

        gridCell.innerText = `${type}`;
        gridCell.classList.add(`tile-type-${type}`);
        grid.appendChild(gridCell);

        // console.log(type);
        // console.log(gridCell.classList);
    }

    return "";
}