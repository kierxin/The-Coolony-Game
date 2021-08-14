const Board = require("../src/scripts/board");

describe("Board", function() {
    beforeEach(function() {
        const b = new Board("this is my test string");
    });

    xit("has an array of potential starter boards", function() {
        // expect(Board.potentialStarterBoards).toBeFalsy;
    });
    xit("randomly chooses 1 of the hardcoded starter board arrays", function() {
        
    });
    xit("assigns the starter board array as the player's startBoard", function() {

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