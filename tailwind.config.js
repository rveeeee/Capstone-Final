/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/**/*.js",
    "./**/templates/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        berde: "#1F6A27",
        "medj-berde": "#29a335",
        "nav-hover": "#0B4114",
        "team-bg": "rgba(63, 229, 79, 0.60)",
        "feature-button-color": "#058912",
        "footer-color": "#1F7A28",
        "cta-color": "#058912",
      },
      backgroundImage: {
        "nav-gradient":
          "linear-gradient(90deg, #058912 -3.86%, #FFF 6.68%, #2BA23E 33.52%, #398643 56.12%, #024409 84.3%, #058912 95.87%)",
        "hero-image": "url('/src/img/SLSU.jpg')",
        "second-section-img": "url('/src/img/second-section.png')",
        "about-us-img": "url('/src/img/about-us.png')",
        "services-header":
          "linear-gradient(90deg, #1F6A27 0.94%, #058912 37.71%, #EBF6EC 86.07%, #FFF 95.26%)",
        "contacts-header":
          "linear-gradient(269deg, #FFF -14.33%, #058912 45.98%, #0B4114 86.11%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
