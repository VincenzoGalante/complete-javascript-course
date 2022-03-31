'use strict';

// Box element of players
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

// Total scores of players
const totalScore0 = document.querySelector('#score--0');
const totalScore1 = document.getElementById('score--1'); // alternative way to querySelector

// Current scores of players
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

// Buttons
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');

// Dice
const diceElement = document.querySelector('.dice');

// Starting condition of the game
totalScore0.textContent = 0;
totalScore1.textContent = 0;
diceElement.classList.add('hidden');

let currentScore, scores, activePlayer, playing; // because we do not want to store variables only in the DOM

const init = function () {
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');

  currentScore = 0; // because we do not want to store variables only in the DOM
  scores = [0, 0];
  activePlayer = 0;
  playing = true;

  document.querySelector('#score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;

  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// Rolling dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // 3. Check for rolled.
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch Player, reset score
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // let totalScore = Number(
  //   document.querySelector(`#score--${activePlayer}`).textContent
  // );
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
