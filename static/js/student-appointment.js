// Toggle dropdown visibility
// Toggle dropdown visibility on click
document
  .getElementById("counselor-list")
  .addEventListener("click", function () {
    const dropdown = document.getElementById("dropdown-option");
    dropdown.classList.toggle("hidden");
  });

// Update selected counselor and hide dropdown
document.querySelectorAll("#dropdown-option div").forEach(function (option) {
  option.addEventListener("click", function () {
    // Update selected counselor text
    document.getElementById("selected-counselor").textContent =
      this.textContent;

    // Hide dropdown
    document.getElementById("dropdown-option").classList.add("hidden");
  });
});

// Hide dropdown when clicking outside
document.addEventListener("click", function (event) {
  const counselorList = document.getElementById("counselor-list");
  const dropdown = document.getElementById("dropdown-option");

  // Close dropdown if clicked outside
  if (
    !counselorList.contains(event.target) &&
    !dropdown.contains(event.target)
  ) {
    dropdown.classList.add("hidden");
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
  document.getElementById(
    "month-year"
  ).innerHTML = `${months[currentMonth]}, ${currentYear}`;
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
        ${
          !isWeekend
            ? `<div class="book-label text-sm text-black font-bold rounded-md px-1 py-0.5 opacity-0 hover:opacity-100">Book</div>`
            : ""
        }
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
// Show modal on weekday click
// Show modal on weekday click (ignore weekends)
document.getElementById("days").addEventListener("click", function (event) {
  const target = event.target.closest("[data-day]");
  if (target) {
    const day = target.dataset.day;
    const monthYear = document.getElementById("month-year").textContent;

    // Get month, year, and convert day into a full date object
    const [monthName, year] = monthYear.split(", ");
    const monthIndex = months.indexOf(monthName); // Convert month name to index
    const selectedDate = new Date(year, monthIndex, day);

    // Check if the clicked date is a weekend
    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      // It's a weekend, so do nothing
      console.log("Weekends are not allowed.");
      return;
    }

    // Format the date as "Month, Date, Year"
    const formattedDate = `${months[monthIndex]} ${day}, ${year}`;

    // Set the default date in the modal
    document.getElementById("appointmentDate").value = formattedDate;

    // Show modal
    document.getElementById("appointmentModal").classList.remove("hidden");
  }
});

// Close modal logic
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("appointmentModal").classList.add("hidden");
});

// Optional: Handle form submission
document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("appointmentTime").value;
    const counselor = document.getElementById("counselor").value;

    console.log("Appointment details:", { date, time, counselor });

    // Hide modal after submission
    document.getElementById("appointmentModal").classList.add("hidden");

    // Add logic to send data to the server
  });
