export function RestOfBoard() {

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


    let board = [];
    board = fillRestOfBoard(width, height, board);
    console.log(board);
    board = placeTaskSites(board, additionalTaskSites, width, height);
    console.log(board);
    return board;
};


function fillRestOfBoard (width, height, board) {
    
    for (let i = 0; i < height; i++) {
        board.push([]);
    }

    // create 2D array representing board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < width; j++) {
            board[i].push([]);
        }
    }

    return board;
}


function placeTaskSites(board, taskSitesToPlace, width, height) {
    if (taskSitesToPlace.length < 1) return board;

    let randomPos = getRandomPos(width, height);


    let x = randomPos[0];
    let y = randomPos[1];

    const marked = ["C", "O", "G"];

    let bool = [];
    for (let i = 0; i < marked.length; i++) {
        console.log(board[x][y]);
        if (board[x][y].includes(marked[i])) {
            bool.push("false");
        }
    }

    board[x][y] = taskSitesToPlace.shift();
    placeTaskSites(board, taskSitesToPlace, width, height);

}


function getRandomPos(width, height) {
    let randomPos = [];

    let randomX = Math.floor(Math.random() * width);
    let randomY = Math.floor(Math.random() * height);

    randomPos.push(randomX);
    randomPos.push(randomY);

    console.log(randomPos);

    return randomPos;
}
