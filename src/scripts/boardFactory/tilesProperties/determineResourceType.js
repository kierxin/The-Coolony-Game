export function DetermineResourceType(tileType) {
    const resources = ["food, twigs, clay, gold"];

    if (!resources.includes(tileType)) {
        return null;
    } else if (tileType === "above") {
        return "food,twigs"
    }

    return tileType;
}