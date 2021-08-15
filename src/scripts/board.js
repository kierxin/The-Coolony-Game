const { StarterBoard } = require("./starterBoard.js");
const { RestOfBoard } = require("./restOfBoard.js");

export function Board() {

    const starter = StarterBoard();
    const theRest = RestOfBoard();

    const wholeBoardAsArray = starter.concat(theRest);
    console.log(wholeBoardAsArray);

    wholeBoardAsArray.forEach((row, i) => {
        let rowAsString;
        row.forEach((col, j) => rowAsString += `${row[j]}`);

        console.log(rowAsString);
    })

}