/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
       'lowerhero': "url('/background12.jpg')",
       'regbg': "url('/background14.jpg')",
       'signinbg': "url('/background16.jpg')"
      },
    },
  },
  plugins: [],
}
