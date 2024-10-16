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

  const accountSettingsButton = document.getElementById(
    "account-settings-button",
  );
  const modalBackgroundEdit = document.getElementById("edit-modal-background");
  const closeModalButton = document.getElementById("close-modal");

  accountSettingsButton.addEventListener("click", () => {
    modalBackgroundEdit.classList.remove("hidden");
  });

  closeModalButton.addEventListener("click", () => {
    modalBackgroundEdit.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modalBackgroundEdit) {
      modalBackgroundEdit.classList.add("hidden");
    }
  });

  const viewDetailsButton = document.getElementById(
    "view-account-details-button",
  );
  const modalBackgroundView = document.getElementById("view-modal-background");
  const closeModalButtonView = document.getElementById("close-view");
  const okButton = document.getElementById("ok-button");

  viewDetailsButton.addEventListener("click", () => {
    modalBackgroundView.classList.remove("hidden");
  });

  closeModalButtonView.addEventListener("click", () => {
    modalBackgroundView.classList.add("hidden");
  });

  okButton.addEventListener("click", () => {
    modalBackgroundView.classList.add("hidden");
  });

  const deleteButton = document.getElementById("delete-button");
  const deleteModalBackground = document.getElementById(
    "delete-modal-background",
  );
  const noButton = document.getElementById("no-btn-delete");

  deleteButton.addEventListener("click", () => {
    deleteModalBackground.classList.remove("hidden");
  });

  noButton.addEventListener("click", () => {
    deleteModalBackground.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === deleteModalBackground) {
      deleteModalBackground.classList.add("hidden");
    }
  });

  const menu = document.getElementById("settings-menu");
  const sideBar = document.getElementById("settings-sidebar");
  const sideBarBackground = document.getElementById("sidebar-background");

  menu.addEventListener("click", () => {
    sideBar.classList.toggle("hidden");
    sideBarBackground.classList.toggle("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === sideBarBackground) {
      sideBar.classList.add("hidden");
      sideBarBackground.classList.add("hidden");
    }
  });
});
