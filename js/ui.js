/**
 * Render the quote with each character in a span.
 * @param {string} quote 
 */
export function renderQuote(quote) {
  const quoteElement = document.getElementById('quote');
  quoteElement.innerHTML = '';

  quote.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    quoteElement.appendChild(span);
  });
}