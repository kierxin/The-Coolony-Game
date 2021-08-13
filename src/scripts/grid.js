document.addEventListener('DOMContentLoaded', () => {

    // QUERY SELECTORS
    const gameGridContainer = document.querySelector(".game-grid-container");
    const gameGrid = document.querySelector(".game-grid");
    const draggable = document.getElementById("draggable");



    // DRAGGABLE GAME GRID
    // draggable.addEventListener('drag', redize.bind(draggable));
    draggable.ondrag = calculateMouseMoveDistance.bind(gameGridContainer);
    draggable.ondragend = visuallyShiftGrid.bind(gameGridContainer);

    let scrollPositions = [];

    function calculateMouseMoveDistance(e) {
        scrollPositions.push([e.clientX, e.clientY]);
        console.log(scrollPositions[scrollPositions.length - 2]);
    }

    function visuallyShiftGrid(e) {
        this.scrollTop += (scrollPositions[1][1] - scrollPositions[scrollPositions.length - 2][1]) * 5;
        this.scrollLeft += (scrollPositions[1][0] - scrollPositions[scrollPositions.length - 2][0]) * 5;
    }

});

