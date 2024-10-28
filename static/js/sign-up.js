document.addEventListener("DOMContentLoaded", function () {
  // Terms and Conditions Modal
  const termsLink = document.querySelector("#terms-conditions + label ");
  const modal = document.getElementById("termsModal");
  const closeModalBtn = document.getElementById("closeModal");

  // Show the terms modal when the link is clicked
  termsLink.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.classList.add("modal-open"); // Disable background scroll
  });

  // Close the terms modal when the close button is clicked
  closeModalBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("modal-open"); // Re-enable background scroll
  });

  // Close the terms modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.classList.remove("modal-open"); // Re-enable background scroll
    }
  });

  // Department and Program/Course Selection
  const departmentSelect = document.getElementById("department");
  const programSelect = document.getElementById("program");

  const programsByDepartment = {
    cit: [
      "Information Technology",
      "Automotive Technology",
      "Computer Technology",
      "Electrical Technology",
      "Electronics Technology",
      "Food Technology",
      "Garments Technology",
      "Industrial Design Technology",
      "Mechanical Technology",
    ],
    cen: [
      "Computer Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics Engineering",
      "Industrial Engineering",
      "Mechanical Engineering",
    ],
    cas: ["Biology", "Mathematics", "Communication", "History", "Psychology"],
    cabha: [
      "Accountancy",
      "Financial Management",
      "Marketing Management",
      "Human Resource Management",
      "Public Administration",
      "Hospitality Management",
    ],
    cte: [
      "Elementary Education",
      "Secondary Education Major in English",
      "Secondary Education Major in Filipino",
      "Secondary Education Major in Mathematics",
      "Secondary Education Major in Sciences",
      "Secondary Education Major in Social Studies",
      "Technical Livelihood Education",
      "Culture and Arts Education",
    ],
    cag: [
      "Animal Science",
      "Crop Science",
      "Organic Agriculture",
      "Environmental Science",
      "Forestry",
    ],
    cam: ["Nursing", "Radiologic Technology", "Midwifery"],
  };

  departmentSelect.addEventListener("change", function () {
    const selectedDepartment = departmentSelect.value;
    programSelect.innerHTML = '<option value="">Select Program</option>'; // Reset options

    if (programsByDepartment[selectedDepartment]) {
      programsByDepartment[selectedDepartment].forEach(function (program) {
        const option = document.createElement("option");
        option.value = program;
        option.textContent = program;
        programSelect.appendChild(option);
      });
    }
  });
  termsCheckbox.addEventListener("click", (e) => {
    if (!termsCheckbox.checked) {
      e.preventDefault();
      termsModal.classList.remove("hidden");
      termsModal.classList.add("flex"); // display modal as flex for centering
    }
  });
});
