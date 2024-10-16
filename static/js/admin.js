document.addEventListener("DOMContentLoaded", function () {
  // Function to format the date in "Tuesday, October 10, 2024" format
  function formatDate(date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  // Get the current date
  const today = new Date();

  // Format the date
  const formattedDate = formatDate(today);

  // Display the formatted date in the admin-date element
  document.getElementById("admin-date").textContent = formattedDate;

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
      <div class="relative py-5 px-7 mx-2 mb-2 hover:bg-green-300 ${dayClass} ${todayClass}" data-day="${day}">
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

  // basta sa year to dun sa year sections
  const select = document.getElementById("yearly-report");
  const currentYearNow = new Date().getFullYear();
  const startYear = currentYear - 10; // Adjust this value to get more or fewer years

  for (let year = currentYearNow; year >= startYear; year--) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    select.appendChild(option);
  }
});
window.addEventListener("DOMContentLoaded", () => {
  const calendarContainer = document.getElementById("calendar-container");
  const counselorsScheduleParent = document.querySelector(".overflow-y-auto");

  if (calendarContainer && counselorsScheduleParent) {
    const setMaxHeight = () => {
      const calendarHeight = calendarContainer.offsetHeight;
      counselorsScheduleParent.style.maxHeight = `${calendarHeight}px`;
    };

    // Set the initial height
    setMaxHeight();

    // Update the height whenever the window is resized
    window.addEventListener("resize", setMaxHeight);
  }
});
