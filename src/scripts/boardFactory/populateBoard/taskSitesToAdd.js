export function TaskSitesToAdd() {

    const numExtraTaskSites = {
        "beetle": 3,
        "spider": 1,
        "clay": 15,
        "gold": 5,
        "quartz": 8,
        "mica": 8
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