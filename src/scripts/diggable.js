export function Diggable(diggables, player) {

    console.log("hi");

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
    confirmButton.addEventListener("click", confirmHandler.bind(player));

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



function confirmHandler(e) {


    console.log("HI");

    if (this.loot >= 5 && this.wood >= 5 && this.clay >= 5) {

        this.loot -= 5;
        this.wood -= 5;
        this.clay -= 5;

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
    console.log("BYE");
    e.currentTarget.parentNode.children[0].remove();
    e.currentTarget.parentNode.children[0].remove();
    e.currentTarget.parentNode.children[0].remove();
}