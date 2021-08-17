const { MakeDOMListItem } = require("./makeDOMListItem");


export function AntsListModal(player, board) {

    const antsList = document.getElementById("ants-list");
    const ants = player.ants;

    const antListItems = [];
    ants.forEach(ant => {
        antListItems.push(MakeDOMListItem(ant));
    });

    antListItems.forEach(item => LameNamedCallback(item, board));

}