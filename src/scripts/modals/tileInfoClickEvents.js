export function TileInfoClickEvents () {
    const clayInfo = document.getElementById("clay-info");
    const woodInfo = document.getElementById("wood-info");
    const foodInfo = document.getElementById("food-info");
    const goldInfo = document.getElementById("gold-info");
    const eatInfo = document.getElementById("eat-info");
    const sleepInfo = document.getElementById("sleep-info");
    const nurseryInfo = document.getElementById("nursery-info");
    const battleInfo = document.getElementById("battle-info");

    const gridCells = document.getElementsByClassName("grid-cell");

    for (const tileIdx in gridCells) {
        const tile = gridCells[tileIdx];

        let type;

        if (tile.classList) {
            if (tile.classList.contains("tile-type-wood")) {
                type = "wood";
            }
            if (tile.classList.contains("tile-type-food")) {
                type = "food";
            }
            if (tile.classList.contains("tile-type-gold")) {
                type = "gold";
            }
            if (tile.classList.contains("tile-type-eat")) {
                type = "eat";
            }
            if (tile.classList.contains("tile-type-clay")) {
                type = "clay";
            }
            if (tile.classList.contains("tile-type-beetle")) {
                type = "battle";
            }
            if (tile.classList.contains("tile-type-sleep")) {
                type = "sleep";
            }
            if (tile.classList.contains("tile-type-nurse")) {
                type = "nursery";
            }
        }
        

        if (type) {
            tile.addEventListener('click', () => {
                clayInfo.classList.remove("tile-info");
                clayInfo.classList.add("tile-info-hidden");

                woodInfo.classList.remove("tile-info");
                woodInfo.classList.add("tile-info-hidden");
                
                foodInfo.classList.remove("tile-info");
                foodInfo.classList.add("tile-info-hidden");

                goldInfo.classList.remove("tile-info");
                goldInfo.classList.add("tile-info-hidden");
                
                eatInfo.classList.remove("tile-info");
                eatInfo.classList.add("tile-info-hidden");

                sleepInfo.classList.remove("tile-info");
                sleepInfo.classList.add("tile-info-hidden");

                nurseryInfo.classList.remove("tile-info");
                nurseryInfo.classList.add("tile-info-hidden");

                battleInfo.classList.remove("tile-info");
                battleInfo.classList.add("tile-info-hidden");

                if (type === "clay") {
                    if (clayInfo.classList.contains("tile-info-hidden")) {
                        clayInfo.classList.add("tile-info");
                        clayInfo.classList.remove("tile-info-hidden");
                    }
                } else if (type === "wood") {
                    if (woodInfo.classList.contains("tile-info-hidden")) {
                        woodInfo.classList.add("tile-info");
                        woodInfo.classList.remove("tile-info-hidden");
                    }
                } else if (type === "food") {
                    if (foodInfo.classList.contains("tile-info-hidden")) {
                        foodInfo.classList.add("tile-info");
                        foodInfo.classList.remove("tile-info-hidden");
                    }
                } else if (type === "gold") {
                    if (goldInfo.classList.contains("tile-info-hidden")) {
                        goldInfo.classList.add("tile-info");
                        goldInfo.classList.remove("tile-info-hidden");
                    }
                } else if (type === "sleep") {
                    if (sleepInfo.classList.contains("tile-info-hidden")) {
                        sleepInfo.classList.add("tile-info");
                        sleepInfo.classList.remove("tile-info-hidden");
                    }
                } else if (type === "eat") {
                    if (eatInfo.classList.contains("tile-info-hidden")) {
                        eatInfo.classList.add("tile-info");
                        eatInfo.classList.remove("tile-info-hidden");
                    }
                } else if (type === "nursery") {
                    if (nurseryInfo.classList.contains("tile-info-hidden")) {
                        nurseryInfo.classList.add("tile-info");
                        nurseryInfo.classList.remove("tile-info-hidden");
                    }
                } else if (type === "battle") {
                    if (battleInfo.classList.contains("tile-info-hidden")) {
                        battleInfo.classList.add("tile-info");
                        battleInfo.classList.remove("tile-info-hidden");
                    }
                }
            });
        }
    }


    const closeInfoBtns = document.getElementsByClassName("close-info");

    for (const xIdx in closeInfoBtns) {
        const x = closeInfoBtns[xIdx];

        if (x.classList) {
            x.addEventListener("click", () => {
                clayInfo.classList.remove("tile-info");
                clayInfo.classList.add("tile-info-hidden");

                woodInfo.classList.remove("tile-info");
                woodInfo.classList.add("tile-info-hidden");

                foodInfo.classList.remove("tile-info");
                foodInfo.classList.add("tile-info-hidden");

                goldInfo.classList.remove("tile-info");
                goldInfo.classList.add("tile-info-hidden");

                eatInfo.classList.remove("tile-info");
                eatInfo.classList.add("tile-info-hidden");

                sleepInfo.classList.remove("tile-info");
                sleepInfo.classList.add("tile-info-hidden");

                nurseryInfo.classList.remove("tile-info");
                nurseryInfo.classList.add("tile-info-hidden");

                battleInfo.classList.remove("tile-info");
                battleInfo.classList.add("tile-info-hidden");
            });
        }
    }

    return;
}