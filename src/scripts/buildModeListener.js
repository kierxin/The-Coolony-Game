import { Diggable } from "./diggable";

export function BuildModeListener(board) {

    const buildIcon = document.querySelector("#build-mode");

    buildIcon.addEventListener("click", () => {
        const knownTiles = [];
        const knownCoords = [];
        let accessiblePositions = [];

        // diggables should only include tiles that are direct neighbors of already visible tiles (excludes diagonals)
        for (const tile in board) {
            if (board[tile].visibility === true) {
                knownTiles.push([board[tile].coordinates, board[tile]]);
                knownCoords.push(JSON.stringify(board[tile].coordinates));
            }
        }

        // diggables shouldn't include already visiible tiles and shouldn't include duplicates
        knownTiles.forEach(tile => {
            tile[1].neighborTiles.forEach(neighbor => {
                if (!knownCoords.includes(JSON.stringify(neighbor))) {
                    if (!accessiblePositions.includes(JSON.stringify(neighbor))) {
                        accessiblePositions.push(JSON.stringify(neighbor));
                    }
                }
            });
        });

        // access the board array's key/value pairs that correspond with each diggable tile
        const diggables = [];
        for (const tile in board) {
            if (accessiblePositions.includes(JSON.stringify(board[tile].coordinates))) {
                diggables.push(tile);
            }
        }

        // toggle 'diggable' tileType
        for (const diggable in diggables) {
            for (const tile in board) {
                if (board[diggables[diggable]] === board[tile]) {

                    let tileType = board[tile].tileType;

                    if (tileType.includes("diggable")) {
                        if (tileType.includes("tunnel")) board[tile].tileType[0] === "-";
                        board[tile].tileType.split(",").pop();
                    } else {
                        if (tileType === "-") tileType = "tunnel";
                        board[tile].tileType = `${[tileType, "diggable"]}`;
                    }

                }
            }
        }


        // add class to corresponding grid-cells on the DOM
        const grid = document.querySelector(".grid");
        for (const tile in diggables) {

            let gridCellPosition = diggables[tile].slice(4);

            // remove zeros before 00, 01, 02, 03, etc.
            if (gridCellPosition[0] === "0") {
                gridCellPosition = gridCellPosition.slice(1);
            }

            // toggle diggable class, & toggle visiblily for diggable tiles
            if (grid.children[gridCellPosition].classList.contains("tile-type-diggable")) {

                grid.children[gridCellPosition].classList.remove("tile-type-diggable");

                grid.children[gridCellPosition].removeEventListener("click", Diggable)

                grid.children[gridCellPosition].classList.add("hidden-from-player");

            } else {
                if (!grid.children[gridCellPosition].classList.contains("never-again-diggable")) {
                    grid.children[gridCellPosition].classList.add("tile-type-diggable");

                    grid.children[gridCellPosition].addEventListener("click", Diggable.bind(grid.children[gridCellPosition], grid.children, this), { once: true });

                    grid.children[gridCellPosition].classList.remove("hidden-from-player");
                }
            }

        }
    });
}