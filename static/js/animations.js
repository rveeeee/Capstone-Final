document.addEventListener("DOMContentLoaded", () => {
  // Temporarily disable the IntersectionObserver to prevent animations
  // const observerOptions = {
  //   root: null,
  //   rootMargin: "0px 0px -50px 0px",
  //   threshold: 0.1,
  // };

  // const observerCallback = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("animate-visible"); // Comment out to disable
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // };

  // const observer = new IntersectionObserver(observerCallback, observerOptions);

  // const elementsToAnimate = document.querySelectorAll(
  //   ".animate-fade-in, .slide-in, .animate-bounce-in, .slide-in-right, .fade-backward, .one-by-one"
  // );

  // elementsToAnimate.forEach((el) => observer.observe(el));

  // Special case for animated text (letters)
  const letters = document.querySelectorAll(".animate-letters span");
  letters.forEach((letter) => {
    letter.style.animationDelay = "0s"; // Remove any animation delay
    letter.classList.remove("animate-visible"); // Prevent animation from triggering
  });
});
