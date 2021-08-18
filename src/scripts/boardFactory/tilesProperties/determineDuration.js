export function DetermineDuration(tileType) {
    
    const typesThatHaveDuration = ["above", "clay", "gold", "excavate", "eat", "sleep", "nurse"];

    if (!typesThatHaveDuration.includes(tileType)) {
        return null;
    } else if (tileType === "above") {
        return 1;  // 3; // minutes
    } else if (tileType === "clay") {
        return 1;  // 5;
    } else if (tileType === "gold") {
        return 1;  // 15;
    } else if (tileType === "excavate") {
        return 1;  // 120;
    } else if (tileType === "eat") {
        return 1;  // 3;
    } else if (tileType === "sleep") {
        return 1;  // 60;
    } else if (tileType === "nurse") {
        return 1;  // 360;
    }
}