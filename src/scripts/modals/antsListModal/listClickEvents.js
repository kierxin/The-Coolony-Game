export function ListClickEvents () {

    const over = document.querySelectorAll(".over");
    const under = document.querySelectorAll(".under");

    // console.log(over);
    // console.log(over[0]);
    // console.log(over[1]);
    // console.log(over[2]);
    // console.log(under[0]);
    // console.log(under[1]);
    // console.log(under[2]);

    // over.forEach(el => console.log(el));

    for (let i = 0; i < over.length; i++) {

        // console.log(over[i]);
        // console.log(under)
        over[i].addEventListener("click", overListener);

        function overListener() {
            console.log("hi");
            // console.log(under[i]);
            over[i].removeEventListener("click", overListener);
            under[i].addEventListener("click", underListener);
            over[i].style.opacity = 0;
            over[i].style.pointerEvents = "none";
            under[i].style.opacity = 1;
            under[i].style.pointerEvents = "auto";
        }

        function underListener() {
            console.log("bye");
            under[i].removeEventListener("click", underListener);
            over[i].addEventListener("click", overListener);
            under[i].style.opacity = 0;
            under[i].style.pointerEvents = "none";
            over[i].style.opacity = 1;
            over[i].style.pointerEvents = "auto";
        }
    }

}