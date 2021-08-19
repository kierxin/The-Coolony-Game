export function Diggable(diggables) {

    console.log("hi");


    const verifyExacavation = document.createElement("div");
    verifyExacavation.classList.add("verify-excavation");

    const displayCost = document.createElement("div");
    displayCost.classList.add("excavate-cost");
    displayCost.innerHTML = "loot: 50, wood: 100, clay: 150";
    verifyExacavation.appendChild(displayCost);

    const confirmButton = document.createElement("button");
    confirmButton.classList = "confirm-btn";
    confirmButton.innerHTML = "confirm new excavation";
    confirmButton.addEventListener("click", confirmHandler.bind(diggables), {once: true});


    this.appendChild(verifyExacavation);
    this.appendChild(confirmButton);

}



function confirmHandler(e) {
    e.currentTarget.parentNode.classList.remove("tile-type-diggable");
    e.currentTarget.parentNode.classList.add("never-again-diggable");

    e.currentTarget.parentNode.removeChild(e.currentTarget.parentNode.children[0]);
    e.currentTarget.parentNode.removeChild(e.currentTarget.parentNode.children[0]);
}