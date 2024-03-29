import './styles/index.css'
import {createCard, deleteCard, likeCard} from './components/card.js'
import {openModal, closeModal} from './components/modal.js';
import {enableValidation, clearValidation} from './components/validation.js';
import {baseInfo, setUserInfo, addCard, updateAvatar} from './components/api.js';

const content = document.querySelector('.content');
const placesSection = content.querySelector('.places');
const placeList = placesSection.querySelector('.places__list');
const profileAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditAvatar = document.querySelector('.popup_type_update_avatar');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupImageСaption = popupTypeImage.querySelector('.popup__caption');
const formEditProfile = document.querySelector('.popup__form')
const popupAddCard = document.querySelector('.popup_type_new-card');
const newCardName = popupAddCard.querySelector('.popup__input_type_card-name');
const newCardLink = popupAddCard.querySelector('.popup__input_type_url');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileImage = document.querySelector('.profile__image');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formClass = document.forms['edit-profile'];
const formCard = document.forms['new-place'];
const formAvatar = document.forms['update-avatar'];
const buttonFormProfile = formClass.querySelector('.popup__button');
const buttonFormCard = formCard.querySelector('.popup__button');
const buttonFormAvatar = formAvatar.querySelector('.popup__button');
const newProfileAvatarUrl = formAvatar.querySelector('.popup__input_type_url');
const userID = {_id:''};

const enableValidationList = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input_type_error_active'
};

function submitEditProfileForm(evt) {
    evt.preventDefault();
    const newProfileTitle = nameInput.value;
    const newProfileDescription = jobInput.value;
    changeButtonText(buttonFormProfile)

    setUserInfo(newProfileTitle, newProfileDescription)
        .then((res) => {
            profileTitle.textContent = res.name;
            profileDescription.textContent = res.about;
            closeModal(popupEdit);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => changeButtonText(buttonFormProfile))
}
formEditProfile.addEventListener('submit', submitEditProfileForm); 

function editeAvatar(evt) {
    evt.preventDefault();
    const newAvatar = newProfileAvatarUrl.value
    changeButtonText(buttonFormAvatar)
 
    updateAvatar(newAvatar)
        .then(() => {
            profileImage.style.backgroundImage = `url('${newAvatar}')`;
            closeModal(popupEditAvatar)
            formAvatar.reset()
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => changeButtonText(buttonFormAvatar))
}
formAvatar.addEventListener('submit', editeAvatar)

function renderCard (item, user) {
    placeList.prepend(createCard(item, clickImage, user, deleteCard, likeCard));
}

//Блок обработки кнопок
profileAddButton.addEventListener('click', () => {
    clearValidation(formCard, enableValidationList);
    openModal(popupAddCard);
})

profileEditButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    clearValidation(formClass ,enableValidationList)
    openModal(popupEdit);
});

profileImage.addEventListener('click', () => openModal(popupEditAvatar));

function changeButtonText(button) {
    switch (button.textContent) {
      case "Сохранение...":
        setTimeout(() => {
            button.textContent = "Сохранить";
        }, 500);
        break;
      default:
        button.textContent = "Сохранение...";
    }
}

function clickImage(evt){
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupImageСaption.textContent = evt.target.alt;
    openModal(popupTypeImage);
};

// Добавление новой карточки
function addNewCardSubmit(evt) {
    evt.preventDefault();
    changeButtonText(buttonFormCard)
    const nameNewCard = newCardName.value;
    const nameNewLink = newCardLink.value;
    const card = {
        name: nameNewCard,
        link: nameNewLink
    }

    addCard(card)
        .then((card) =>{
            renderCard(card, userID);
            closeModal(popupAddCard);
            formCard.reset();
        })
        .catch((err) => {
            console.log(err);})
        .finally(() => changeButtonText(buttonFormCard))
}

baseInfo()
    .then(([user, cards]) =>{
        userID._id = user._id
        profileTitle.textContent = user.name;
        profileDescription.textContent = user.about;
        profileImage.style.backgroundImage = `url(${user.avatar})`;
        cards.reverse().forEach((item) => renderCard(item, user))
    })
    .catch((err) => {
        console.log(err);
    })

popupAddCard.addEventListener('submit', addNewCardSubmit); 
enableValidation(enableValidationList)
