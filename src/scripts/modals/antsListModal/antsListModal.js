const { MakeDOMListItem } = require("./makeDOMListItem.js");
const { PutAntRowsIntoDOM } = require("./putAntRowsIntoDOM.js");


export function AntsListModal(player, board) {

    const ants = player.ants;

    const antListItems = [];
    ants.forEach(ant => {
        antListItems.push(MakeDOMListItem(ant));
    });

    antListItems.forEach(item => PutAntRowsIntoDOM(item, board));

}