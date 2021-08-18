export function HandleCompletedTasks(completers, board) {
    console.log(completers);
    // console.log(this);

    if (completers.length > 0) {

        for (const antIdx in completers) {
            const ant = this.ants[antIdx];
            const task = ant.status;

            console.log(ant);

            this[task] += 10;
            ant.status = "idle";

            // re-enable click event on the ants list modal for this ant:
            const overs = document.querySelectorAll(".over");
            overs[antIdx].style.pointerEvents = "auto";
            overs[antIdx].style.opacity = "1";
        }
    }

    return [];
}