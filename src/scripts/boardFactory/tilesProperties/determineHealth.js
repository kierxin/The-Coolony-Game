export function DetermineHealth(tileType) {

    const fightable = ["beetle", "spider"];

    if (!fightable.includes(tileType)) {
        return null;
    } else if (fightable === "beetle") {
        return 10;
    } else if (fightable === "spider") {
        return 30;
    }
}