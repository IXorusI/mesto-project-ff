import './styles/index.css'
import {initialCards} from './cards.js'
import {createCard} from './components/card.js'
const content = document.querySelector('.content');
const placesSection = content.querySelector('.places');
const placeList = placesSection.querySelector('.places__list');
const places = Array.from(initialCards);
const profileTemplate = document.querySelector('#card-template').content;


function handleDeleteCard(event) {
    const card = event.target.closest('.places__item');
    card.remove();
}

function renderCard (item) {
    placeList.prepend(createCard(item, handleDeleteCard));
}

places.forEach((item) => renderCard(item))

