export function Diggable(player, board) {

    const verifyExacavation = document.createElement("div");
    verifyExacavation.classList.add("verify-excavation");

    const displayCost = document.createElement("div");
    displayCost.classList.add("excavate-cost");
        // if changing this, also change confirmHandler:
    displayCost.innerHTML = "loot: 50, wood: 150, clay: 150"; 
    verifyExacavation.appendChild(displayCost);

    const confirmButton = document.createElement("button");
    confirmButton.classList = "confirm-btn";
    confirmButton.innerHTML = "confirm new excavation";
    confirmButton.addEventListener("click", confirmHandler.bind(player, board));

    const cancelButton = document.createElement("button");
    cancelButton.classList = "cancel-btn";
    cancelButton.innerHTML = "cancel";
    cancelButton.addEventListener("click", cancelHandler.bind(player));
    
    if (this.children.length === 0){
        this.appendChild(verifyExacavation);
        this.appendChild(confirmButton);
        this.appendChild(cancelButton);
    }

}



function confirmHandler(board, e) {
    const tile = e.currentTarget.parentNode;

    // tile.classList[1] is a 2 digit number representing the tile's coordinates
            // actually, a 2-3 digit number; when we get into 3-digits this will be a problem:
    const boardTile = board[`tile${tile.classList[1][1]}${tile.classList[1][0]}`];
    boardTile.excavate = true;
    boardTile.visibility = true;
    boardTile.tileType = boardTile.tileType.slice(0,6);
    boardTile.tileType = `excavate,${boardTile.tileType}`;

    if (this.loot >= 50 && this.wood >= 150 && this.clay >= 150) {

        this.loot -= 50;
        this.wood -= 150;
        this.clay -= 150;

        e.currentTarget.parentNode.classList.add("tile-type-excavate");
        e.currentTarget.parentNode.classList.remove("tile-type-diggable");
        e.currentTarget.parentNode.classList.add("never-again-diggable");

    } else {
        window.confirm("You can't afford this expansion yet.");
    }

    e.currentTarget.parentNode.children[2].remove();
    e.currentTarget.parentNode.children[0].remove();
    e.currentTarget.parentNode.children[0].remove();
}


function cancelHandler(e) {
    e.currentTarget.parentNode.children[0].remove();
    e.currentTarget.parentNode.children[0].remove();
    e.currentTarget.parentNode.children[0].remove();
}