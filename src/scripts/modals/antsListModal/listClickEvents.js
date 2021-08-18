export function ListClickEvents () {

    const over = document.querySelectorAll(".over");
    const under = document.querySelectorAll(".under");


    for (let i = 0; i < over.length; i++) {
        over[i].addEventListener("click", overListener);

        function overListener() {
            
            if (under[i].getAttribute("display") === "block") {
                under[i].style.display = "none";
                under[i].setAttribute("display", "none");
            } else {
                under[i].style.display = "block";
                under[i].setAttribute("display", "block");
                console.log(under[i].getAttribute("display"));
            }

            under[i].style.opacity = 1;
            under[i].style.pointerEvents = "auto";
        }
    }

}