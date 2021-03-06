export function CreateFormForAntsList (potentialTasks) {

    const form = document.createElement("form");
    form.id = "assign-task-form";

    const select = document.createElement("select");
    select.setAttribute("form", "assign-task-form");
    select.setAttribute("onchange", 'form.name = `${this.value}`');
    const formLabel = document.createElement("label");
    formLabel.setAttribute("for", "assign-task-form");
    formLabel.innerText = "Task: ";


    const defaultVal = document.createElement("option");
    defaultVal.setAttribute("value", "task location");
    defaultVal.setAttribute("disabled", "disabled");
    defaultVal.setAttribute("selected", "selected");
    defaultVal.setAttribute("hidden", "hidden");
    select.appendChild(defaultVal);


    potentialTasks.forEach(task => {
        const opt = document.createElement("option");
        const coords = task[0];

        if (task[1] === "excavate") {
            opt.setAttribute("value", `${coords}`);
            opt.innerHTML = `[${coords}]: excavate`;
        } else {
            opt.setAttribute("value", `${coords}`);
            opt.innerHTML = `[${coords}]: ${task[1]}`;
        }
        
        select.appendChild(opt);
    })

    form.appendChild(formLabel);
    form.appendChild(select);

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Assign");

    form.appendChild(submit);

    return form;
}