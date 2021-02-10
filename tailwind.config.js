// tailwind.config.js
module.exports = {
  purge: { enabled: true, content: ["./_includes/**/*.njk", "./src/**/*.js"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "mds-sans-bold": ["McGillSans-Medium", "Helvetica", "sans-serif"],
        "mds-serif-bold": ["McGillSerif-Medium", "Georgia", "serif"],
        "mds-standard": ["McGillSans-Regular", "Helvetica", "sans-serif"]
      }
    }
  },
  variants: {},
  plugins: []
};
