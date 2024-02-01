const calendarDays = document.getElementById("calendarDays");
const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

document.addEventListener("DOMContentLoaded", renderCalendar);

function renderCalendar() {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const prevMonthDays =
    firstDayOfMonth > 0
      ? new Date(currentYear, currentMonth, 0).getDate() - firstDayOfMonth + 1
      : 0;
  const totalDays = lastDayOfMonth + firstDayOfMonth;

  let dayElements = "";

  for (let i = 0; i < totalDays; i++) {
    const day = i + 1 - firstDayOfMonth;

    // Check if it's within the current month's range
    const isWithinCurrentMonth = day > 0 && day <= lastDayOfMonth;

    // Check if it's today
    const isToday =
      isWithinCurrentMonth &&
      day === currentDate.getDate() &&
      currentMonth === currentDate.getMonth() &&
      currentYear === currentDate.getFullYear();

    // Check if it's inactive (from the previous or next month)
    const isInactive = !isWithinCurrentMonth;

    // Render the day element accordingly
    dayElements += isWithinCurrentMonth
      ? `<div class="day ${
          isToday ? "today" : ""
        }" onclick="selectDate(${day})">${day}</div>`
      : `<div class="day ${isInactive ? "inactive" : ""}"></div>`;
  }

  calendarDays.innerHTML = dayElements;
  updateMonthHeader();
}

function updateMonthHeader() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[currentMonth];
  document.querySelector(
    ".current-month"
  ).textContent = `${monthName} ${currentYear}`;
}

function prevMonth() {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear -= 1;
  } else {
    currentMonth -= 1;
  }
  renderCalendar();
}

function nextMonth() {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear += 1;
  } else {
    currentMonth += 1;
  }
  renderCalendar();
}

function selectDate(day) {
  alert(`Selected date: ${day}/${currentMonth + 1}/${currentYear}`);
}
