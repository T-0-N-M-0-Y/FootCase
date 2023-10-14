/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1e6b91",

          "secondary": "#b445f9",

          "accent": "#fcb0cf",

          "neutral": "#241726",

          "base-100": "#eceff4",

          "info": "#11b7ee",

          "success": "#27aa8e",

          "warning": "#f1b55b",

          "error": "#ef7461",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}

