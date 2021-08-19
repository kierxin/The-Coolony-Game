export function DetermineDuration(tileType) {
    
    const typesThatHaveDuration = ["food", "wood", "clay", "gold", "excavate", "eat", "sleep", "nurse"];

    if (!typesThatHaveDuration.includes(tileType)) {
        return null;
    } else if (tileType === "food") {
        return 1;  // 3; // minutes
    } else if (tileType === "wood") {
        return 1;  // 3; // minutes
    } else if (tileType === "clay") {
        return 2;  // 5;
    } else if (tileType === "gold") {
        return 5;  // 15;
    } else if (tileType === "eat") {
        return 1;
    } else if (tileType === "sleep") {
        return 10;
    } else if (tileType === "nurse") {
        return 60;
    } else if (tileType === "excavate") {
        return .1; //when changing, also change antsSubmitListener.js
    }
}