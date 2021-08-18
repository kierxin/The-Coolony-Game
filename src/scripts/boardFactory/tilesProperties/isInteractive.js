export function IsInteractive(tileType) {

    const canBeInteractedWith = ["food", "wood", "beetle", "spider", "clay", "gold", "eat", "sleep", "nurse", "excavate"];

    if (!canBeInteractedWith.includes(tileType)) {
        return false;
    }

    return true;
}