const { WholeBoardArr } = require("./populateBoard/wholeBoardArr.js");
// const { ParseTileType } = require("./tilesPropertiesFunctions/ParseTileType");

export function BoardWithTilesProperties() {
    const boardArr = WholeBoardArr();

    const board = {};

    // boardArr.forEach(tile => {
    //     const position = setPosition(tile);

    //     const tileName = `tile${position[0]}${position[1]}`;
    //     board[tileName] = {};

    //     board[tileName].tileType = parseTileType(tile);
    //     board[tileName].resourceType = determineResourceType(tileType);
    //     board[tileName].visibility = parseVisibility(tile);
    //     board[tileName].interactive = isInteractive(tileType);
    //     board[tileName].neighboringTiles = determineNeighboringTiles(position);
    //     board[tileName].currentAnts = {};
    //     board[tileName].CurrentLarvae = {};
    //     board[tileName].duration = determineDuration();
    //     board[tileName].helght = determineHealth();
    //     addSelfAsNeighborToNieghbors();
    // });

    // return board;

    return boardArr; //change this to board !!!
}