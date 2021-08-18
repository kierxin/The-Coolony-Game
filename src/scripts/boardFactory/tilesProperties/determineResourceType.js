export function DetermineResourceType(tileType) {

    if (tileType === "food") return "food";
    if (tileType === "wood") return "wood";
    if (tileType === "clay") return "clay";
    if (tileType === "gold") return "gold";
    return null;
    
}