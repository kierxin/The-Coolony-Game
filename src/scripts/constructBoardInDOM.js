export function ConstructBoardInDOM(player) {

    const grid = document.querySelector(".grid");
    const boardArr = player.board;

    let i = 0;
    for (const key in boardArr) {
        const tile = boardArr[key];
        const type = tile.tileType;

        const gridCell = document.createElement("button");
        gridCell.innerText = `${type}`;
        gridCell.classList.add("grid-cell");
        gridCell.classList.add(`${tile.coordinates[0]}${tile.coordinates[1]}`);
        
        if (tile.visibility === false) {
            gridCell.classList.add("hidden-from-player");
        }

        const tunnelColored = ["tunnel", "excavate", "above", "mica", "quartz"];

        if (!tunnelColored.includes(type)) {
            gridCell.classList.add("non-tunnel");
        }

        if (tile.interactive === true) {
            gridCell.classList.add("interactive");
        }

        gridCell.innerText = `${type}`;
        gridCell.classList.add(`tile-type-${type}`);

        if (tile.excavate === true) {
            gridCell.classList.add("tile-type-excavate");
            gridCell.innerHTML = `excavate${i}`
        }

        grid.appendChild(gridCell);
        i++;
    }

    return;
}