export function TaskSitesToAdd() {

    const numExtraTaskSites = {
        "C": 12, // Clay
        "O": 12, // Ore
        "G": 5  // Gold
    }

    const extraTaskSites = [];
    //convert numExtraTaskSites into array of task sites to be placed on board:
    for (let resource in numExtraTaskSites) {
        while (numExtraTaskSites[resource] > 0) {
            extraTaskSites.push(resource);
            numExtraTaskSites[resource] -= 1;
        }
    }

    return extraTaskSites;

}