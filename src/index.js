const { ConstructBoardInDOM } = require("./scripts/constructBoardInDOM.js");
const { Player } = require("./scripts/player.js");
// const { Draggable } = require("./scripts/draggable.js");


document.addEventListener('DOMContentLoaded', () => {
    // Draggable();

    ConstructBoardInDOM();
    // AddAntsToBoardInDOM();

    let player = new Player();


    // window.setInterval(player.updateResourceBar.bind(player), 5000);

    
});


// UPDATE FUNCTION (INTERVAL CALLBACK)

//      subtracts 5 from all ants' duration 

//          (when an ant is given a new task, set that ant's duration to the duration of the task, & set the ant's status to that task)

//      for each ant whose duration <= 0, call the completion function of the association task; for a resource task like clay, for example,  the completion function for clay would add (Math.floor(Math.random*5)) clay to Player.clay

//      calls updateResourceBar
