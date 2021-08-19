export function EnergyAppetiteDepletion() {

    const unders = document.querySelectorAll(".under");


    this.ants.forEach((ant, i) => {

        const options = unders[i].children[1].childNodes[1].children;


        // ensure that options are made available again after depletion has been remedied:
        options.forEach(option => {
            if (!option.innerText.includes("task"));
            option.disabled = false;
        });


        // check for energy depletion / appetite fullness; based on those, restrict player task options:
        if (ant.energy <= 1 || ant.appetite >= 99) {

            if (ant.energy <= 1 && ant.appetite >= 99) {

                options.forEach(option => {
                    if (!option.innerText.includes("eat") || !option.innerText.includes("sleep")) {
                        option.disabled = true;
                    }
                });

            } else if (ant.energy <= 1) {

                options.forEach(option => {
                    if (!option.innerText.includes("sleep")) {
                        option.disabled = true;
                    }
                });

            } else if (ant.appetite >= 99) {

                options.forEach(option => {
                    if (!option.innerText.includes("eat")) {
                        option.disabled = true;
                    }
                });

            }
        }

        
    })

}