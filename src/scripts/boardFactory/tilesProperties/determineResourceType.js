export function DetermineResourceType(tileType) {
    console.log(tileType);

    const resources = ["food, twigs, clay, gold"];

    if (!resources.includes(tileType)) {
        return null;
    } else if (tileType === "above") {
        return "food,twigs"
    } else {
        return tileType;
    }
}