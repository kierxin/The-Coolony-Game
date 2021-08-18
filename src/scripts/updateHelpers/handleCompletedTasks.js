export function HandleCompletedTasks() {

    const completers = this.completers;

    if (completers.length > 0) {

        for (const antIdx in completers) {

            const antId = completers[antIdx].id;
            let ant;

            for (let playerAnt in this.ants) {

                if (this.ants[playerAnt].id === antId) {
                    ant = this.ants[playerAnt];
                }
            }


            console.log(this);

            const task = ant.status;

            if (task === "food") {
                foodAdder(this);
            } else if (task === "eat") {
                foodSubtracter(this);
            } else if (task === "wood") {
                woodAdder(this);
            } else if (task === "clay") {
                clayAdder(this);
            } else if (task === "gold") {
                goldAdder(this);
            }

            lootRoller(this);

            ant.status = "idle";
            ant.duration = null;

            // re-enable click event on the ants list modal for this ant:
            const overs = document.querySelectorAll(".over");
            overs[ant.id - 1].style.pointerEvents = "auto";
            overs[ant.id - 1].style.opacity = "1";
        }
    }

    this.completers = [];
}



function lootRoller(player) {
    player.loot += Math.round(Math.random(15));
}
function foodAdder(player) {
    player.food += 17 + Math.round(Math.random(3));
}
function foodSubtracter(player) {
    player.food -= 3 + Math.floor(Math.random(2));
}
function woodAdder(player) {
    player.wood += 10 + Math.round(Math.random(5));
}
function clayAdder(player) {
    player.clay += 10 + Math.round(Math.random(5));
}
function goldAdder(player) {
    player.gold += 1 + Math.round(Math.random(3));
}