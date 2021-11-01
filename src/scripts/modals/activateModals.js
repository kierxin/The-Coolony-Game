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
        this[0].classList.remove("ensure-display-none-if-model-inactive");
        this[1].classList.remove("ensure-display-none-if-model-inactive");
    } else {
        this[0].classList.remove("resource-summary-modal");
        this[1].classList.remove("resource-summary-modal-content");
        this[0].classList.add("ensure-display-none-if-model-inactive");
        this[1].classList.add("ensure-display-none-if-model-inactive");
    }
}

function toggleAntsModal() {

    if (!this[0].classList.contains("ants-list-modal")) {
        this[0].classList.add("ants-list-modal");
        this[1].classList.add("ants-list-modal-content");
        this[0].classList.remove("ensure-display-none-if-model-inactive");
        this[1].classList.remove("ensure-display-none-if-model-inactive");
    } else {
        this[0].classList.remove("ants-list-modal");
        this[1].classList.remove("ants-list-modal-content");
        this[0].classList.add("ensure-display-none-if-model-inactive");
        this[1].classList.add("ensure-display-none-if-model-inactive");
    }

}

function toggleStatsModal() {

    if (!this[0].classList.contains("game-stats-modal")) {
        this[0].classList.add("game-stats-modal");
        this[1].classList.add("game-stats-modal-content");
        this[0].classList.remove("ensure-display-none-if-model-inactive");
        this[1].classList.remove("ensure-display-none-if-model-inactive");
    } else {
        this[0].classList.remove("game-stats-modal");
        this[1].classList.remove("game-stats-modal-content");
        this[0].classList.add("ensure-display-none-if-model-inactive");
        this[1].classList.add("ensure-display-none-if-model-inactive");
    }

}



// function toggleModal(arg, modal, modalType) {

//     if (node.classList.contains(`${modal}`)) {
        // arg[0].classList.add(`${modalType}`);
        // arg[1].classList.add(`${modalType}-content`);
        // arg[0].classList.remove(`ensure-display-none-if-model-inactive`);
        // arg[1].classList.remove(`ensure-display-none-if-model-inactive`);
//     } else {
        // arg[0].classList.remove(`${modalType}`);
        // arg[1].classList.remove(`${modalType}-content`);
        // arg[0].classList.add(`ensure-display-none-if-model-inactive`);
        // arg[1].classList.add(`ensure-display-none-if-model-inactive`);
//     }

// }