import './styles/index.css'
const content = document.querySelector('.content');
const placesSection = content.querySelector('.places');
const placeList = placesSection.querySelector('.places__list');
const places = Array.from(initialCards);
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

function handleDeleteCard(event) {
    const card = event.target.closest('.places__item');
    card.remove();
}

function renderCard (item) {
    placeList.prepend(createCard(item, handleDeleteCard));
}

places.forEach((item) => renderCard(item))

