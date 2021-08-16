export function DetermineVisibility(type) {
    if (type.includes("-") || type.includes("hidden")) {
        return false;
    }

    return true;
}