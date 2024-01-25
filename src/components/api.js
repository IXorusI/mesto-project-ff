const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-4',
    headers: {
        authorization: '380cee77-80fa-423f-851d-9cb0bfb4076a',
        'Content-Type': 'application/json'
      }
}

const checkStatus = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`)
    }
}

const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    })
    .then(res => checkStatus(res))   
}

const getCardsInfo = () => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })
    .then(res => checkStatus(res))
}

const baseInfo = () => {
    return Promise.all([getUserInfo(), getCardsInfo()])
}

const setUserInfo = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
    .then(res => checkStatus(res))
}

const addCard = (card) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: card.name,
            link: card.link
        })
    })
    .then(res => checkStatus(res))
}

const deleteCards = (cardID) => {
    return fetch(`${config.baseUrl}/cards/${cardID}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then(res => checkStatus(res))
}

const addLike = (cardID) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
        method: 'PUT',
        headers: config.headers
    })
    .then(res => checkStatus(res))
}

const removeLike = (cardID) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
        method: 'DELETE',
        headers: config.headers
    })
    .then(res => checkStatus(res))
}

const updateAvatar = (avatarUrl) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: avatarUrl,
        })
    })
    .then(res => checkStatus(res))
}

export {getUserInfo, getCardsInfo, baseInfo, setUserInfo, addCard, deleteCards, addLike, removeLike, updateAvatar}