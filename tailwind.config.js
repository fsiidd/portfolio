/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: ["./src/**/*.{html,jsx,js}"], // Adjusts paths to match your project structure
  theme: {
    fontFamily: {
      sans: ["Karla", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {
      colors: {
        indigo: {
          500: "#6366F1",
          600: "#4F46E5",
          800: "#312E81",
        },
        purple: {
          500: "#A855F7",
        },
        pink: {
          500: "#EC4899",
        },
        gray: {
          100: "#f7f8fa",
          200: "#e5e7eb",
          900: "#1a202c",
        },
      },
      backgroundColor: {
        "dark-bg": "#1a202c", // Custom dark background
        "light-bg": "#f7f8fa", // Custom light background
      },
      textColor: {
        "dark-text": "#e5e7eb", // Light text for dark mode
        "light-text": "#1a202c", // Dark text for light mode
      },
    },
  },
  plugins: [],
};
