'use strict';
//selecting elements
let score0 = document.querySelector('#score--0');
let score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
let dice = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('btn--hold');

//starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. generating a random dice roll.
  let diceNumber = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;

  //3. check for rolled 1:
  if (dice !== 1) {
    currentScore = currentScore + diceNumber;
    current0.textContent = currentScore;
  } else {
  }
});
