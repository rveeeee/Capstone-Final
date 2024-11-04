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

  const addNewButton = document.getElementById("add-new");
  const addNewModalBackground = document.getElementById(
    "addNew-modal-background"
  );
  const closeModalButton = document.getElementById("close-modal");

  addNewButton.addEventListener("click", () => {
    addNewModalBackground.classList.remove("hidden");
  });

  closeModalButton.addEventListener("click", () => {
    addNewModalBackground.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === addNewModalBackground) {
      addNewModalBackground.classList.add("hidden");
    }
  });
  const editButton = document.getElementById("edit-button");
  const editModalBackground = document.getElementById("edit-modal-background");
  const editcloseModalButton = document.getElementById("edit-close-modal");

  editButton.addEventListener("click", () => {
    editModalBackground.classList.remove("hidden");
  });

  editcloseModalButton.addEventListener("click", () => {
    editModalBackground.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === editModalBackground) {
      editModalBackground.classList.add("hidden");
    }
  });

  const viewDetailsButton = document.getElementById("view-button");
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
    "delete-modal-background"
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
});
