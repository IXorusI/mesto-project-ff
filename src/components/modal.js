
function openModal(popup) {
    const closeButton = popup.querySelector('.popup__close');
    popup.classList.add('popup_is-opened');
    closeButton.addEventListener('click', сloseButtonClick);
    document.addEventListener('keydown', keyEsc);
    document.addEventListener('mousedown', mouseClick);
}
  
function closeModal(popup) {
    const closeButton = popup.querySelector('.popup__close');
    popup.classList.remove('popup_is-opened');
    closeButton.removeEventListener('click', сloseButtonClick);
    document.removeEventListener('keydown', keyEsc);
    document.removeEventListener('mousedown', mouseClick);
}
  
function сloseButtonClick() {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
        closeModal(openedPopup);
    }
}

function keyEsc(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_is-opened');
        closeModal(popup);
    }
}
  
function mouseClick(evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
        closeModal(evt.target);
    }
}



export {openModal, closeModal};