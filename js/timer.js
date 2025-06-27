let startTime = null;
let intervalId = null;

export function startTimer() {
  const timeDisplay = document.getElementById('time');
  startTime = Date.now();

  intervalId = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    timeDisplay.textContent = elapsed;
  }, 1000);
}

export function resetTimer() {
  clearInterval(intervalId);
  document.getElementById('time').textContent = '0';
}