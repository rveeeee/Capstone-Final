let date = new Date();
const months = [
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

let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

function updateMonthYear() {
  document.getElementById("month-year").innerHTML =
    `${months[currentMonth]}, ${currentYear}`;
  displayDays(currentMonth, currentYear);
}

function displayDays(month, year) {
  const daysElement = document.getElementById("days");
  daysElement.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const prevLastDate = new Date(year, month, 0).getDate();
  const today = new Date();
  const isCurrentMonth =
    month === today.getMonth() && year === today.getFullYear();

  // Display previous month's trailing days
  for (let i = firstDay; i > 0; i--) {
    const day = prevLastDate - i + 1;
    daysElement.innerHTML += `<div class="py-3 px-7 text-gray-400">${day}</div>`;
  }

  // Display current month's days
  for (let day = 1; day <= lastDate; day++) {
    const dayOfWeek = new Date(year, month, day).getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const dayClass = isWeekend ? "text-red-500" : "text-black";
    const isToday = isCurrentMonth && day === today.getDate();
    const todayClass = isToday ? "bg-green-700 text-white relative" : "";
    const todayLabel = isToday
      ? `<div class="today-label text-xs text-white mt-2">Today's Date</div>`
      : "";

    daysElement.innerHTML += `
      <div class="relative py-5 px-7 mx-2 mb-2 hover:bg-green-400 ${dayClass} ${todayClass}" data-day="${day}">
        ${day}
        ${todayLabel}
      </div>`;
  }

  // Display next month's leading days
  const totalCells = firstDay + lastDate;
  const nextDays = 7 - (totalCells % 7);
  if (nextDays < 7) {
    for (let i = 1; i <= nextDays; i++) {
      daysElement.innerHTML += `<div class="py-3 px-7 text-gray-400">${i}</div>`;
    }
  }
}

// Event listener for day clicks
// document.getElementById("days").addEventListener("click", function (event) {
//   const target = event.target;
//   if (target.dataset.day) {
//     alert(`You clicked on ${target.dataset.day}`);
//   }
// });

document.getElementById("prev").addEventListener("click", function () {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateMonthYear();
});

document.getElementById("next").addEventListener("click", function () {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateMonthYear();
});

updateMonthYear();

document.addEventListener("DOMContentLoaded", function () {
  // Function to format the date
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Get the current date
  const today = new Date();

  // Format the date
  const formattedDate = formatDate(today);

  // Set the formatted date to the element with id "current-date"
  document.getElementById("current-date").textContent = formattedDate;
});
