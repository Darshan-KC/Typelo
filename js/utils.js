// utils.js

/**
 * Get a random quote from a list.
 * @returns {string} Random quote
 */
export function getRandomQuote() {
  const quotes = [
    "Practice makes perfect.",
    "The quick brown fox jumps over the lazy dog.",
    "Typing is a useful skill in the digital age.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Fast fingers, sharp mind.",
    "Consistency is the key to progress.",
    "Don't stop until you're proud.",
  ];

  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

/**
 * Reset all stats and visual classes.
 */
export function resetUI() {
  document.getElementById('wpm').textContent = 0;
  document.getElementById('accuracy').textContent = '0%';
  document.getElementById('time').textContent = 0;

  const spans = document.querySelectorAll('#quote span');
  spans.forEach(span => {
    span.className = ''; // Clear all classes
  });
}