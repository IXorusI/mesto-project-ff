const content = document.querySelector('.content');
const placesSection = content.querySelector('.places');
const placeList = placesSection.querySelector('.places__list');
const places = Array.from(initialCards);
// @todo: Темплейт карточки
const profileTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
// @todo: Функция создания карточки
function addCard(name, link) {
    const cardElement = profileTemplate.querySelector('.places__item').cloneNode(true);
    const delButton = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__title').textContent = name;
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__image').alt = `Фото ${name}`;

    delButton.addEventListener('click', delCard);
    
    placeList.append(cardElement);
}

// @todo: Функция удаления карточки
function delCard(event) {
    const card = event.target.closest('.places__item');
    //placeList.remove(cardElement);
    card.remove();
}

// @todo: Вывести карточки на страницу
places.forEach((item) => addCard(item.name, item.link))