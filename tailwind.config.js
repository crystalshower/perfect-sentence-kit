/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'mat-black-slate': '#2D2F31',
        'mat-black-primary': '#1F1F1F',
      }
    },
    
  },
  plugins: [
	]
}

