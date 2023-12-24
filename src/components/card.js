import { cardTemplate, openpopupImage } from '../index.js';
const profileTemplate = document.querySelector('#card-template').content;

function createCard(card, callback) {
    const cardElement = profileTemplate.querySelector('.places__item').cloneNode(true);
    const delButton = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = `Фото ${card.name}`;

    delButton.addEventListener('click', callback);
    
    return cardElement;
}

function deleteCard(cardElement){
    cardElement.remove()
}


export {createCard, deleteCard}