const { MakeDOMListItem } = require("./makeDOMListItem.js");
const { PutAntRowsIntoDOM } = require("./putAntRowsIntoDOM.js");


export function AntsListModal(player) {

    const ants = player.ants;
    const antsList = document.querySelector("#ants-list");

    let idsOfAntsAlreadyListed = [];
    for (let i = 0; i < antsList.children.length; i++) {
        const text = antsList.children[i].children[0].innerText;

        if (text.length === 1) {
            if (!idsOfAntsAlreadyListed.includes(parseInt(text))) {
                idsOfAntsAlreadyListed.push(parseInt(text));
            }
        }
    }

    const antListItems = [];
    ants.forEach(ant => {
        if (!idsOfAntsAlreadyListed.includes(ant.id)) {
            antListItems.push(MakeDOMListItem(ant));
        }
    });

    antListItems.forEach(item => PutAntRowsIntoDOM(item, player));

}