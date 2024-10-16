document.addEventListener("DOMContentLoaded", function () {
  const termsLink = document.querySelector("#terms-conditions + label ");
  const modal = document.getElementById("termsModal");
  const closeModalBtn = document.getElementById("closeModal");

  // Show the modal when the terms link is clicked
  termsLink.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.classList.add("modal-open"); // Disable background scroll
  });

  // Close the modal when the close button is clicked
  closeModalBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("modal-open"); // Re-enable background scroll
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.classList.remove("modal-open"); // Re-enable background scroll
    }
  });
});

//Department and Courses/Program
const courseProgramInput = document.getElementById("course-program");
const courseModal = document.getElementById("courseModal");
const courseModalClose = document.getElementById("courseModalClose");
const courseSelectBtn = document.getElementById("courseSelectBtn");
const departmentSelect = document.getElementById("department");
const courseSelect = document.getElementById("course");

const courseOptions = {
  "College of Industrial Technology": [
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
  "College of Engineering": [
    "Computer Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electronics Engineering",
    "Industrial Engineering",
    "Mechanical Engineering",
  ],
  "College of Arts and Sciences": [
    "Biology",
    "Mathematics",
    "Communication",
    "History",
    "Psychology",
  ],
  "College of Administration, Business, Hospitality and Accountancy": [
    "Accountancy",
    "Financial Management",
    "Marketing Management",
    "Human Resource Management",
    "Public Administration",
    "Hospitality Management",
  ],
  "College of Teacher Education": [
    "Elementary Education",
    "Secondary Education Major in English",
    "Secondary Education Major in Filipino",
    "Secondary Education Major in Mathematics",
    "Secondary Education Major in Sciences",
    "Secondary Education Major in Social Studies",
    "Technical Livelihood Education",
    "Culture and Arts Education",
  ],
  "College of Agriculture": [
    "Animal Science",
    "Crop Science",
    "Organic Agriculture",
    "Environmental Science",
    "Forestry",
  ],
  "College of Allied Medicine": [
    "Nursing",
    "Radiologic Technology",
    "Midwifery",
  ],
};

departmentSelect.addEventListener("change", () => {
  const selectedDepartment = departmentSelect.value;
  courseSelect.innerHTML =
    '<option value="" disabled selected>Select your Course/Program</option>';
  if (courseOptions[selectedDepartment]) {
    courseOptions[selectedDepartment].forEach((course) => {
      const option = document.createElement("option");
      option.value = course;
      option.textContent = course;
      courseSelect.appendChild(option);
    });
  }
});

courseProgramInput.addEventListener("click", () => {
  courseModal.classList.remove("hidden");
});

courseModalClose.addEventListener("click", () => {
  courseModal.classList.add("hidden");
});

courseSelectBtn.addEventListener("click", () => {
  const selectedDepartment = departmentSelect.value;
  const selectedCourse = courseSelect.value;
  if (selectedDepartment && selectedCourse) {
    courseProgramInput.value = `${selectedDepartment} - ${selectedCourse}`;
    courseModal.classList.add("hidden");
  } else {
    alert("Please select both Department and Course/Program.");
  }
});
