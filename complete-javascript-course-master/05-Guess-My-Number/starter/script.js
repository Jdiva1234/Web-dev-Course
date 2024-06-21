'use strict';

// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);
const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    //when the player wins
  } else if (guess === secretNumber) {
    score++;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '30rem';
    //when the guess too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost, try again';
    }
  } else {
    score--;
    document.querySelector('.message').textContent = '📉Too low';
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('again').addEventListener(click, function () {});
