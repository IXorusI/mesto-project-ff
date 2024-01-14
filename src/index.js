import './styles/index.css'
import {initialCards} from './cards.js'
import {createCard, deleteCard, likeToggle} from './components/card.js'
import {openModal, closeModal} from './components/modal.js';
const content = document.querySelector('.content');
const placesSection = content.querySelector('.places');
const placeList = placesSection.querySelector('.places__list');
const places = Array.from(initialCards);

const profileAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupImageСaption = popupTypeImage.querySelector('.popup__caption');
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
    closeModal(popupEdit);
}
formElement.addEventListener('submit', handleFormSubmit); 

// Блок предзагруженных карточек
function renderCard (item) {
    placeList.prepend(createCard(item, deleteCard, likeToggle, clickImage));
}

places.forEach((item) => renderCard(item))


//Блок обработки кнопок
profileAddButton.addEventListener('click', () => {
    openModal(popupNewCard);
})

profileEditButton.addEventListener('click', () => {
    openModal(popupEdit);
});

function clickImage(evt){
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupImageСaption.textContent = evt.target.alt;
    openModal(popupTypeImage);
};



// Добавление новой карточки
function addNewCardSubmit(evt) {
    evt.preventDefault();
    const nameNewCard = addCard.querySelector('.popup__input_type_card-name').value;
    const nameNewLink = addCard.querySelector('.popup__input_type_url').value;
    
    const card = {
        name: nameNewCard,
        link: nameNewLink
    }
    
    renderCard(card);
    closeModal(addCard);
}
addCard.addEventListener('submit', addNewCardSubmit); 