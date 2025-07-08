/**
 * Render the quote with each character in a span.
 * @param {string} quote 
 */
export function renderQuote(quote) {
  const quoteElement = document.getElementById('quote');
  quoteElement.innerHTML = '';

  quote.split('').forEach(char => {
  // quote.slice('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    quoteElement.appendChild(span);
  });
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