const { MoreTaskSites } = require("./moreTaskSites");


export function RestOfBoard () {

    // RestOfBoard dimensions
    const width = 10; // (must match starterBoard width)
    const height = 14;

    const additionalTaskSites = MoreTaskSites();

    let board = [];
    board = fillRestOfBoard(width, height, board);

    board = placeTaskSites(board, additionalTaskSites, width, height);
    
    return board;
};


function fillRestOfBoard(width, height, board) {

    for (let i = 0; i < height; i++) {
        board.push([]);
    }

    // create 2D array representing board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < width; j++) {
            board[i].push("");
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
        if (board[x][y].includes(marked[i])) {
            bool.push("false");
        }
    }

    if (!bool.includes("false")) {
        board[x][y] = taskSitesToPlace.shift();
    };

    placeTaskSites(board, taskSitesToPlace, width, height);

}


function getRandomPos(width, height) {
    let randomPos = [];

    let randomX = Math.floor(Math.random() * height);
    let randomY = Math.floor(Math.random() * width);

    randomPos.push(randomX);
    randomPos.push(randomY);

    return randomPos;
}