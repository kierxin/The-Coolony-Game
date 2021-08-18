export function CreateFormForAntsList (potentialTasks) {

    const form = document.createElement("select");
    form.id = "assign-task-form";

    const formLabel = document.createElement("label");
    formLabel.setAttribute("for", "assign-task-form");

    potentialTasks.forEach((task, i) => {
        const opt = document.createElement("option");
        opt.setAttribute("value", `${task[0]}`);
        opt.setAttribute("text", `[${task[0]}]: ${task[1]}`);
        formLabel.appendChild(opt);
    })

    form.appendChild(formLabel);

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");

    form.appendChild(submit);

    return form;
}