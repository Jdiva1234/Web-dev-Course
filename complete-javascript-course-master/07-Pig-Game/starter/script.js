'use strict';
//selecting elements
let score0 = document.querySelector('#score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');

//starting conditions
score0.textContent = 0;
score1.textContent = 0;

dice.classList.add('hidden');
