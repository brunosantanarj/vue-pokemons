/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: '#00A3FF',
      red: '#FE0808',
      purple: '#AF08FE',
      'dark-purple': '#5317FC',
      pink: '#FBA1EC',
      orange: '#ff7849',
      green: '#08FEC3',
      yellow: '#FFB800',
      'gray-dark': '#273444',
      schist: '#85826E',
      dark: '#0E0E0E',
      gray: '#C4C4C4',
      'gray-light': '#f1f4f5'
    },
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
      mulish: ['Mulish', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {}
  },
  plugins: []
}
