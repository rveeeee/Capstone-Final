document.addEventListener("DOMContentLoaded", () => {
  // Modal functionality for terms and conditions
  const termsButton = document.getElementById("terms-condition");
  const termsModal = document.getElementById("termsModal");
  const closeModalButton = document.getElementById("closeModal");

  termsButton?.addEventListener("click", () => {
    termsModal.classList.remove("hidden");
    termsModal.classList.add("flex");
  });

  closeModalButton?.addEventListener("click", () => {
    termsModal.classList.remove("flex");
    termsModal.classList.add("hidden");
  });

  // Your existing JavaScript code
  const menuButton = document.getElementById("menu");
  const sidePanel = document.getElementById("side-panel");
  const closeButton = document.getElementById("closeButton");

  menuButton?.addEventListener("click", () => {
    sidePanel.classList.remove("translate-x-full");
    sidePanel.classList.add("translate-x-0");
  });

  closeButton?.addEventListener("click", () => {
    sidePanel.classList.remove("translate-x-0");
    sidePanel.classList.add("translate-x-full");
  });

  // Input field sanitization for contact number in sign-up form
  const contactNumberField = document.getElementById("contact-number");
  contactNumberField?.addEventListener("input", function (event) {
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

  // Scroll detection and nav link highlighting
  function onScroll() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(
      ".navbar-links a:not(.no-hover)"
    ); // Exclude .no-hover links

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      // Section must be at least 50% in the viewport to be considered active
      if (
        sectionTop < viewportHeight / 2 &&
        sectionBottom > viewportHeight / 2
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("bg-green-500", "text-white");
      link.classList.add("hover:bg-green-500", "hover:text-white");

      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("bg-green-500", "text-white");
        link.classList.remove("hover:bg-green-500", "hover:text-white");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // Call the function to set the initial state
});
