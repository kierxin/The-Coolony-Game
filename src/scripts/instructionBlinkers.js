export function InstructionBlinkers() {

    const assignTaskBlinker = document.getElementById("assign-task-prompt");
    const antsListIcon = document.getElementById("ants-list-icon");

    antsListIcon.addEventListener("click", () => {
        assignTaskBlinker.remove();
    });


    const chooseAntBlinker = document.getElementById("choose-ant-blinker");
    const antsList = document.getElementById("ants-list");

    antsList.addEventListener("click", () => {
        chooseAntBlinker.remove();
    });

}