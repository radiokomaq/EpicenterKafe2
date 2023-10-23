/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['9px', '15px'],
      ms: ['12px', '1px'],
      base: ['20px', '24px'],
      lg: ['32px', '28px'],
      xl: ['52px', '60px'],
    }
  },
  plugins: [],
}