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
  const modalBackgroundView = document.getElementById("view-modal-background");
  const closeModalButtonView = document.getElementById("close-view");
  const okButton = document.getElementById("ok-button");

  viewButton.addEventListener("click", () => {
    modalBackgroundView.classList.remove("hidden");
  });

  closeModalButtonView.addEventListener("click", () => {
    modalBackgroundView.classList.add("hidden");
  });

  okButton.addEventListener("click", () => {
    modalBackgroundView.classList.add("hidden");
  });
  window.addEventListener("click", (event) => {
    if (event.target === modalBackgroundView) {
      modalBackgroundView.classList.add("hidden");
    }
  });
});
