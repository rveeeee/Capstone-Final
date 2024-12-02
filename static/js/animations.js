document.addEventListener("DOMContentLoaded", () => {
  // Animate the "ANDITO AKO" text immediately
  const navbarText = document.querySelectorAll(".animate-letters span");
  navbarText.forEach((span) => span.classList.add("in-view"));

  // Intersection Observer for other sections
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Trigger animation when 10% of the element is in view
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Only trigger animation if the element is not already animated
        if (!entry.target.classList.contains("in-view")) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // Stop observing after animation
        }
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
