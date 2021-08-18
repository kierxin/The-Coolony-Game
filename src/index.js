const { BoardWithTilesProperties } = require("./scripts/boardFactory/boardWithTilesProperties.js");
const { ActivateModals } = require("./scripts/activateModals.js");
const { ConstructBoardInDOM } = require("./scripts/constructBoardInDOM.js");
const { Player } = require("./scripts/player.js");
const { Ant } = require("./scripts/ant.js");
const { AntsListModal } = require("./scripts/modals/antsListModal/antsListModal.js");
const { ListClickEvents } = require("./scripts/modals/antsListModal/listClickEvents.js");
const { AntsListAssignTask } = require("./scripts/updateHelpers/antsListAssignTask.js");
const { HandleCompletedTasks } = require("./scripts/updateHelpers/handleCompletedTasks.js");

// const { Draggable } = require("./scripts/draggable.js");


document.addEventListener('DOMContentLoaded', () => {

    const board = BoardWithTilesProperties();

    ConstructBoardInDOM(board);
    ActivateModals();

    const player = new Player();
    const ant1 = new Ant(player);
    const ant2 = new Ant(player);
    const interval = 5000;

    AntsListModal(player, board);

    ListClickEvents();

    AntsListAssignTask(player, board);

    window.setInterval(update.bind(player, interval), interval);
    
});


function update(interval) {
    let completers = [];

    const decr = decrementAntDurations.bind(this, interval);
    // const check = checkForAntsNearCompletion.bind(this, interval);

    completers = decr();
    // nearlyDoneAnts = check();
    completers = HandleCompletedTasks(completers, this);
    console.log(`completers after handled: ${completers}`);
    this.updateResourceBar();
    // this.updateAntsList
}


function decrementAntDurations(interval) {
    const completers = [];

    this.ants.forEach(ant => {
        if (ant.duration > 0) {
            ant.duration -= interval;
        } else if (ant.status !== 'idle') {
            ant.status = 'idle';
            ant.duration = null;
            completers.push(ant);
        }
    })

    return completers;
}


// UPDATE FUNCTION (INTERVAL CALLBACK)

//      for each ant whose duration <= 0, call the completion function, passing in the corresponding task; for a resource task like clay, for example,  the completion function would add (Math.floor(Math.random*5)) clay to Player.clay
//      and set the ant's status back to idle