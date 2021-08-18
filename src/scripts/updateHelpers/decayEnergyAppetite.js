export function DecayEnergyAppetite() {

    for (let i = 0; i < this.ants.length; i++) {
        if (this.ants[i].appetite < 99) {
            this.ants[i].appetite += Math.floor(Math.random() * 2);
        } else if (this.ants[i].appetite === 99) {
            this.ants[i].appetite += 1;
        }
    }

    for (let i = 0; i < this.ants.length; i++) {
        if (this.ants[i].energy > 1) {
            this.ants[i].energy -= Math.floor(Math.random() * 2);
        } else if (this.ants[i].energy === 1) {
            this.ants[i].energy -= 1;
        }
    }
}