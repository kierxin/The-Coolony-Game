export function DisplayAntsOnBoard(oldPosition, newPosition) {
    const grid = document.querySelector(".grid");

    for (let i = 0; i < grid.children.length; i++) {
        const tile = grid.children[i];
        const coords = tile.classList[1];

        let x;
        let y;

        if (coords.length === 2) {
            x = parseInt(coords[0]);
            y = parseInt(coords[1]);
        } else if (coords.length === 3) {
            x = parseInt(`${coords[1]}${coords[0]}`);
            y = parseInt(coords[2]);
        }

        if (x === oldPosition[0] && y === oldPosition[1]) {
            tile.classList.remove("contains-ants");
        } else if (x === newPosition[0] && y === newPosition[1]) {
            tile.classList.add("contains-ants");
        }
    }
}