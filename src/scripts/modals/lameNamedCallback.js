export function LameNamedCallback (item, board) {
    item[0].classList.add("over");
    item[0].addEventListener("click", () => {
        if (item[0].classList.contains("underneath")) {
            console.log("underneath");
            item[0].classList.add("over");
            item[0].classList.remove("underneath");
        } else {
            console.log("over");
            item[0].classList.add("underneath");
            item[0].classList.remove("over");
        }
    });


    console.log(item[0]);


    // INSERT FORM !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // const id = item[0].children[0].children[0].innerHTML;
    // const pos = item[0].children[1].children[0].innerHTML;
    // const status = item[0].children[2].children[0].innerHTML;
    // console.log(item[1]);
    // item[1].innerHTML = `Ant ${id} at [${pos.split(",").join(", ")}]: ${status}    Assign Task: `;

    // const form = document.createElement("select");
    // form.id = "assign-task-form";
    // const options = []
    // item[1].appendChild(form);
    // INSERT FORM !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    antsList.appendChild(item[0]);
    antsList.appendChild(item[1]);
}