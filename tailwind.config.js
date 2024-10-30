// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#F95C19",
        "primary-black": "#11111D",
        "secondery-black": "#261134",
        "special-black": "#222132",
        "primary-ash": "#817382",
        "secondery-ash": "#4D4D4D",
        "primary-gray": "#464558",
      },
      boxShadow: {
        "custom-light": "0px 0px 20px 5px rgba(0, 19, 119, 0.05)",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Oxanium: ["Oxanium", "sans-serif"],
      },
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xlg: "1280px", // Custom extra-large screen
        xl: "1440px", // Extra-large screens
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%", // Full width on small screens
        md: "100%",
        lg: "1024px",
        xlg: "1280px",
        xl: "1320px", // Custom width for extra-large screens
      },
    },
  },
  plugins: [],
};
