let timer;
let minutes = 25;
let seconds = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    alert("Pomodoro session completed! Take a break.");
    resetTimer();
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }
}

function updateDisplay() {
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  document.getElementById(
    "timer"
  ).innerText = `${formattedMinutes}:${formattedSeconds}`;
}
