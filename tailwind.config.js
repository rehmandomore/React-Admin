module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // fontFamily: { headline: ["Oswald"] },
      colors: {
        bgBody: "#F3F5FD",
        primary: "#3E51B5",
        gradient: "#4f71c6",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};
