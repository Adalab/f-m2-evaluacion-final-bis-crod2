'use strict';

const title = document.querySelector('.page__title');
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.btn');
const list = document.querySelector('.page__cards');

const API = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';

const showCards = () => {
  for (const input of inputs) {
    const inputValue = input.value;
    const inputChecked = input.checked;
    list.innerHTML = '';
    if (inputChecked === true) {
      fetch(`${API}${inputValue}.json`)
        .then(response => response.json())
        .then(data => {
        for (const item of data) {
          const itemFront = document.createElement('li');
          itemFront.classList.add('cards__front');
          const cardFront = document.createElement('img');
          cardFront.classList.add('hidden');
          cardFront.src = item.image;
          const itemBack = document.createElement('li');
          itemBack.classList.add('cards__back');
          const cardBack = document.createElement('img');
          cardBack.src = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB'
          list.appendChild(itemFront);
          itemFront.appendChild(cardFront);
          list.appendChild(itemBack);
          itemBack.appendChild(cardBack);
        }
      })
    }
  }
}

button.addEventListener('click', showCards);
