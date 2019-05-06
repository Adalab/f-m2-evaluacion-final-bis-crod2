'use strict';

const title = document.querySelector('.page__title');
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.btn');
const list = document.querySelector('.page__cards');
let value;
const API = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
let selectedCards = [];

const changeCards = event => {
  const frontCards = event.currentTarget.querySelector('.front__container');
  const backCards = event.currentTarget.querySelector('.back__container');
  if (frontCards.classList.contains('hidden') === true) {
  frontCards.classList.remove('hidden');
  backCards.classList.add('hidden');
  }
}

const showCards = () => {
  for (const input of inputs) {
    const inputValue = input.value;
    const inputChecked = input.checked;
    list.innerHTML = '';
    if (inputChecked === true) {
      value = inputValue;
    }
  }
  fetch(`${API}${value}.json`)
    .then(response => response.json())
    .then(data => {
      for (const item of data) {
        const cardsItem = document.createElement('li');
        cardsItem.classList.add('cards__item');
        const cardsContainerBack = document.createElement('div');
        cardsContainerBack.classList.add('back__container');
        const cardBack = document.createElement('img');
        cardBack.src = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
        const cardsContainerFront = document.createElement('div');
        cardsContainerFront.classList.add('front__container', 'hidden');
        const cardFront = document.createElement('img');
        cardFront.src = item.image;
        cardsContainerBack.appendChild(cardBack);
        cardsItem.appendChild(cardsContainerBack);
        cardsItem.addEventListener('click', changeCards);
        cardsContainerFront.appendChild(cardFront);
        cardsItem.appendChild(cardsContainerFront);
        list.appendChild(cardsItem);
      }
    });
    localStorage.setItem('saved__data', value);
}

button.addEventListener('click', showCards);
