import { CompleteTask } from "./completeTask";


export function HandleCompletedTasks(completers, player) {

    if (completers.length > 0) {
        completers.forEach(ant => {
            CompleteTask(ant.status, player);
        })
    }

    return [];
}