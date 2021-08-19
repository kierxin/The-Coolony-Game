export function IsExcavated(type) {
    if (type.includes("excavate")) {
        return false;
    }

    return true;
}