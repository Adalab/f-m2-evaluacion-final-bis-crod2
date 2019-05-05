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
    if (inputChecked === true) {
      fetch(`${API}${inputValue}.json`)
        .then(response => response.json())
        .then(data => {
        console.log(data);
      })
    }
  }
}
//
//     for (const item of data) {
//       const newItem = document.createElement('li');
//       const cardFront = document.createElement('img');
//       cardFront.src = item.image;

//       list.appendChild(newItem);
//       newItem.appendChild(cardFront);
//     }
//   })
 //}


button.addEventListener('click', showCards);
