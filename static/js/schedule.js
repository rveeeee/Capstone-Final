// Function to add a leading zero if the number is a single digit
function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

// Function to format and display the date
function displayDate() {
  const today = new Date();
  const month = addLeadingZero(today.getMonth() + 1); // Months are zero-indexed, so add 1
  const day = addLeadingZero(today.getDate());
  const year = today.getFullYear();

  // Format the date as month/day/year
  const formattedDate = `${month}/${day}/${year}`;

  // Display the date in all elements with class "profile-date"
  const dateElements = document.getElementsByClassName("profile-date");
  for (let i = 0; i < dateElements.length; i++) {
    dateElements[i].textContent = formattedDate;
  }
}

// Call the function to display the date when the page loads
document.addEventListener("DOMContentLoaded", displayDate);

// Get the relevant elements
const rescheduleButton = document.querySelector(".appointment-wrapper button");
const reschedulePopup = document.getElementById("reschedule-popup");
const noButton = document.getElementById("no-btn-resched");

// Add event listener to the "Reschedule Appointment" button
rescheduleButton.addEventListener("click", function () {
  // Show the reschedule pop-up by removing the hidden class and adding the block class
  reschedulePopup.classList.remove("hidden");
  reschedulePopup.classList.add("block");
});

// Add event listener to the "No" button to hide the pop-up
noButton.addEventListener("click", function () {
  // Hide the reschedule pop-up by adding the hidden class and removing the block class
  reschedulePopup.classList.remove("block");
  reschedulePopup.classList.add("hidden");
});

// Function to toggle the calendar popup visibility
document.getElementById("calendar-icon").addEventListener("click", function () {
  document.querySelector(".calendar-input").click();
});
