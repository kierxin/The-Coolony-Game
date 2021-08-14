const Board = require("./scripts/board");

// also utilizes draggable.js

document.addEventListener('DOMContentLoaded', () => {

    const b = new Board();
    console.log(b);


    draggable(); // drag-to-scroll on board //DRAGGABLE.JS

});