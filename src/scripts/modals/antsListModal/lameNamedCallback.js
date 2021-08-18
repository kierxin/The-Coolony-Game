import { CreateFormForAntsList } from "./createFormForAntsList";

const { reateFormForAntsList } = "./createFormForAntsList.js";


export function LameNamedCallback (item, board) {

    const antsList = document.querySelector("#ants-list");

    item[0].classList.add("over");
    item[0].addEventListener("click", () => {
        if (item[0].classList.contains("underneath")) {
            item[0].classList.add("over");
            item[0].classList.remove("underneath");
        } else {
            item[0].classList.add("underneath");
            item[0].classList.remove("over");
        }
    });

    const potentialTasks = [];

    for (const tile in board) {
        if (board[tile].interactive === true && board[tile].visibility === true) {
            const pos = [parseInt(tile[tile.length - 2]), parseInt(tile[tile.length - 1])];
            const task = board[tile].tileType;
            
            potentialTasks.push([pos, task]);
        }
    }

    // CREATE TEXT OF LIST ITEM UNDERNEATH
    const id = item[0].children[0].children[0].innerHTML;
    const pos = item[0].children[1].children[0].innerHTML;
    const status = item[0].children[2].children[0].innerHTML;

    item[1].innerHTML = `Ant ${id} at [${pos.split(",").join(", ")}]: ${status}    Assign Task: `;


    // console.log(CreateFormForAntsList);
    const form = CreateFormForAntsList(potentialTasks);
    

    item[1].appendChild(form);

    console.log(item[1]);

    antsList.appendChild(item[0]);
    antsList.appendChild(item[1]);

}