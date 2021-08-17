export function AntsListModal(player) {

    const antsList = document.getElementById("ants-list");
    const ants = player.ants;

    const antListItems = [];
    ants.forEach(ant => {
        antListItems.push(makeDOMListItem(ant));
    });

    antListItems.forEach(item => {
        antsList.appendChild(item);
    });

}


function makeDOMListItem(ant) {
    const a = document.createElement("li");
    a.classList.add("ants-list-item");

    const antProperties = []
    for (let k in ant) antProperties.push([k, ant[k]]);


    const columnsOfAntListItem = antProperties.map(property => {

        function makeDOMItemColumn(property) {
            const div = document.createElement("div");

            const propVal = document.createElement("p");
            propVal.innerHTML = `${property[1]}`;
            propVal.classList.add("ants-list-property-value");

            div.appendChild(propVal);

            div.classList.add("ants-list-item-column");

            return div;
        }

        return makeDOMItemColumn(property);
    });


    columnsOfAntListItem.forEach((col, idx) => {
        if (idx < columnsOfAntListItem.length - 3) {
            a.appendChild(col);
        }
    })

    a.classList.add("ensure-display-none-if-model-inactive");
    return a;
}