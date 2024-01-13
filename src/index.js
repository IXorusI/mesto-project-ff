import './styles/index.css'
import {initialCards} from './cards.js'
import {createCard, deleteCard} from './components/card.js'
import {showPopup, closePopup} from './components/modal.js';
const content = document.querySelector('.content');
const placesSection = content.querySelector('.places');
const placeList = placesSection.querySelector('.places__list');
const places = Array.from(initialCards);

const profileAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const formElement = document.querySelector('.popup__form')
const addCard = document.querySelector('.popup_type_new-card');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileImage = document.querySelector('.profile__image');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupCloseButtons = document.querySelector('.popup__close');

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit); 

// Блок предзагруженных карточек
function handleDeleteCard(event) {
    const card = event.target.closest('.places__item');
    card.remove();
}

function renderCard (item) {
    placeList.prepend(createCard(item, handleDeleteCard));
}

places.forEach((item) => renderCard(item))


//Блок обработки кнопок
profileAddButton.addEventListener('click', () => {
    showPopup(popupNewCard);
})

profileEditButton.addEventListener('click', () => {
    showPopup(popupEdit);
});


// Добавление новой карточки
function addNewCardSubmit(evt) {
    evt.preventDefault();
    const nameNewCard = addCard.querySelector('.popup__input_type_card-name').value;
    const nameNewLink = addCard.querySelector('.popup__input_type_url').value;
    
    const card = {
        name: nameNewCard,
        link: nameNewLink
    }
    
    renderCard (card);
    closePopup (addCard);
}
addCard.addEventListener('submit', addNewCardSubmit); 