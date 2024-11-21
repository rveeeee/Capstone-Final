document.addEventListener("DOMContentLoaded", function () {
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
});

document.getElementById("menu").addEventListener("click", function () {
  var sidePanel = document.getElementById("side-panel");
  if (sidePanel.classList.contains("translate-x-full")) {
    sidePanel.classList.remove("translate-x-full");
    sidePanel.classList.add("translate-x-0");
  } else {
    sidePanel.classList.remove("translate-x-0");
    sidePanel.classList.add("translate-x-full");
  }
});

document.getElementById("closeButton").addEventListener("click", function () {
  var sidePanel = document.getElementById("side-panel");
  sidePanel.classList.remove("translate-x-0");
  sidePanel.classList.add("translate-x-full");
});

//Dun sa input field sa sign up
document
  .getElementById("contact-number")
  .addEventListener("input", function (event) {
    const value = event.target.value;
    // Remove any non-numeric characters
    event.target.value = value.replace(/[^0-9]/g, "");
  });
function openVideo(videoId) {
  document.getElementById("videoFrame").src =
    "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
  document.getElementById("videoModal").classList.remove("hidden");
}

function closeVideo() {
  document.getElementById("videoFrame").src = "";
  document.getElementById("videoModal").classList.add("hidden");
}
