import { updateStats } from './stats.js';

export function resetTyping() {
  // Nothing to reset here yet, but we may use this later
}

/**
 * Compare input to quote and update character styles
 * @param {string} quote 
 * @param {string} input 
 */
export function handleTypingInput(quote, input) {
  const quoteChars = document.querySelectorAll('#quote span');
  const inputChars = input.split('');
  let correctCount = 0;

  quoteChars.forEach((charSpan, index) => {
    const typedChar = inputChars[index];

    if (typedChar == null) {
      charSpan.className = ''; // Reset
    } else if (typedChar === charSpan.textContent) {
      charSpan.className = 'correct';
      correctCount++;
    } else {
      charSpan.className = 'incorrect';
    }
  });

  updateStats(input, quote, correctCount);
}