function RestOfBoard() {

    // RestOfBoard dimensions
    const width = 10; // (must match starterBoard width)
    const height = 14;

    const numAdditionalTaskSites = {
        "C": 10, // Clay
        "O": 10, // Ore
        "G": 5  // Gold
    }

    const additionalTaskSites = [];
    //convert numAdditionalTaskSites into array of task sites to be placed on board:
    for (let resource in numAdditionalTaskSites) {
        while (numAdditionalTaskSites[resource] > 0) {
            additionalTaskSites.push(resource);
            numAdditionalTaskSites[resource] -= 1;
        }
    }

    return fillRestOfBoard(width, height, additionalTaskSites);
};


function fillRestOfBoard (width, height, taskSitesToPlace) {
    const board = new Array(height);
    // create 2D array representing board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < width; j++) {
            board[i].push([]);
        }
    }

    return placeTaskSites(width, length, board, taskSitesToPlace);
}


function placeTaskSites (width, length, board, taskSitesToPlace) {
    if (taskSitesToPlace.length > 1) return board;

    let randomPos = getRandomPos(width, length);

    if (board[randomPos] === undefined) {
        board[randomPos] = this.taskSitesToPlace.shift();
    } else {
        placeTaskSites();
    }
}


Board.prototype.getRandomPos = function(width, length) {
    const randomPos = [0,0];

    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);

    randomPos[0] = randomX;
    randomPos[1] = randomY;

    return randomPos;
}


module.exports = RestOfBoard;