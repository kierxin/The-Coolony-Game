const { BoardAs1DArray } = require("./boardAs1DArray.js");

export function BoardWithTilesProperties() {
    const boardArr = BoardAs1DArray();

    const board = {};

    boardArr.forEach(tile => {
        const position = setPosition(tile);

        const tileName = `tile${position[0]}${position[1]}`;
        board[tileName] = {};

        board[tileName].tileType = parseTileType(tile);
        board[tileName].resourceType = determineResourceType(tileType);
        board[tileName].visibility = parseVisibility(tile);
        board[tileName].interactive = isInteractive(tileType);
        board[tileName].neighboringTiles = determineNeighboringTiles(position);
        board[tileName].currentAnts = {};
        board[tileName].CurrentLarvae = {};
        board[tileName].duration = determineDuration();
        board[tileName].helght = determineHealth();
        addSelfAsNeighborToNieghbors();
    });

    return board;
}