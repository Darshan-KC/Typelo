// utils.js

/**
 * Get a random quote from a list.
 * @returns {string} Random quote
 */
export function getRandomQuoteArray() {
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
 * Fetch a random quote from a json file.
 * @returns {Promise<string>} A promise that resolve a random quote.
 */
export async function getRandomQuote(){
  try {
    const response = await fetch('/assets/json/quotes.json');
    const quotes = await response.json();

    if(!Array.isArray(quotes) || quotes.length === 0){
      throw new Error("Quotes data in invalid.");
    }
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];

  } catch (error) {
    console.error("Error fetching quotes: ", error);
    return "An error occurs while fetching quotes.";
  }
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

/**
 * Count words in a string.
 * @param {string} text 
 * @returns {number}
 */
export function countWords(text) {
  return text.trim().split(/\s+/).length;
}