// from BoardFactory:
const { WholeBoardArr } = require("./populateBoard/wholeBoardArr.js");

// from TilesProperties:
const { DetermineVisibility } = require("./tilesProperties/determineVisibility.js");
const { DetermineResourceType } = require("./tilesProperties/determineResourceType.js");
const { IsInteractive } = require("./tilesProperties/isInteractive.js");
const { DetermineNeighborTiles } = require("./tilesProperties/determineNeighborTiles.js");
const { DetermineDuration } = require("./tilesProperties/determineDuration.js");
const { DetermineHealth } = require("./tilesProperties/determineHealth.js");


export function BoardWithTilesProperties() {
    const boardArr = WholeBoardArr();

    const board = {};

    // boardArr tiles are formatted: [[x, y], ["tileType", "visibility"]]
    for (let tile of boardArr) {
        
        // helper variables
        const position = tile[0];
        const type = tile[1];
        const tileName = `tile${position[0]}${position[1]}`;

        board[tileName] = {};
        board[tileName].coordinates = [position[1], position[0]];
        board[tileName].tileType = type[0];
        board[tileName].visibility = DetermineVisibility(type);
        board[tileName].resourceType = DetermineResourceType(board[tileName].tileType);
        board[tileName].interactive = IsInteractive(board[tileName].tileType);
        board[tileName].neighborTiles = DetermineNeighborTiles(position);
        board[tileName].currentAnts = {};
        board[tileName].currentLarvae = {};
        board[tileName].durationInMinutes = DetermineDuration(board[tileName].tileType);
        board[tileName].health = DetermineHealth(board[tileName].tileType);
        addSelfAsNeighborToNeighbors(position, board[tileName].neighborTiles);

    }

    function addSelfAsNeighborToNeighbors(position, neighbors) {
        neighbors.forEach(neighbor => {
            const nameOfNeighbor = `tile${neighbor[0]}${neighbor[1]}`;
            board[nameOfNeighbor].neighborTiles.push(position);
        })
    }

    return board;
}