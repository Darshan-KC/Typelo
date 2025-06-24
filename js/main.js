// main.js

import { getRandomQuote } from './utils.js';
// import { renderQuote, resetUI } from './ui.js';


const quoteElement = document.getElementById('quote');
const inputElement = document.getElementById('input-area');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

let currentQuote = "";
(async () => {
    const quote = await getRandomQuote();
    console.log(quote);
})();