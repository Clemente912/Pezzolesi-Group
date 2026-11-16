/** Mismo tema que usaba el CDN. Compilar con:
 *  npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.input.css -o assets/tailwind.css --minify */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink: '#112d43',
        gold: { DEFAULT: '#b2966a', light: '#e3cfa6', dark: '#8f7549' },
        brand: { DEFAULT: '#112d43', dark: '#0b2031', soft: '#e9eef3' },
        mist: '#f5f3ee',
        sand: '#e9e4d9'
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['Montserrat', 'system-ui', 'sans-serif'] }
    }
  }
};
