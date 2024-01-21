function openModal(popup) {
    const closeButton = popup.querySelector('.popup__close');
    popup.classList.add('popup_is-opened');
    closeButton.addEventListener('click', сloseButtonClick);
    document.addEventListener('keydown', closeByEsc);
    document.addEventListener('mousedown', closeByOverlayClick);
}
  
function closeModal(popup) {
    const closeButton = popup.querySelector('.popup__close');
    popup.classList.remove('popup_is-opened');
    closeButton.removeEventListener('click', сloseButtonClick);
    document.removeEventListener('keydown', closeByEsc);
    document.removeEventListener('mousedown', closeByOverlayClick);
}
  
function сloseButtonClick() {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
        closeModal(openedPopup);
    }
}

function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_is-opened');
        closeModal(popup);
    }
}
  
function closeByOverlayClick(evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
        closeModal(evt.target);
    }
}

export {openModal, closeModal};