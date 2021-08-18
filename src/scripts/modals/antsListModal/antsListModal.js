const { MakeDOMListItem } = require("./makeDOMListItem.js");
const { LameNamedCallback } = require("./lameNamedCallback.js");


export function AntsListModal(player, board) {

    const ants = player.ants;

    const antListItems = [];
    ants.forEach(ant => {
        antListItems.push(MakeDOMListItem(ant));
    });

    antListItems.forEach(item => LameNamedCallback(item, board));

}