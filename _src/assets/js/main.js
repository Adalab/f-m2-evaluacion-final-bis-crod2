'use strict';

const title = document.querySelector('.page__title');
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.btn');
const list = document.querySelector('.page__cards');
let value;
const API = 'https://raw.githubusercontent.com/Adalab/cards-data/master/';
const logButton = document.querySelector('.logButton');
let dataInfo = [];

const logPairNumber = (arr) => {
  console.log(arr);
  for (const item of arr) {
    console.log(item.pair);
  }
}

const changeCards = event => {
  const frontCards = event.currentTarget.querySelector('.front__container');
  const backCards = event.currentTarget.querySelector('.back__container');
  if (frontCards.classList.contains('hidden') === true) {
  frontCards.classList.remove('hidden');
  backCards.classList.add('hidden');
  } else {
    frontCards.classList.add('hidden');
    backCards.classList.remove('hidden');
  }
}

const infoValue = () => {
  const dataInfo = localStorage.getItem('saved__data');
  if (dataInfo === null){
    const inputFour = document.getElementById('number-4');
    inputFour.checked = true;
  } else {
      for (const input of inputs) {
        if (input.value === dataInfo) {
          input.checked = true;
        } else {
          input.checked = false;
        }
      }
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
      dataInfo = data;
      for (const item of data) {
        const cardsItem = document.createElement('li');
        cardsItem.classList.add('cards__item');
        const cardsContainerBack = document.createElement('div');
        cardsContainerBack.classList.add('back__container');
        const cardBack = document.createElement('img');
        cardBack.classList.add('back__img');
        cardBack.src = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
        const cardsContainerFront = document.createElement('div');
        cardsContainerFront.classList.add('front__container', 'hidden');
        const cardFront = document.createElement('img');
        cardFront.classList.add('front__img');
        cardFront.src = item.image;

        if (item.fav === true) {
          const favName = document.createElement('h2');
          const textName = document.createTextNode('favorito');
          favName.appendChild(textName);
          cardsItem.appendChild(favName);
        }

        cardsContainerBack.appendChild(cardBack);
        cardsItem.appendChild(cardsContainerBack);
        cardsItem.addEventListener('click', changeCards);
        cardsContainerFront.appendChild(cardFront);
        cardsItem.appendChild(cardsContainerFront);
        list.appendChild(cardsItem);
      }
      logButton.addEventListener('click', function() {logPairNumber(data)});
    });
    localStorage.setItem('saved__data', value);
}

button.addEventListener('click', showCards);


infoValue();
