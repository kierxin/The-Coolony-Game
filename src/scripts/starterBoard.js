export function StarterBoard() {

    // template for new starterBoard available in templates.js

    const starterBoard1 = [
        ["-", "T", "-", "-", "-", "-", "-", "-", "C", "-"],
        ["O", "T", "T", "T", "T", "T", "T", "T", "T", "-"],
        ["-", "T", "-", "-", "-", "OH", "-", "-", "T", "CH"],
        ["-", "T", "-", "T", "-", "-", "N", "N", "T", "-"],
        ["-", "F", "T", "T", "T", "T", "N", "N", "-", "-"],
        ["-", "F", "-", "-", "E", "-", "-", "-", "-", "-"]
    ];

    const starterBoard2 = [
        ["-", "-", "-", "-", "O", "-", "T", "-", "-", "-"],
        ["-", "T", "T", "T", "T", "T", "T", "T", "-", "CH"],
        ["-", "-", "N", "N", "T", "-", "-", "T", "-", "OH"],
        ["-", "T", "N", "N", "-", "-", "C", "T", "-", "-"],
        ["-", "T", "-", "T", "-", "-", "-", "T", "T", "T"],
        ["F", "F", "-", "-", "-", "-", "-", "-", "-", "E"]
    ];

    const starterBoard3 = [
        ["-", "-", "-", "-", "-", "-", "-", "-", "-", "T"],
        ["O", "T", "-", "-", "-", "T", "C", "T", "T", "T"],
        ["-", "T", "T", "-", "CH", "-", "T", "T", "T", "-"],
        ["-", "T", "-", "-", "-", "-", "T", "-", "F", "F"],
        ["-", "N", "N", "T", "T", "T", "T", "T", "-", "-"],
        ["-", "N", "N", "E", "-", "-", "-", "OH", "-", "-"]
    ];

    const potentialStarterBoards = [starterBoard1, starterBoard2, starterBoard3];

    // choose 1 of the 3 available starter boards:
    const randomized = () => {
        return Math.floor(Math.random() * 3);
    }

    return potentialStarterBoards[randomized()];
}