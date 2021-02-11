// Load postcss.
const postcss = require("postcss");

// Need to write to file system.
const fs = require("fs");

// Load post-css-load-config to handle plugin/config options.
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
