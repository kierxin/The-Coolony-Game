// this function only returns positions of neighbors
//      that precede the current tile in the grid

export function DetermineNeighborTiles(position) {

    const X = position[0];
    const Y = position[1];

    const neighbors = [];

    if (X > 0 && Y > 0) {
        neighbors.push([(X - 1), Y]);
        neighbors.push([X, (Y - 1)]);

    } else if (X === 0 && Y === 0) {
        // don't add any neighbors

    } else if (X === 0) {
        neighbors.push([X, (Y - 1)]);

    } else if (Y === 0) {
        neighbors.push([(X - 1), Y]);
    }

    return neighbors;
}