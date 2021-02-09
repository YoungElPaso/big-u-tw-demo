// tailwind.config.js
module.exports = {
  purge: { enabled: true, content: ["./_includes/**/*.njk", "./src/**/*.js"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "mds-sans-bold": ["McGillSans-Medium"],
        "mds-serif-bold": ["McGillSerif-Medium"],
        "mds-standard": ["McGillSans-Regular"]
      }
    }
  },
  variants: {},
  plugins: []
};
