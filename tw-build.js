const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const fs = require("fs");

module.exports = function () {
  fs.readFile("css/style.css", (err, css) => {
    postcss([tailwindcss, autoprefixer])
      .process(css, { from: "css/style.css", to: "_site/css/tw.css" })
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
};
