// const { Draggable } = require("./scripts/draggable.js");
const { BoardWithTilesProperties } = require("./scripts/boardFactory/boardWithTilesProperties.js");
const { ActivateModals } = require("./scripts/activateModals.js");
const { ConstructBoardInDOM } = require("./scripts/constructBoardInDOM.js");
const { Player } = require("./scripts/player.js");
const { Ant } = require("./scripts/ant.js");
const { AntsListModal } = require("./scripts/modals/antsListModal/antsListModal.js");
const { ListClickEvents } = require("./scripts/modals/antsListModal/listClickEvents.js");
const { AntsListSubmitListener } = require("./scripts/updateHelpers/antsListSubmitListener.js");
const { HandleCompletedTasks } = require("./scripts/updateHelpers/handleCompletedTasks.js");
const { UpdateAntsList } = require("./scripts/updateHelpers/updateAntsList.js");


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

    const antsList = AntsListSubmitListener.bind(player, board);
    antsList(board);


    window.setInterval(update.bind(player, interval), interval);
    
});


function update(interval) {

    const decr = decrementAntDurations.bind(this, interval);
    decr(interval);

    const handle = HandleCompletedTasks.bind(this);
    handle();

    this.updateResourceBar();

    const updateAntsList = UpdateAntsList.bind(this);
    updateAntsList();
}


function decrementAntDurations(interval) {

    for (const antIdx in this.ants) {
        const ant = this.ants[antIdx];
        if (ant.duration > 0) ant.duration -= interval; 
    }

    for (const antIdx in this.ants) {
        const ant = this.ants[antIdx];
        if (ant.duration <= 0 && ant.status !== 'idle') this.completers.push(ant);
    }
}