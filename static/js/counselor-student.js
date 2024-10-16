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

  const viewButton = document.getElementById("view-button");
  const viewModalBackground = document.getElementById("view-modal-background");
  const closeButton = document.getElementById("close-button");

  viewButton.addEventListener("click", () => {
    viewModalBackground.classList.remove("hidden");
  });

  closeButton.addEventListener("click", () => {
    viewModalBackground.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === viewModalBackground) {
      viewModalBackground.classList.add("hidden");
    }
  });
});
