export function ListClickEvents () {

    const overs = document.querySelectorAll(".over");
    const unders = document.querySelectorAll(".under");

    for (let i = 0; i < overs.length; i++) {
        if (!unders[i].hasAttribute("event-added")) {
            unders[i].setAttribute("event-added", "true");

            overs[i].addEventListener("click", overListener);
        }

        function overListener() {
            console.log("click");

            if (unders[i].getAttribute("display") === "block") {
                unders[i].style.display = "none";
                unders[i].setAttribute("display", "none");
            } else {
                unders[i].style.display = "block";
                unders[i].setAttribute("display", "block");
            }

            unders[i].style.opacity = 1;
            unders[i].style.pointerEvents = "auto";
        }
    }

}