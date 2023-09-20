/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      'primary': '#DC3545',
      'secondary': '#fff',
      'warning': '#ffc107',
      'gray': "#495057",
      'black': "#343a40",
      "info": "#007bff"
    },
    extend: {},
  },
  plugins: [],
}