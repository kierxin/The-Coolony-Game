export function DetermineVisibility(type) {
    if (type === "-" || type.includes("hidden")) {
        return false;
    }

    return true;
}