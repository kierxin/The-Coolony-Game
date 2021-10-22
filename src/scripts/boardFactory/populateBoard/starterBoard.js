export function StarterBoard() {

    // the template for new starterBoard is available in template.js

    const starterBoard1 = [[["-"], ["food"], ["wood"], ["-"], ["-"], ["-"], ["quartz", "hidden"], ["-"], ["-"], ["-"]], [["-"], ["tunnel"], ["-"], ["-"], ["tunnel"], ["-"], ["-"], ["-"], ["-"], ["beetle", "hidden"]], [["tunnel"], ["tunnel"], ["-"], ["-"], ["sleep"], ["tunnel"], ["-"], ["clay", "hidden"], ["-"], ["-"]], [["-"], ["clay"], ["tunnel"], ["tunnel"], ["tunnel"], ["-"], ["-"], ["-"], ["tunnel"], ["-"]], [["-"], ["-"], ["-"], ["tunnel"], ["clay"], ["tunnel"], ["tunnel"], ["tunnel"], ["nurse"], ["tunnel"]], [["-"], ["quartz", "hidden"], ["quartz"], ["eat"], ["-"], ["-"], ["gold", "excavate"], ["-"], ["-"], ["tunnel"]]];

    const starterBoard2 = [[["-"], ["-"], ["-"], ["-"], ["-"], ["food"], ["wood"], ["-"], ["-"], ["-"]], [["beetle", "hidden"], ["-"], ["-"], ["sleep"], ["tunnel"], ["tunnel"], ["tunnel"], ["tunnel"], ["tunnel"], ["tunnel"]], [["-"], ["-"], ["-"], ["tunnel"], ["clay"], ["tunnel"], ["-"], ["-"], ["-"], ["clay"]], [["-"], ["tunnel"], ["nurse"], ["tunnel"], ["-"], ["-"], ["-"], ["tunnel"], ["tunnel"], ["tunnel"]], [["-"], ["tunnel"], ["-"], ["-"], ["quartz", "hidden"], ["-"], ["-"], ["tunnel"], ["quartz"], ["-"]], [["-"], ["eat"], ["-"], ["-"], ["-"], ["clay", "hidden"], ["quartz", "hidden"], ["gold", "excavate"], ["-"], ["-"]]];

    const starterBoard3 = [[["-"], ["-"], ["-"], ["-"], ["-"], ["-"], ["-"], ["-"], ["food"], ["wood"]], [["-"], ["-"], ["-"], ["quartz", "hidden"], ["-"], ["-"], ["-"], ["tunnel"], ["tunnel"], ["tunnel"]], [["sleep"], ["-"], ["-"], ["-"], ["clay"], ["tunnel"], ["tunnel"], ["tunnel"], ["tunnel"], ["-"]], [["tunnel"], ["-"], ["-"], ["tunnel"], ["clay"], ["tunnel"], ["clay", "hidden"], ["-"], ["tunnel"], ["eat"]], [["tunnel"], ["nurse"], ["tunnel"], ["tunnel"], ["-"], ["tunnel"], ["-"], ["-"], ["-"], ["-"]], [["-"], ["quartz", "hidden"], ["-"], ["gold", "excavate"], ["-"], ["quartz"], ["-"], ["-"], ["-"], ["beetle", "hidden"]]];
    

    const potentialStarterBoards = [starterBoard1, starterBoard2, starterBoard3];

    // choose 1 of the 3 available starter boards:
    const randomized = () => {
        return Math.floor(Math.random() * 3);
    }

    return potentialStarterBoards[randomized()];
}