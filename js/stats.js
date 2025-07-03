
import { countWords } from './utils.js';

export function resetStats() {
  updateDisplay(0, 0);
}

/**
 * Update WPM and accuracy display
 * @param {string} input 
 * @param {string} quote 
 * @param {number} correctChars 
 */
export function updateStats(input, quote, correctChars) {
  const time = parseInt(document.getElementById('time').textContent) || 1;
  const wpm = Math.round((countWords(input) / time) * 60);
  const accuracy = Math.round((correctChars / quote.length) * 100);

  updateDisplay(wpm, accuracy);
}