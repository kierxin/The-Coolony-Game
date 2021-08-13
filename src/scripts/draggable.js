function draggable() {


    // QUERY SELECTORS START
    const gameGridContainer = document.querySelector(".game-grid-container");
    const draggableEle = document.getElementById("draggable");


    // DRAGGABLE GAME Board
    // draggable.addEventListener('drag', redize.bind(draggable));
    draggableEle.ondrag = calculateMouseMoveDistance.bind(gameGridContainer);
    draggableEle.ondragend = visuallyShiftGrid.bind(gameGridContainer);

    let scrollPositions = [];

    function calculateMouseMoveDistance(e) {
        scrollPositions.push([e.clientX, e.clientY]);
        console.log(scrollPositions[scrollPositions.length - 2]);
    }

    function visuallyShiftGrid(e) {
        this.scrollTop += (scrollPositions[1][1] - scrollPositions[scrollPositions.length - 2][1]) * 5;
        this.scrollLeft += (scrollPositions[1][0] - scrollPositions[scrollPositions.length - 2][0]) * 5;
    }


}