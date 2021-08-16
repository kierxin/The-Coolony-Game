const { ConstructBoardInDOM } = require("./scripts/boardFactory/constructBoardInDOM.js");
// const { Draggable } = require("./scripts/draggable.js");


document.addEventListener('DOMContentLoaded', () => {
    // Draggable();

    ConstructBoardInDOM();
    // AddAntsToBoardInDOM();
});