const profileTemplate = document.querySelector('#card-template').content;

function createCard(card, callback, likeCard, clickImage) {
    const cardElement = getCardTemplate()
    const delButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const cardImage = cardElement.querySelector('.card__image');
        
    cardElement.querySelector('.card__title').textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = `Фото ${card.name}`;

    delButton.addEventListener('click', callback);
    likeButton.addEventListener('click', likeCard);
    cardImage.addEventListener('click', clickImage);
    // likeButton.addEventListener('click', () => {
    //     const liked = likeButton.classList.toggle('card__like-button_is-active');
    // });
    return cardElement;
}

function getCardTemplate(){
    const cardClone = profileTemplate.querySelector('.places__item').cloneNode(true);
    return cardClone;
}

function deleteCard(cardElement){
    const card = cardElement.target.closest('.places__item');
    card.remove();
}

function likeToggle(cardElement){
    const like = cardElement.target.closest('.card__like-button');
    like.classList.toggle('card__like-button_is-active');
}

export {createCard, deleteCard, likeToggle}