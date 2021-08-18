export function AntsListAssignTask(player, board) {

    const overs = document.querySelectorAll(".over");

    overs.forEach((over, idx) => {
        over.addEventListener("click", () => {
            player.lastAnt = idx;
        });
    });


    const formInputs = document.querySelectorAll("input");
    const form = document.querySelector("form");


    formInputs.forEach(input => {
        input.addEventListener("click", () => {
            
            const ant = player.lastAnt;

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


            place.currentAnts.ant = player.ants[ant];

            player.ants[ant].position = pos;
            player.ants[ant].status = place.tileType;
            player.ants[ant].duration = place.durationInMinutes * 60000;
        });
    });
}

