export function ActivateModals () {


    // RESOURCE SUMMARY
    const resourceSummaryModal = document.getElementById("resource-summary-modal");
    const resourceSummaryModalContent = document.getElementById("resource-summary-modal-content");
    const resource = [resourceSummaryModal, resourceSummaryModalContent];

    // ANTS LIST
    const antsListModal = document.getElementById("ants-list-modal");
    const antsListModalContent = document.getElementById("ants-list-modal-content");
    const ants = [antsListModal, antsListModalContent];

    // GAME STATS
    const gameStatsModal = document.getElementById("game-stats-modal");
    const gameStatsModalContent = document.getElementById("game-stats-modal-content");
    const stats = [gameStatsModal, gameStatsModalContent];



    // ICONS FOR EACH
    const resIcon = document.querySelector('[title="resource summary"]');
    const antsIcon = document.querySelector('[title="ants list"]');
    const statsIcon = document.querySelector('[title="game stats"]');



    // LISTENERS FOR EACH
    resIcon.addEventListener('click', toggleResourcesModal.bind(resource));
    antsIcon.addEventListener('click', toggleAntsModal.bind(ants));
    statsIcon.addEventListener('click', toggleStatsModal.bind(stats));

}


function toggleResourcesModal() {
    if (!this[0].classList.contains("resource-summary-modal")) {
        this[0].classList.add("resource-summary-modal");
        this[1].classList.add("resource-summary-modal-content");
    } else {
        this[0].classList.remove("resource-summary-modal");
        this[1].classList.remove("resource-summary-modal-content");
    }
}

function toggleAntsModal() {

    if (!this[0].classList.contains("ants-list-modal")) {
        this[0].classList.add("ants-list-modal");
        this[1].classList.add("ants-list-modal-content");
    } else {
        this[0].classList.remove("ants-list-modal");
        this[1].classList.remove("ants-list-modal-content");
    }
    
}

function toggleStatsModal() {

    if (!this[0].classList.contains("game-stats-modal")) {
        this[0].classList.add("game-stats-modal");
        this[1].classList.add("game-stats-modal-content");
    } else {
        this[0].classList.remove("game-stats-modal");
        this[1].classList.remove("game-stats-modal-content");
    }

}



// function toggleModal(node, child, modal) {

//     if (node.classList.contains(`${modal}`)) {
//         console.log('contains');
//         node.classList.remove(`${modal}`);
//         child.classList.remove(`${modal}-content`);
//     } else {
//         console.log("doesn't contain");
//         node.classList.add(`${modal}`);
//         child.classList.add(`${modal}-content`);
//     }

// }