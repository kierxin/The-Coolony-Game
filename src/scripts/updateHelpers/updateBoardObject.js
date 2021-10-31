export function updateBoardObject(board, ant) {
    console.log(ant);
    // console.log(board);
    const position = ant.position;

    console.log(board[`tile${position[1]}${position[0]}`]);
}