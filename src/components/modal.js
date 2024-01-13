function showPopup(popup) {
    const closeButton = popup.querySelector('.popup__close');
    popup.classList.add('popup_is-opened');
    closeButton.addEventListener('click', сloseButtonClick);
    document.addEventListener('keydown', keyEsc);
    document.addEventListener('mousedown', mouseClick);
}
  
function closePopup(popup) {
    const closeButton = popup.querySelector('.popup__close');
    popup.classList.remove('popup_is-opened');
    closeButton.removeEventListener('click', сloseButtonClick);
    document.removeEventListener('keydown', keyEsc);
    document.removeEventListener('mousedown', mouseClick);
}
  
function сloseButtonClick() {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
        closePopup(openedPopup);
    }
}

function keyEsc(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_is-opened');
        closePopup(popup);
    }
}
  
function mouseClick(evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
        closePopup(evt.target);
    }
}
  
export {showPopup, closePopup};