export function CreateFormForAntsList (potentialTasks) {

    const form = document.createElement("form");
    form.id = "assign-task-form";

    const select = document.createElement("select");
    select.setAttribute("form", "assign-task-form");
    select.setAttribute("onchange", 'form.name = `${this.value}`');
    const formLabel = document.createElement("label");
    formLabel.setAttribute("for", "assign-task-form");
    formLabel.innerText = "Assign Task: ";

    potentialTasks.forEach(task => {
        const opt = document.createElement("option");
        opt.setAttribute("value", `${task[0]}`);
        opt.innerHTML = `[${task[0]}]: ${task[1]}`;
        
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