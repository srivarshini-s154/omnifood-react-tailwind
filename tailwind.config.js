module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e67e22",        // Your orange color
        primaryDark: "#cf711f",    // Darker orange (hover)
        cream: "#fdf2e9",          // Light cream background
        grayDark: "#333",          // Dark text
        grayMedium: "#555",        // Medium text
      },
      spacing: {
        '9.6': '9.6rem',          // Header height
        '4.8': '4.8rem',          // Common gap
        '3.2': '3.2rem',          // Button padding
        '2.4': '2.4rem',          // Smaller gaps
        '1.6': '1.6rem',          // Tiny gaps
      },
      fontSize: {
        '5.2': '5.2rem',         // Hero heading
        '2.2': '2.2rem',          // Logo size
        '2.0': '2.0rem',          // Paragraphs
        '1.8': '1.8rem',          // Navigation links
      },
      borderRadius: {
        '9': '9px',               // Buttons
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'], // Your font
      },
    },
  },
  plugins: [],
}