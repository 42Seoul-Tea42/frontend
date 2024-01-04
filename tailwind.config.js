module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  purge: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {},
  },
  darkMode: "media",
};
