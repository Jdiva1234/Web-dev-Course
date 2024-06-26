'use strict';
//selecting elements
let score0 = document.querySelector('#score--0');
let score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
let dice = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;

//starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generating a random dice roll.
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    //3. check for rolled 1:
    if (diceNumber !== 1) {
      currentScore = currentScore + diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (!playing) return;
  //1. add current score to active player's score

  scores[activePlayer] += currentScore;

  //2 check if player's score is 100
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //3. if so finish the game if not switch to the next player
  //finish the game
  if (scores[activePlayer] >= 20) {
    playing = false;
    dice.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    dice.classList.add('hidden');
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else switchPlayer();
});

let newGame = document.querySelector('.btn--new');
newGame.addEventListener('click', function () {
  score0 = document.querySelector('#score--0').textContent = 0;
  score1 = document.getElementById('score--1').textContent = 0;
  current0 = document.getElementById('current--0').textContent = 0;
  current1 = document.getElementById('current--1').textContent = 0;
});
