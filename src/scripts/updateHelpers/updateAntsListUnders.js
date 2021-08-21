export function UpdateAntsListUnders(coordinates, tileType) {

    const pos = JSON.stringify(coordinates);

    const unders = document.querySelectorAll(".under");

    this.ants.forEach((ant, i) => {
        const options = unders[i].children[1].childNodes[1].children;

        options.forEach(option => {
            if (JSON.stringify(option.innerHTML).includes(pos)) {
                option.innerHTML = `${pos}: ${tileType}`;
            };
        });
    });
    
}
