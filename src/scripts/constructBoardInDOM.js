const { BoardWithTilesProperties } = require("./boardFactory/boardWithTilesProperties.js");


export function ConstructBoardInDOM() {
    const grid = document.querySelector(".grid");

    const boardArr = BoardWithTilesProperties();

    console.log(`console.log is in constructBoardInDOM`);
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

        if (!type.includes("tunnel") && !type.includes("excavate") && !type.includes("above")) {
            gridCell.classList.add("non-tunnel");
        }

        if (tile.interactive === true) {
            gridCell.classList.add("interactive");
        }

        gridCell.innerText = `${type}`;
        gridCell.classList.add(`tile-type-${type}`);
        grid.appendChild(gridCell);
    }

    return "";
}