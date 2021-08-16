export function StarterBoard() {

    // tunnel template for new starterBoard is available in templates.js

    const starterBoard1 = [[["-"], ["above"], ["-"], ["-"], ["-"], ["-"], ["quartz", "hidden"], ["-"], ["-"], ["-"]], [["-"], ["tunnel"], ["-"], ["-"], ["tunnel"], ["-"], ["-"], ["-"], ["-"], ["beetle", "hidden"]], [["tunnel"], ["tunnel"], ["-"], ["tunnel"], ["sleep"], ["-"], ["-"], ["clay", "hidden"], ["-"], ["-"]], [["-"], ["clay"], ["tunnel"], ["tunnel"], ["tunnel"], ["-"], ["-"], ["-"], ["tunnel"], ["-"]], [["-"], ["-"], ["-"], ["tunnel"], ["clay"], ["tunnel"], ["tunnel"], ["tunnel"], ["nurse"], ["tunnel"]], [["-"], ["quartz", "hidden"], ["quartz"], ["eat"], ["-"], ["-"], ["excavate"], ["-"], ["-"], ["tunnel"]]];

    const starterBoard2 = [[["-"], ["-"], ["-"], ["-"], ["-"], ["-"], ["above"], ["-"], ["-"], ["-"]], [["beetle", "hidden"], ["-"], ["tunnel"], ["sleep"], ["tunnel"], ["tunnel"], ["tunnel"], ["tunnel"], ["tunnel"], ["tunnel"]], [["-"], ["-"], ["-"], ["tunnel"], ["clay"], ["-"], ["tunnel"], ["-"], ["-"], ["clay"]], [["-"], ["tunnel"], ["nurse"], ["tunnel"], ["-"], ["-"], ["-"], ["-"], ["tunnel"], ["tunnel"]], [["-"], ["tunnel"], ["-"], ["-"], ["quartz", "hidden"], ["-"], ["-"], ["-"], ["quartz"], ["-"]], [["eat"], ["tunnel"], ["-"], ["-"], ["-"], ["clay", "hidden"], ["quartz", "hidden"], ["excavate"], ["-"], ["-"]]];

    const starterBoard3 = [[["-"], ["-"], ["-"], ["-"], ["-"], ["-"], ["-"], ["clay"], ["-"], ["above"]], [["-"], ["-"], ["-"], ["quartz", "hidden"], ["-"], ["-"], ["-"], ["tunnel"], ["tunnel"], ["tunnel"]], [["sleep"], ["-"], ["-"], ["-"], ["-"], ["tunnel"], ["tunnel"], ["tunnel"], ["tunnel"], ["-"]], [["tunnel"], ["-"], ["-"], ["tunnel"], ["clay"], ["tunnel"], ["clay", "hidden"], ["-"], ["tunnel"], ["eat"]], [["tunnel"], ["nurse"], ["tunnel"], ["tunnel"], ["-"], ["tunnel"], ["-"], ["-"], ["-"], ["-"]], [["-"], ["quartz", "hidden"], ["-"], ["excavate"], ["-"], ["quartz"], ["-"], ["-"], ["-"], ["beetle", "hidden"]]];
    

    const potentialStarterBoards = [starterBoard1, starterBoard2, starterBoard3];

    // choose 1 of tunnel the 3 available starter boards:
    const randomized = () => {
        return Math.floor(Math.random() * 3);
    }


    return potentialStarterBoards[randomized()];
}