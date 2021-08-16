export function IsInteractive(tileType) {

    const canBeInteractedWith = ["above", "beetle", "spider", "clay", "gold", "eat", "sleep", "nurse", "excavate"];

    if (!canBeInteractedWith.includes(tileType)) {
        return false;
    }

    return true;
}