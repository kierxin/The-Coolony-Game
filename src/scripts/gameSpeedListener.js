export function GameSpeedListener() {

    const slowButton = document.getElementById("slow-btn");
    const fastButton = document.getElementById("fast-btn");
    const gameSpeedWindow = document.querySelector(".game-speed");

    slowButton.addEventListener("click", () => {
        gameSpeedWindow.style.display = "none";
        return 2;
    });

    fastButton.addEventListener("click", () => {
        gameSpeedWindow.style.display = "none";
        return .5;
    });
}