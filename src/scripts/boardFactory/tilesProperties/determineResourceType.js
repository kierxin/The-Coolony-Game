export function DetermineResourceType(tileType) {

    if (tileType === "above") return "food,twigs";
    if (tileType === "clay") return "clay";
    if (tileType === "gold") return "gold";
    return null;
    
}