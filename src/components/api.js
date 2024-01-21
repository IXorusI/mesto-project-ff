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

export const getUserInfo => {
    return fetch(`${prop.baseUrl}/users/me`, {
        method: 'POST',
        headers: config.headers
    })
    .then(res => checkStatus(res))
}

export const getCardsInfo => {
    return fetch(`${prop.baseUrl}/cards `, {
        method: 'POST',
        headers: config.headers
    })
    .then(res => checkStatus(res))
}