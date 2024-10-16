// Toggle dropdown visibility
document
  .getElementById("counselor-lists")
  .addEventListener("click", function () {
    document.getElementById("dropdown-options").classList.toggle("hidden");
  });

// Update selected counselor and hide dropdown
document.querySelectorAll("#dropdown-options div").forEach(function (option) {
  option.addEventListener("click", function () {
    document.getElementById("selected-counselor").textContent =
      this.textContent;
    document.getElementById("dropdown-options").classList.add("hidden");
  });
});

// Hide dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (!document.querySelector(".relative").contains(event.target)) {
    document.getElementById("dropdown-options").classList.add("hidden");
  }
});

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
      <div class="relative py-5 px-7 mx-5 mb-2 hover:bg-green-400 ${dayClass} ${todayClass}" data-day="${day}">
        ${day}
        ${!isWeekend ? `<div class="book-label text-sm text-black font-bold rounded-md px-1 py-0.5 opacity-0 hover:opacity-100">Book</div>` : ""}
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
