export function MoreTaskSites() {

    const numAdditionalTaskSites = {
        "C": 10, // Clay
        "O": 10, // Ore
        "G": 5  // Gold
    }

    const additionalTaskSites = [];
    //convert numAdditionalTaskSites into array of task sites to be placed on board:
    for (let resource in numAdditionalTaskSites) {
        while (numAdditionalTaskSites[resource] > 0) {
            additionalTaskSites.push(resource);
            numAdditionalTaskSites[resource] -= 1;
        }
    }

    return additionalTaskSites;

}