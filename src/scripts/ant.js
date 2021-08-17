export function Ant(player) {

    this.id = player.ants.length;
    this.position = [2,5];
    this.status = 'idle';
    this.duration = null;
    this.energy = 10; // from 1 to 10
    this.appetite = 1; // from 1 to 10
    
    player.ants.push(this);

}


Ant.prototype.assignTask = function(task) {
    this.status = task;
}

Ant.prototype.removeTask = function() {
    this.status = 'idle';
}