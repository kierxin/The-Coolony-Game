export function UpdateAntsList () {

    const antsList = document.querySelector("#ants-list");
    const properties = [];

    const collection = antsList.children[0].children;
    for (let i = 0; i < collection.length; i++) {
        properties.push(collection[i].innerHTML);
    }

    const items = [];

    antsList.children.forEach((item, i) => {
        if (i > 0 && i % 2 === 1) {
            items.push(item);
        }
    });

    console.log(this.ants);
    // console.log(properties);

    items.forEach((item, i) => {

        // console.log(this.ants[i]);
        for (let j = 0; j < properties.length; j++) {
            item.children[j].children[0].innerHTML = this.ants[i][properties[j]];

            //hard-coded to parse position:
            item.children[1].children[0].innerHTML = this.ants[i][properties[1]].join(",");


            // item.children[1].children[0].innerHTML = this.ants[i][properties[1]].split("").join(", ");

            // console.log(item.children[i].children[0].innerHTML);
        }
    });
}