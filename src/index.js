const { BoardWithTilesProperties } = require("./scripts/boardFactory/boardWithTilesProperties.js");
const { ActivateModals } = require("./scripts/activateModals.js");
const { ConstructBoardInDOM } = require("./scripts/constructBoardInDOM.js");
const { Player } = require("./scripts/player.js");
const { Ant } = require("./scripts/ant.js");
const { AntsListModal } = require("./scripts/modals/antsListModal/antsListModal.js");
const { ListClickEvents } = require("./scripts/modals/antsListModal/listClickEvents.js");
const { AntsListSubmitListener } = require("./scripts/updateHelpers/antsListSubmitListener.js");
const { HandleCompletedTasks } = require("./scripts/updateHelpers/handleCompletedTasks.js");

// const { Draggable } = require("./scripts/draggable.js");


document.addEventListener('DOMContentLoaded', () => {

    const board = BoardWithTilesProperties();

    ConstructBoardInDOM(board);
    ActivateModals();

    const player = new Player();
    const ant1 = new Ant(player);
    const ant2 = new Ant(player);
    const interval = 2000;

    AntsListModal(player, board);

    ListClickEvents();

    const antsList = AntsListSubmitListener.bind(player, board);
    antsList(board);

    window.setInterval(update.bind(player, interval, board), interval);
    
});


function update(interval, board) {

    const decr = decrementAntDurations.bind(this, interval, board);
    decr(interval);

    // const antsList = AntsListSubmitListener.bind(this, board);
    // antsList(board);

    this.updateResourceBar();

}


function decrementAntDurations(interval, board) {
    const completers = [];

    for (const antIdx in this.ants) {
        const ant = this.ants[antIdx];

        if (ant.duration > 0) {
            ant.duration -= interval;

            if (ant.duration <= 0) {
                completers.push(ant)
                ant.duration = null;
            }
        }
    }

    if (completers.length > 0) {
        const handle = HandleCompletedTasks.bind(this, completers, board);
        handle(completers, board);
    }
}


// UPDATE FUNCTION (INTERVAL CALLBACK)

//      for each ant whose duration <= 0, call the completion function, passing in the corresponding task; for a resource task like clay, for example,  the completion function would add (Math.floor(Math.random*5)) clay to Player.clay
//      and set the ant's status back to idle