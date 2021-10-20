export function Player () {

    this.loot = 0;
    this.food = 10;
    this.wood = 10;
    this.clay = 10;
    this.gold = 0;
    this.ants = [];
    this.lastAnt = null;    // player's most recently selected ant
    this.completers = [];   // ants that have just finished a task

}


Player.prototype.updateResourceBar = function() {

    const lootVal = document.querySelector("#loot-val");
    const foodVal = document.querySelector("#food-val");
    const woodVal = document.querySelector("#wood-val");
    const clayVal = document.querySelector("#clay-val");
    const goldVal = document.querySelector("#gold-val");

    lootVal.innerHTML = this.loot;
    foodVal.innerHTML = this.food;
    woodVal.innerHTML = this.wood;
    clayVal.innerHTML = this.clay;
    goldVal.innerHTML = this.gold;

}