// const tailwindcss = require("tailwindcss");
// const autoprefixer = require("autoprefixer");
// const cssnano = require("cssnano");
const postcss = require("postcss");
const fs = require("fs");

const postcssrc = require("postcss-load-config");

module.exports = function () {
  fs.readFile("css/style.css", (err, css) => {
    postcssrc().then(({ plugins, options }) => {
      postcss(plugins)
        .process(css, options)
        .then((result) => {
          fs.writeFile("_site/css/tw.css", result.css, () => true);
          if (result.map) {
            fs.writeFile(
              "_site/css/tw.css.map",
              result.map.toString(),
              () => true
            );
          }
        });
    });
  });
};
