(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(e){e.target.closest(".places__item").remove()}function n(e){e.target.closest(".card__like-button").classList.toggle("card__like-button_is-active")}function o(e){var t=e.querySelector(".popup__close");e.classList.add("popup_is-opened"),t.addEventListener("click",c),document.addEventListener("keydown",p),document.addEventListener("mousedown",u)}function r(e){var t=e.querySelector(".popup__close");e.classList.remove("popup_is-opened"),t.removeEventListener("click",c),document.removeEventListener("keydown",p),document.removeEventListener("mousedown",u)}function c(){var e=document.querySelector(".popup_is-opened");e&&r(e)}function p(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}function u(e){e.target.classList.contains("popup_is-opened")&&r(e.target)}var d=document.querySelector(".content").querySelector(".places").querySelector(".places__list"),a=Array.from([{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}]),l=document.querySelector(".profile__add-button"),s=document.querySelector(".profile__edit-button"),i=document.querySelector(".popup_type_edit"),_=document.querySelector(".popup_type_new-card"),m=document.querySelector(".popup_type_image"),y=m.querySelector(".popup__image"),v=m.querySelector(".popup__caption"),f=document.querySelector(".popup__form"),q=document.querySelector(".popup_type_new-card"),S=q.querySelector(".popup__form"),k=q.querySelector(".popup__input_type_card-name"),g=q.querySelector(".popup__input_type_url"),L=document.querySelector(".popup__input_type_name"),E=document.querySelector(".popup__input_type_description"),x=(document.querySelector(".profile__image"),document.querySelector(".profile__title")),b=document.querySelector(".profile__description");function h(o){d.prepend(function(t,n,o,r){var c=e.querySelector(".places__item").cloneNode(!0),p=c.querySelector(".card__delete-button"),u=c.querySelector(".card__like-button"),d=c.querySelector(".card__image");return c.querySelector(".card__title").textContent=t.name,d.src=t.link,d.alt="Фото ".concat(t.name),p.addEventListener("click",n),u.addEventListener("click",o),d.addEventListener("click",r),c}(o,t,n,j))}function j(e){y.src=e.target.src,y.alt=e.target.alt,v.textContent=e.target.alt,o(m)}document.querySelector(".popup__close"),f.addEventListener("submit",(function(e){e.preventDefault(),x.textContent=L.value,b.textContent=E.value,r(i)})),a.forEach((function(e){return h(e)})),l.addEventListener("click",(function(){o(_)})),s.addEventListener("click",(function(){L.value=x.textContent,E.value=b.textContent,o(i)})),q.addEventListener("submit",(function(e){e.preventDefault(),h({name:k.value,link:g.value}),r(q),S.reset()}))})();