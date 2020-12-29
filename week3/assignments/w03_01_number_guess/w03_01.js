'use strict';

// set max number limit to 20
let maxNumLimit = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
// set highScore to 0 as default
let highScore = 0; // default

// create a helper function showMessage to display the message
function showMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  // error message on empty input
  if (!guess) {
    showMessage('❌ No number!');

    // when guess greater than maxNumLimit
  } else if (guess > maxNumLimit) {
    // show message with '🚫 Guess should be in between 1 to 20.'
    // update the value of element with class .guess to empty string
  } else if (guess === secretNumber) {
    showMessage('🏆 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#61b15a';

    // set high score
    // if score > highScore then
    //   set highScore to score
    //   update the element with class .highscore to highScore

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

// update the listener to reset button
document.querySelector('.reset').addEventListener('click', function() {
  // show message with 'Start guessing...'
  // update the textContent of element with class .score to 10
  // make score to 10 (initial value)
  // update the textContent of element with class .number to ?
  // update the value of element with class .guess to empty string
  // update the backgroundColor property to #fff of style attribute of body element
});
