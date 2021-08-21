export function DetermineDuration(tileType, multiplier) {
    
    const typesThatHaveDuration = ["food", "wood", "clay", "gold", "excavate", "eat", "sleep", "nurse"];

    if (!typesThatHaveDuration.includes(tileType)) {
        return null;
    } else if (tileType === "food") {
        return 1 * multiplier;
    } else if (tileType === "wood") {
        return 1 * multiplier;
    } else if (tileType === "clay") {
        return 2 * multiplier;
    } else if (tileType === "gold") {
        return 5 * multiplier;
    } else if (tileType === "eat") {
        return 1 * multiplier;
    } else if (tileType === "sleep") {
        return 10 * multiplier;
    } else if (tileType === "nurse") {
        return 10 * multiplier;
    } else if (tileType === "excavate") {
        return 5 * multiplier; //when changing, also change antsSubmitListener.js
    }
}