import { FinishExcavateTask } from "./finishExcavateTask";
import { updateBoardObject } from "./updateBoardObject";
import { Ant } from "../ant";

export function HandleCompletedTasks() {
    const board = this.board;

    // completers == ants whose task duration has reached 0; 
    //  ants that have completed their task
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

            const task = ant.status;

            if (task !== "idle") {
                updateBoardObject(board, ant);
            }
            
            if (task === "food") {
                foodAdder(this);
            } else if (task === "wood") {
                woodAdder(this);
            } else if (task === "clay") {
                clayAdder(this);
            } else if (task === "gold") {
                goldAdder(this);
            } else if (task === "sleep") {
                energyAdder(ant);
            } else if (task === "excavate") {
                const finishExcavation = FinishExcavateTask.bind(this, ant, board);
                finishExcavation();
            } else if (task === "eat") {
                foodSubtracter(this);
                appetiteSubtracter(ant);
            } else if (task === "nurse") {
                new Ant(this);
            }

            lootRoller(this);

            if (ant.energy > 0) {
                ant.energy -= Math.floor(Math.random() * 2);
            }
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
    player.loot += Math.round(Math.random() * 15);
}

function foodAdder(player) {
    player.food += 17 + Math.round(Math.random() * 3);
}

function foodSubtracter(player) {
    player.food -= 3 + Math.floor(Math.random() * 2);
}

function appetiteSubtracter(ant) {
    if (ant.appetite <= 40) {
        ant.appetite = 1 + Math.floor(Math.random() * 5);
    } else {
        ant.appetite -= 70 + Math.floor(Math.random() * 10);
    }
}

function woodAdder(player) {
    player.wood += 10 + Math.round(Math.random() * 5);
}

function clayAdder(player) {
    player.clay += 10 + Math.round(Math.random() * 5);
}

function goldAdder(player) {
    player.gold += 1 + Math.round(Math.random() * 3);
}

function energyAdder(ant) {
    if (ant.energy >= 40) {
        ant.energy = 99 - Math.floor(Math.random() * 5);
    } else {
        ant.energy += 70 + Math.floor(Math.random() * 10);
    }
}