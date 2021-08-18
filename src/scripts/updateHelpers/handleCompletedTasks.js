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

            const task = ant.status;

            this[task] += 10;
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