function openModalWindow(slectorModal, modalTimer) {
    const modalWindow = document.querySelector(slectorModal);
    modalWindow.style.display = "block";
    document.body.style.overflow = "hidden";
    if (modalTimer) {
        clearInterval(modalTimer);
    }
}

function closeModalWindow(slectorModal) {
    const modalWindow = document.querySelector(slectorModal);
    modalWindow.style.display = "none";
    document.body.style.overflow = "";
}

function modal(selectorBtnModal, slectorModal, modalTimer) {
    const btnModal = document.querySelectorAll(selectorBtnModal),
        modalWindow = document.querySelector(slectorModal);

    btnModal.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            openModalWindow(slectorModal, modalTimer);
        });
    });

    modalWindow.addEventListener("click", (e) => {
        if (e.target === modalWindow || e.target.getAttribute("data-close") == "") {
            closeModalWindow(slectorModal);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && window.getComputedStyle(modalWindow).display === "block")
            closeModalWindow(slectorModal);
    });
    console.log(checkOpenModal);

    function scrollByOpenModel() {
        if (!checkOpenModal) {
            if (document.documentElement.clientHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
                openModalWindow(slectorModal, modalTimer);
                window.removeEventListener("scroll", scrollByOpenModel);
            }
        }
    }
    window.addEventListener("scroll", scrollByOpenModel);
}
export default modal;
export { closeModalWindow };
export { openModalWindow };
