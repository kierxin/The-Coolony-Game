const { StarterBoard } = require("./starterBoard.js");
const { RestOfBoard } = require("./restOfBoard.js");

export function BoardAsString() {

    const starter = StarterBoard();
    const theRest = RestOfBoard();

    const wholeBoardAsArray = starter.concat(theRest);

    const stringifiedBoard = function () {
        const boardAsStr = [];

        wholeBoardAsArray.forEach((row) => {
            boardAsStr.push(row.join(""))
        });

        return boardAsStr.join("");
    }

    return stringifiedBoard();
}