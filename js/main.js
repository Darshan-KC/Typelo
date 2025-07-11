// main.js

import { getRandomQuote } from './utils.js';
import {startTimer, resetTimer} from './timer.js';
import { resetTyping } from './typing.js';
import { renderQuote, resetUI } from './ui.js';
import { resetStats } from './stats.js';

const quoteElement = document.getElementById('quote');
const inputElement = document.getElementById('input-area');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

let currentQuote = "";
(async () => {
    const quote = await getRandomQuote();
    console.log(quote);
    currentQuote = quote;
    quoteElement.innerHTML = currentQuote;
})();

async function initGame() {
  currentQuote = await getRandomQuote();
  console.log(currentQuote);
  renderQuote(currentQuote);
  resetTyping();
  resetUI();
  resetTimer();
  resetStats();
  inputElement.value = "";
  inputElement.disabled = false;
  inputElement.focus();
  restartBtn.disabled = false;

  startTimer();
}

startBtn.addEventListener('click', () => {
  initGame();
  
});

restartBtn.addEventListener('click', () => {
  initGame();
});
