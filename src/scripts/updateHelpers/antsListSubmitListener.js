export function AntsListSubmitListener(board) {

    const overs = document.querySelectorAll(".over");

    // determine which ant to update
    overs.forEach((over, idx) => {
        over.addEventListener("click", () => {
            this.lastAnt = idx;
        });
    });


    const formInputs = document.querySelectorAll("input");
    const form = document.querySelector("form");


    formInputs.forEach(input => {
        input.addEventListener("click", (e) => {
            e.preventDefault();

            const ant = this.lastAnt;


            // close ants list under-item; this is required to ensure that the player re-opens a list under-item every time they try to assign a task; this re-opened under-item is how the 'last ant' determined, which determines which ant's status is updated
            const unders = document.querySelectorAll(".under");
            unders[ant].style.display = "none";
            unders[ant].setAttribute("display", "none");


            // ensure that 'last ant' can only be an ant that's yet to be assigned a task 
            const overs = document.querySelectorAll(".over");
            overs[ant].style.pointerEvents = "none";
            overs[ant].style.opacity = ".5";


            const strings = form.name.split(",");
            let pos = strings.map(coord => parseInt(coord));
            
            let parsedPos = "";
            pos.forEach(num => parsedPos += num);

            let place;
            for (let tile in board) {
                if (board[tile].coordinates.join("") === parsedPos) {
                    place = board[tile];
                }
            }

            place.currentAnts.ant = this.ants[ant];

            if (place.excavate === true) {
                this.ants[ant].status = "excavate";

                // excavate duration (see determineDuration.js):
                this.ants[ant].duration = .1 * 60000;

            } else {
                this.ants[ant].status = place.tileType;
                this.ants[ant].duration = place.durationInMinutes * 60000;
            }

            this.ants[ant].position = pos;
        });
    });

}

