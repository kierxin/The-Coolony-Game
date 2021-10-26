export function DisplayAntsOnBoard(board) {
    const grid = document.querySelector(".grid");
    const boardArr = board;

    let i = 0;
    for (const key in boardArr) {
        const tile = boardArr[key];
        // const type = tile.tileType;
        let gridCell;

        for (const cell of grid.children) {

            // ensure that cells that no longer contain an ant are cleared
            // if (cell.classList.contains("contains-ants")) {
            //     cell.classList.remove("contains-ants");
            // }

            if (tile.currentAnts[0] && (
                cell.classList.contains(`${tile.coordinates[0]}${tile.coordinates[1]}`)
                )) {
                gridCell = cell;
            }
        }
        
        if (gridCell) {
            console.log(tile.currentAnts);
            gridCell.classList.add("contains-ants");
            // TODO add event listener
            // console.log(gridCell);
        }
    }

    return;
}