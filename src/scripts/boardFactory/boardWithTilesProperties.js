import { IsExcavate } from "./tilesProperties/isExcavate.js";

// from BoardFactory:
const { WholeBoardArr } = require("./populateBoard/wholeBoardArr.js");

// from TilesProperties:
const { IsVisible } = require("./tilesProperties/isVisible.js");
const { DetermineResourceType } = require("./tilesProperties/determineResourceType.js");
const { IsInteractive } = require("./tilesProperties/isInteractive.js");
const { DetermineDuration } = require("./tilesProperties/determineDuration.js");
const { DetermineHealth } = require("./tilesProperties/determineHealth.js");


export function BoardWithTilesProperties(multiplier) {
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
        board[tileName].visibility = IsVisible(type);
        board[tileName].excavate = IsExcavate(type);
        board[tileName].resourceType = DetermineResourceType(board[tileName].tileType);
        board[tileName].interactive = IsInteractive(board[tileName].tileType);
        board[tileName].currentAnts = {};
        board[tileName].currentLarvae = {};
        board[tileName].durationInMinutes = DetermineDuration(board[tileName].tileType, multiplier);
        board[tileName].health = DetermineHealth(board[tileName].tileType);

        board[tileName].neighborTiles = determineNeighborTiles(board, board[tileName].coordinates, position);


        function determineNeighborTiles(board, coordinates, position) {

            const X = coordinates[0];
            const Y = coordinates[1];

            const neighbors = [];

            if (X > 0 && Y > 0) {
                neighbors.push([(X - 1), Y]);
                neighbors.push([X, (Y - 1)]);

            } else if (X === 0 && Y === 0) {
                //don't add any neighbors

            } else if (X === 0) {
                neighbors.push([X, (Y - 1)]);

            } else if (Y === 0) {
                neighbors.push([(X - 1), Y]);
            }

            addSelfAsNeighborToNeighbors(board, position, neighbors);
            return neighbors;
        }


        function addSelfAsNeighborToNeighbors(board, position, neighbors) {
            neighbors.forEach(neighbor => {
                const nameOfNeighbor = `tile${neighbor[1]}${neighbor[0]}`;
                board[nameOfNeighbor].neighborTiles.push([position[1], position[0]]);
            })
        }
    }

    return board;
}