import {deleteCards, addLike, removeLike} from './api.js';

const profileTemplate = document.querySelector('#card-template').content;

function createCard(card, clickImage, user, deleteCard, likeCard) { 
    const cardElement = getCardTemplate()
    const likeButton = cardElement.querySelector('.card__like-button');
    const delButton = cardElement.querySelector('.card__delete-button');
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
    likeButton.addEventListener('click', (evt) => likeCard(evt, likeButton, card, cardLikeCount))

    if(card.owner._id === user._id){ 
        delButton.addEventListener('click', (evt) => deleteCard(evt, card._id)) 
    } else { 
        delButton.style.display = 'none'; 
    }


    return cardElement;
}

function likeCard(evt, likeButton, card, text){
    const isLiked = evt.target.classList.contains("card__like-button_is-active");
    if (!isLiked){
        addLike(card._id)
            .then(data => {
                card.likes = data.likes
                text.textContent = data.likes.length
                likeButton.classList.add('card__like-button_is-active');
            })
            .catch((err) => console.log(err));

    } else {
        removeLike(card._id)
            .then(data => {
                card.likes = data.likes
                text.textContent = data.likes.length
                likeButton.classList.remove('card__like-button_is-active');
            })
            .catch((err) => console.log(err));
    }
}

function deleteCard(evt, cardID){
    deleteCards(cardID)
        .then(() => {
            evt.target.closest(".card").remove();
        })
        .catch((err) => console.log(err));
}

function getCardTemplate(){
    const cardClone = profileTemplate.querySelector('.places__item').cloneNode(true);
    return cardClone;
}

export {createCard, deleteCard, likeCard}