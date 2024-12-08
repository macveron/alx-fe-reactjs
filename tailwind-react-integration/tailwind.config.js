module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Old purge syntax
  darkMode: "class", // Enable dark mode (optional)
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active", "group-hover"], // Example custom variant
    },
  },
  plugins: [],
};
