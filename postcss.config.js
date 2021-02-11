module.exports = {
  from: "css/style.css",
  to: "_site/css/tw.css",
  plugins: {
    tailwindcss: {} || null,
    autoprefixer: {} || null,
    cssnano: {
      preset: [require("cssnano-preset-default")]
    }
  }
};
