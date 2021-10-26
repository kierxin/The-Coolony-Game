const { BoardWithTilesProperties } = require("./scripts/boardFactory/boardWithTilesProperties.js");
const { ActivateModals } = require("./scripts/modals/activateModals.js");
const { ConstructBoardInDOM } = require("./scripts/constructBoardInDOM.js");
const { TileInfoClickEvents } = require("./scripts/modals/tileInfoClickEvents.js");
const { DisplayAntsOnBoard } = require("./scripts/displayAntsOnBoard.js");
const { Player } = require("./scripts/player.js");
const { Ant } = require("./scripts/ant.js");
const { AntsListModal } = require("./scripts/modals/antsListModal/antsListModal.js");
const { ListClickEvents } = require("./scripts/modals/antsListModal/listClickEvents.js");
const { AntsListSubmitListener } = require("./scripts/updateHelpers/antsListSubmitListener.js");
const { HandleCompletedTasks } = require("./scripts/updateHelpers/handleCompletedTasks.js");
const { UpdateAntsListOvers } = require("./scripts/updateHelpers/updateAntsListOvers.js");
const { DecayEnergyAppetite } = require("./scripts/updateHelpers/decayEnergyAppetite.js");
const { EnergyAppetiteDepletion } = require("./scripts/updateHelpers/energyAppetiteDepletion.js");
const { BuildModeListener } = require("./scripts/buildModeListener.js");
const { InstructionBlinkers } = require("./scripts/instructionBlinkers.js");


document.addEventListener('DOMContentLoaded', () => {

    function getGameSpeedFromPlayer() {
        const slowButton = document.getElementById("slow-btn");
        const fastButton = document.getElementById("fast-btn");
        const gameSpeedWindow = document.querySelector(".game-speed");

        slowButton.addEventListener("click", () => {
            gameSpeedWindow.style.display = "none";
            runGame(2);
        });

        fastButton.addEventListener("click", () => {
            gameSpeedWindow.style.display = "none";
            runGame(.5);
        });
    };
    getGameSpeedFromPlayer();

    function runGame(gameSpeed) {
        const board = BoardWithTilesProperties(gameSpeed);

        const player = new Player();
        const ant1 = new Ant(player);
        const ant2 = new Ant(player);

        let startingPos = board["tile25"];
        startingPos.currentAnts[0] = ant1;
        startingPos.currentAnts[1] = ant2;

        const interval = 400;

        ConstructBoardInDOM(board, player);
        TileInfoClickEvents();
        DisplayAntsOnBoard(board, player);
        ActivateModals();

        const activateBuildListener = BuildModeListener.bind(player, board);
        activateBuildListener(board);

        InstructionBlinkers();

        AntsListModal(player, board);
        ListClickEvents();

        const antsList = AntsListSubmitListener.bind(player, board);
        antsList(board);

        window.setInterval(update.bind(player, interval, board), interval);
    }
});


let decayDelay = 0;
function update(interval, board) {
    // DisplayAntsOnBoard(board);

    const energyAppetiteDepletion = EnergyAppetiteDepletion.bind(this);
    energyAppetiteDepletion();
    
    const decr = decrementAntDurations.bind(this, interval);
    decr(interval);

    const handle = HandleCompletedTasks.bind(this, board);
    handle();

    this.updateResourceBar();

    decayDelay += 1;
    const decay = DecayEnergyAppetite.bind(this);
    if (decayDelay >= 50) {
        decay();
        decayDelay = 0;
    }

    const updateAntsListOvers = UpdateAntsListOvers.bind(this);
    updateAntsListOvers();
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