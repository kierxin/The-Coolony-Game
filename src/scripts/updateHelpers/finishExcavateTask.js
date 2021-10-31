import { UpdateAntsListUnders } from "./updateAntsListUnders";

export function FinishExcavateTask(ant, board) {
    // in order to manipulate the DOM to remove the tile-type-excavate class from this tile, find the DOM element that corresponds to the board position of the tile...

    const tile = Object.keys(board).find(key => JSON.stringify(board[key].coordinates) == JSON.stringify(ant.position));

    // tile names and grid-cells' innerHTML are both based on 1D array index, as opposed to 2D coordinate format; here, I chop the alphabetic characters off the tile name, to isolate the 1D array position:
    const tileNum = tile.slice(4);

    const allExcavateTiles = document.querySelectorAll(".tile-type-excavate");

    for (let i = 0; i < allExcavateTiles.length; i++) {

        // in constructBoardInDOM.js, excavate tiles' innerHTML was set to be formatted as "excavate53" or whatever its 1D array position is; here, isolate the 1D array position:
        const excavNum = allExcavateTiles[i].innerHTML.slice(8);

        // find the DOM excavate tile whose 1D array position matches the JavaScript board tile; make it no longer be an excavate tile, so that its underlying styling & image are visible on the grid:
        if (excavNum === tileNum) {
            allExcavateTiles[i].classList.remove("tile-type-excavate");
        }
    }

    // also, update the select option in antsList to reflect that the tile is no longer under excavation and has now been revealed...   
    const updateAntsListUnders = UpdateAntsListUnders.bind(this, board[tile].coordinates, board[tile].tileType);
    updateAntsListUnders(board[tile].coordinates, board[tile].tileType);

    board[tile].excavate = false;
}