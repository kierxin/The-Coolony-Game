export function Draggable() {

    // VARIABLE
    let scrollPositions = [];


    // QUERY SELECTORS
    const gridContainer = document.querySelector(".grid-container");
    const draggableEle = document.getElementById("draggable");


    // EVENT LISTENERS
    draggableEle.ondrag = calculateMouseMoveDistance.bind(gridContainer);
    draggableEle.ondragend = visuallyShiftGrid.bind(gridContainer);


    // FUNCTIONS
    // calculateMouseMoveDistance(e);
    // visuallyShiftGrid(e);
    function calculateMouseMoveDistance(e) {
        scrollPositions.push([e.clientX, e.clientY]);
    }

    function visuallyShiftGrid(e) {
        this.scrollTop += (scrollPositions[1][1] - scrollPositions[scrollPositions.length - 2][1]) * 5;
        this.scrollLeft += (scrollPositions[1][0] - scrollPositions[scrollPositions.length - 2][0]) * 5;
    }

    return true;
}