export function AntsListAssignTask() {

    

    let test = document.querySelector("select");
    let test2 = document.querySelector("input");
    let test3 = document.querySelector("form");
    let test4 = document.querySelector("form").getAttribute("name");

    console.log(test);
    console.log(test2);
    console.log(test3);
    console.log(test4);

    console.log(test.selectedIndex);

    test2.addEventListener("click", () => {
        console.log(test3);
        console.log(test3.name);
    })


}

