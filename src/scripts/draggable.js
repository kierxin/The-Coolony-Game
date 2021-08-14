export function Draggable() {

    console.log(this);

    // VARIABLE
    let scrollPositions = [];


    // QUERY SELECTORS
    const gameGridContainer = document.querySelector(".game-grid-container");
    const draggableEle = document.getElementById("draggable");


    // EVENT LISTENERS
    draggableEle.ondrag = calculateMouseMoveDistance.bind(gameGridContainer);
    draggableEle.ondragend = visuallyShiftGrid.bind(gameGridContainer);


    // FUNCTIONS
    calculateMouseMoveDistance(e);
    visuallyShiftGrid(e);

    return true;
}


function calculateMouseMoveDistance(e) {
    scrollPositions.push([e.clientX, e.clientY]);
    console.log(scrollPositions[scrollPositions.length - 2]);
}

function visuallyShiftGrid(e) {
    this.scrollTop += (scrollPositions[1][1] - scrollPositions[scrollPositions.length - 2][1]) * 5;
    this.scrollLeft += (scrollPositions[1][0] - scrollPositions[scrollPositions.length - 2][0]) * 5;
}