export function BuildModeListener(board) {

    const buildIcon = document.querySelector("#build-mode");

    buildIcon.addEventListener("click", () => {
        const knownTiles = [];
        const accessiblePositions = [];

        for (const tile in board) {
            if (board[tile].visibility === true) knownTiles.push(board[tile]);
        }

        knownTiles.forEach(tile => {
            tile.neighborTiles.forEach(neighbor => {
                if (!accessiblePositions.includes(neighbor.join(""))) {
                    accessiblePositions.push(neighbor);
                }
            })
        })


        // attempting to get all neighbor tiles of already discovered tiles, if the neighbor hasn't also already been discovered (or maybe we shoudn't worry about that yet because we can check for visibility; if visible, it's already known and so shouldn't have .diggable added to it)

    });

}