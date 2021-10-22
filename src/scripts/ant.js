export function Ant(player) {

    player.ants.length < 1 ? this.id = 1 : this.id = player.ants.length + 1;

    this.position = [5, 2];
    this.status = 'idle';
    this.duration = null;
    this.energy = 90; // from 1 to 100
    this.appetite = 10; // from 1 to 100
    this.cumulativeWork = {
        loot: 0,
        food: 0,
        wood: 0,
        clay: 0,
        gold: 0,
    }

    player.ants.push(this);

}


Ant.prototype.assignTask = function(task) {
    this.status = task;
}

Ant.prototype.removeTask = function() {
    this.status = 'idle';
}