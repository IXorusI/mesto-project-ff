import {deleteCards, addLike, removeLike} from './api.js';

const profileTemplate = document.querySelector('#card-template').content;

function createCard(card, clickImage, user) {
    const cardElement = getCardTemplate()
    const delButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const cardImage = cardElement.querySelector('.card__image');
    const cardLikeCount = cardElement.querySelector('.card__like-count')

    function updateLike() {
        if (card.likes.some(like => like._id === user._id)) {
            likeButton.classList.add('card__like-button_is-active');
        } else {
            likeButton.classList.remove('card__like-button_is-active');
        }
    }
    updateLike()
        
    cardElement.querySelector('.card__title').textContent = card.name;
    cardImage.src = card.link;
    cardImage.alt = `Фото ${card.name}`;
    cardLikeCount.textContent = card.likes.length

    cardImage.addEventListener('click', clickImage);
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('card__like-button_is-active');
        if (likeButton.classList.contains('card__like-button_is-active')){
            addLike(card._id)
                .then(data => {
                    card.likes = data.likes
                    cardLikeCount.textContent = data.likes.length
                    updateLike()
                })
        } else {
            removeLike(card._id)
                .then(data => {
                    card.likes = data.likes
                    cardLikeCount.textContent = data.likes.length
                    updateLike()
                })
        }
    });

    if(card.owner._id === user._id){
        delButton.addEventListener('click', () => {
            deleteCards(card._id)
        })
    } else {
        delButton.style.display = 'none';
    }
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

export {createCard, deleteCard}