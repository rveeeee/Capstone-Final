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
