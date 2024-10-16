document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px 0px -50px 0px", // Ensure the element is 50px inside the viewport before triggering
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible"); // Add class to trigger animation
        observer.unobserve(entry.target); // Stop observing once it's animated
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Select all elements that need to animate on scroll
  const elementsToAnimate = document.querySelectorAll(
    ".animate-fade-in, .slide-in, .animate-bounce-in, .hero-image, .offer-container > div, .feature-container img, .communication-image, .form-image img, .cta-services-container img"
  );

  // Start observing each element for the scroll-based animation trigger
  elementsToAnimate.forEach((el) => observer.observe(el));

  // Special case for animated text (letters)
  const letters = document.querySelectorAll(".animate-letters span");
  letters.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.1}s`; // Delays for each letter
    letter.classList.add("animate-visible"); // Trigger animation as soon as page loads
  });

  // FAQ items with delay animation on scroll
  const faqItems = document.querySelectorAll(".one-by-one");
  faqItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("fade-in");
    }, index * 500); // Delay each item animation by 500ms
  });
});
