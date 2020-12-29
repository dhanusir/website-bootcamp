'use strict';

let maxLimit = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0; // default

function showMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  // error message on empty input
  if (!guess) {
    showMessage('❌ No number!');

    // when guess greater than maxLimit
  } else if (guess > maxLimit) {
    showMessage('🚫 Guess should be in between 1 to 20.');
    document.querySelector('.guess').value = "";
  } else if (guess === secretNumber) {
    showMessage('🏆 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#61b15a';

    // set high score
    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      showMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.reset').addEventListener('click', function() {
  showMessage('Start guessing...');
  document.querySelector('.score').textContent = 10;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = "";
  document.querySelector('body').style.backgroundColor = '#fff';
  // reset values
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
