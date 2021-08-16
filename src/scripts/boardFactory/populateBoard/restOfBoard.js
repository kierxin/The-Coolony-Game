const { TaskSitesToAdd } = require("./taskSitesToAdd");


export function RestOfBoard () {

    // RestOfBoard dimensions
    const width = 10; // (should match starterBoard width)
    const height = 14;

    const taskSites = TaskSitesToAdd();

    const board = [];


    // Below code is dependent on board being closed over:
    let fill = function () {

        for (let i = 0; i < height; i++) {
            board.push([]);
        }

        // create 2D array representing board
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < width; j++) {
                board[i].push("-");
            }
        }

        return board;
    }


    // Also dependent on board being closed over:
    const placeTasks = function () {

        // Base case
        if (taskSites.length < 1) {
            return board;
        }

        const randomPos = getRandomPos(width, height);

        const x = randomPos[0];
        const y = randomPos[1];

        const marked = ["C", "O", "G"];

        let bool = [];
        for (let i = 0; i < marked.length; i++) {
            if (board[x][y].includes(marked[i])) {
                bool.push("false");
            }
        }

        if (!bool.includes("false")) {
            board[x][y] = `${taskSites.shift()}H`;
        };

        // Recursive call
        placeTasks();
    }
    

    fill();
    placeTasks();

    return board;
};


function getRandomPos(width, height) {
    const randomPos = [];

    const randomX = Math.floor(Math.random() * height);
    const randomY = Math.floor(Math.random() * width);

    randomPos.push(randomX);
    randomPos.push(randomY);

    return randomPos;
}