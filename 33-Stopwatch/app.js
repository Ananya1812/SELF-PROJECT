const watch = document.querySelector("#watch");
let timer;
let milliseconds = 0;

function startWatch() {
  watch.classList.remove("paused");
  clearInterval(timer);
  timer = setInterval(() => {
    milliseconds += 10;
    let dataTimer = new Date(milliseconds);
    watch.innerHTML =
      ("0" + dataTimer.getUTCHours()).slice(-2) +
      ":" +
      ("0" + dataTimer.getUTCMinutes()).slice(-2) +
      ":" +
      ("0" + dataTimer.getUTCSeconds()).slice(-2) +
      ":" +
      ("0" + dataTimer.getUTCMilliseconds()).slice(-3, -1);
  }, 10);
}

function pauseWatch() {
  watch.classList.add("paused");
  clearInterval(timer);
}

function resetWatch() {
  watch.classList.remove("paused");
  clearInterval(timer);
  milliseconds = 0;
  watch.innerHTML = "00:00:00:00";
}

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.id == "start") startWatch();
  if (el.id == "pause") pauseWatch();
  if (el.id == "reset") resetWatch();
});
