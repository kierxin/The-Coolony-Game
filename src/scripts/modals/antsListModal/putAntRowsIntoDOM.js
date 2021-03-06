import { UpdateAntsListOvers } from "../../updateHelpers/updateAntsListOvers.js";
import { CreateFormForAntsList } from "./createFormForAntsList.js";

export function PutAntRowsIntoDOM (item, player) {
    const board = player.board;
    let antsList = document.querySelector("#ants-list");

    const potentialTasks = [];

    for (const tile in board) {
        if (board[tile].interactive === true && board[tile].visibility === true && board[tile].excavate === false) {
            const pos = board[tile].coordinates;
            const task = board[tile].tileType;
            
            potentialTasks.push([pos, task]);
        }

        if (board[tile].excavate === true) {
            potentialTasks.push([board[tile].coordinates, "excavate"]);
        }
    }

    // CREATE TEXT OF LIST ITEM UNDERNEATH
    const id = item[0].children[0].children[0].innerHTML;
        // const pos = item[0].children[1].children[0].innerHTML;
        // const status = item[0].children[2].children[0].innerHTML;

    item[1].innerHTML = `<p id="under-pre-form"> Ant ${id} : `;


    const form = CreateFormForAntsList(potentialTasks);
    item[1].appendChild(form);

    item[0].classList.add("over");
    item[1].classList.add("under");


    antsList.appendChild(item[0]);
    antsList.appendChild(item[1]);
}