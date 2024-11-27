document.addEventListener("DOMContentLoaded", () => {
  // Modal functionality for terms and conditions
  const termsButton = document.getElementById("terms-condition");
  const termsModal = document.getElementById("termsModal");
  const closeModalButton = document.getElementById("closeModal");

  termsButton.addEventListener("click", () => {
    termsModal.classList.remove("hidden");
    termsModal.classList.add("flex");
  });

  closeModalButton.addEventListener("click", () => {
    termsModal.classList.remove("flex");
    termsModal.classList.add("hidden");
  });

  // Your existing JavaScript code
  const menuButton = document.getElementById("menu");
  const sidePanel = document.getElementById("side-panel");
  const closeButton = document.getElementById("closeButton");

  menuButton.addEventListener("click", () => {
    sidePanel.classList.remove("translate-x-full");
    sidePanel.classList.add("translate-x-0");
  });

  closeButton.addEventListener("click", () => {
    sidePanel.classList.remove("translate-x-0");
    sidePanel.classList.add("translate-x-full");
  });

  // Navigation link highlighting
  const navLinks = document.querySelectorAll(".nav-link");

  function removeActiveClasses() {
    navLinks.forEach((link) => {
      link.classList.remove("bg-green-500", "text-white");
    });
  }

  function addActiveClass(link) {
    link.classList.add("bg-green-500", "text-white");
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      removeActiveClasses();
      addActiveClass(this);
    });
  });

  window.addEventListener("scroll", function () {
    let currentSection = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        scrollY >= sectionTop - 60 &&
        scrollY < sectionTop + sectionHeight - 60
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("bg-green-500", "text-white");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("bg-green-500", "text-white");
      }
    });
  });

  // Input field sanitization for contact number in sign-up form
  document
    .getElementById("contact-number")
    .addEventListener("input", function (event) {
      const value = event.target.value;
      // Remove any non-numeric characters
      event.target.value = value.replace(/[^0-9]/g, "");
    });

  // Video modal functionality
  function openVideo(videoId) {
    document.getElementById("videoFrame").src =
      "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    document.getElementById("videoModal").classList.remove("hidden");
  }

  function closeVideo() {
    document.getElementById("videoFrame").src = "";
    document.getElementById("videoModal").classList.add("hidden");
  }

  window.openVideo = openVideo;
  window.closeVideo = closeVideo;
});
