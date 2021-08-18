const { BoardWithTilesProperties } = require("./scripts/boardFactory/boardWithTilesProperties.js");
const { ActivateModals } = require("./scripts/activateModals.js");
const { ConstructBoardInDOM } = require("./scripts/constructBoardInDOM.js");
const { Player } = require("./scripts/player.js");
const { Ant } = require("./scripts/ant.js");
const { AntsListModal } = require("./scripts/modals/antsListModal/antsListModal.js");

// const { Draggable } = require("./scripts/draggable.js");


document.addEventListener('DOMContentLoaded', () => {

    const board = BoardWithTilesProperties();

    ConstructBoardInDOM(board);
    ActivateModals();

    const player = new Player();
    const ant1 = new Ant(player);
    const ant2 = new Ant(player);


    AntsListModal(player, board);

    // window.setInterval(update.bind(player), 2000);
    
});


function update() {
    console.log(this);
    temp(this);
    this.updateResourceBar();
}


function temp(player) {
    player.loot += 100;
    player.wood += 30;
    player.clay += 20;
    player.gold += 1;
}


// UPDATE FUNCTION (INTERVAL CALLBACK)

//      subtracts 5 from all ants' duration 
//          (when an ant is given a new task, set that ant's duration to the duration of the task, & set the ant's status to that task)

//      for each ant whose duration <= 0, call the completion function of the association task; for a resource task like clay, for example,  the completion function for clay would add (Math.floor(Math.random*5)) clay to Player.clay
//      and set the ant's status back to idle

//      calls updateResourceBar
