export function DetermineDuration(tileType) {
    
    const typesThatHaveDuration = ["food", "wood", "clay", "gold", "excavate", "eat", "sleep", "nurse"];

    if (!typesThatHaveDuration.includes(tileType)) {
        return null;
    } else if (tileType === "food") {
        return .2;  // 3; // minutes
    } else if (tileType === "wood") {
        return .2;  // 3; // minutes
    } else if (tileType === "clay") {
        return .2;  // 5;
    } else if (tileType === "gold") {
        return .2;  // 15;
    } else if (tileType === "excavate") {
        return .2;  // 120;
    } else if (tileType === "eat") {
        return .2;  // 3;
    } else if (tileType === "sleep") {
        return .2;  // 60;
    } else if (tileType === "nurse") {
        return .2;  // 360;
    }
}