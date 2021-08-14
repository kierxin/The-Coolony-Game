const Board = require("../src/scripts/board");

describe("Board", function() {

    let b;

    // beforeEach(function() {
    //     b = new Board();
    //     b.starter = createStarterBoard();
    // });

    xit("assigns a required starter board array as the player's startBoard", function() {
    
    });
    xit("randomly distributes 5Gs, 10Os, and 10Cs throughout a 10x14 array", function() {

    });
    xit("appends the 10x14 array onto the player's startBoard", function() {
        //each subarray of the 10x14 array should become a subarray of the startBoard; they should all be at the same level of nesting... 
            //in other words, each subArray of the startBoard should not contain further subArrays
    })
})




function createStarterBoard() {
    return [
        ["", "T", "", "", "", "", "", "", "C", ""],
        ["O", "T", "T", "T", "T", "T", "T", "T", "T", ""],
        ["", "T", "", "", "", "O", "", "", "T", "C"],
        ["", "T", "", "T", "", "", "N", "N", "T", ""],
        ["", "F", "T", "T", "T", "T", "N", "N", "", ""],
        ["", "F", "", "", "E", "", "", "", "", ""]
    ];
}