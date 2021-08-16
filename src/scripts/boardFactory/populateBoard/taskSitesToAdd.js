export function TaskSitesToAdd() {

    const numExtraTaskSites = {
        "beetle": 3,
        "spider": 1,
        "clay": 10,
        "gold": 4,
        "quartz": 5,
        "mica": 8
    }

    const extraTaskSites = [];
    //convert numExtraTaskSites into array of task sites to be placed on board:
    for (const resource in numExtraTaskSites) {
        while (numExtraTaskSites[resource] > 0) {
            extraTaskSites.push(resource);
            numExtraTaskSites[resource] -= 1;
        }
    }

    return extraTaskSites;

}