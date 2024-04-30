/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#016a70",
        "primary-blue": "#c70039",
        "secondary-process-cyan": "#b0d9b1",
        "blue-289": "#002244",
        "grey-1": "#e6e7e8",
        "grey-2": "#bcbec0",
        "grey-3": "#939598",
        "grey-4": "#6d6e71",
      },
      spacing: {
        "page-margin-x": "2rem",
        "page-margin-y": "1rem",
        "main-margin-y": "1rem",
        "form-heading-height": "3rem",
      },
      height: {
        "document-nav-height": "45px",
      },
      padding: {
        "document-nav-padding": "1rem",
      },
    },
  },
  plugins: [],
};
