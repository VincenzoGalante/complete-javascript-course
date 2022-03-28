'use strict';

/*
document.querySelector('.message').textContent = 'Correct number 🎉';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Math.random() = random float between 0 and 1;
// * 20 in order to get a number out btw. 0 and 20;
// Math.trunc to cut off the numbers after the , => 0 to 19 possible
// +1 to make it 1 to 20

const guessDOM = document.querySelector('.guess');
const scoreDOM = document.querySelector('.score');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const highscoreDom = document.querySelector('.highscore'); // First way: do not use .textConent / .value when assigning to a variable

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}; // Second way: assigning a function that takes a parameter which is set to the textContent

// Game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessDOM.value);

  if (!guess) {
    // No input
    displayMessage('🚫 No number!');

    // Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347'; // when manipulating a style, a string is always needed
    number.style.width = '30rem';
    number.style.fontSize = '10rem';

    // Highscore logic
    if (score > highscore) {
      highscore = score;
      highscoreDom.textContent = score; // need to specify .textContent as message-object
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!');
      score--;
      scoreDOM.textContent = score;
    } else {
      number.textContent = secretNumber;
      displayMessage('💣 You lost the game');
      scoreDOM.textContent = 0;
    }
  }

  // Guess too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⬆️ Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.number').textContent = secretNumber;
  //     document.querySelector('.message').textContent = '💣 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // Guess too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⬇️ Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.number').textContent = secretNumber;
  //     document.querySelector('.message').textContent = '💣 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Reset functionality
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreDOM.textContent = score;

  displayMessage('Start guessing...');
  number.textContent = '?';
  guessDOM.value = '';

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.style.fontSize = '6rem';
});
