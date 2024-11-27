document.addEventListener("DOMContentLoaded", () => {
  // Animate the "ANDITO AKO" text immediately
  const navbarText = document.querySelectorAll(".animate-letters span");
  navbarText.forEach((span) => span.classList.add("in-view"));

  // Intersection Observer for other sections
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // Stop observing
      }
    });
  };

  const observer = new IntersectionObserver(
    handleIntersection,
    observerOptions
  );

  // Select elements for scroll-triggered animations
  const animatedElements = document.querySelectorAll(
    ".services-section *, .features-section *, .contacts-section *, .slide-in, .slide-in-right, .fade-backward, .animate-fade-in, .animate-bounce-in"
  );

  animatedElements.forEach((el) => observer.observe(el));
});
