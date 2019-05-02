'use strict';

const title = document.querySelector('.page__title');
const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const list = document.querySelector('.page__cards');

const API = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
const cardsNumber = input.value;

const showCards = () => {
  fetch(`${API}${cardsNumber}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
}

button.addEventListener('click', showCards);
