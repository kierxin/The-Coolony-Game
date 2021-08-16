function createTile(position, tileType, alreadyProcessedCells, gridWidth) {

    // parse tile's type
    // check tile's visibility
    // determine neighboring cells
    //      4-element array (top, right, bottom, left);
    //      WHERE top and left are known / right and bottom are TBD

    // based on tile type, call constructor function of:
    //      above, beetle, gold, quartz, mica, dig, dug, eat, sleep, nurse
    //      PASSING IN position, visibility, neighboring cells array

    // add the current tile as a neighbor to its preceeding neighbors:
    //      its top and left neighbors

}





//  {
//     constructor(tileType, alreadyProcessedCells, gridWidth) {
//         this.type = this.parseTileType(tileType);
//         this.visibility = this.checkForHidden();
//         this.neighboringCells = this.determineNieghbors(alreadyProcessedCells, gridWidth);
//         //this.currentAnts

//         this.addSelfAsNieghborToOtherCells(); // need to implement
//     }

//     parseTileType(tType) {
//         let tileType = tType.split("");
//         let result = [];

//         if (tileType.includes("H")) {
//             result = ["hidden"];
//             tileType.pop();
//         } else {
//             result = [];
//         }

//         switch (tileType) {
//             case "-":
//                 result.unshift("hidden");
//                 break;
//             case "T":
//                 result.unshift("tunnel");
//                 break;
//             case "N":
//                 result.unshift("nest");
//                 break;
//             case "F":
//                 result.unshift("food");
//                 break;
//             case "C":
//                 result.unshift("clay");
//                 break;
//             case "O":
//                 result.unshift("ore");
//                 break;
//             case "G":
//                 result.unshift("gold");
//                 break;
//             case "E":
//                 result.unshift("excavate");
//                 break;
//         }

//         return result;
//     }

//     checkForHidden() {
//         if (this.type.includes("hidden")) {
//             return "hidden";
//         } else {
//             return "visible";
//         }
//     }

//     determineNieghbors(preceedingCells, width) {
        
//     }
// }


