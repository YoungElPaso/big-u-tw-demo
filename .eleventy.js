const tw = require("./tw-build");

// Custom configuration for Eleventy.
module.exports = function (eleventyConfig) {
  // Watch JS specifically.
  eleventyConfig.addWatchTarget("js");

  // Watch CSS specifically.
  eleventyConfig.addWatchTarget("css");

  // Throttle watch time in ms.
  eleventyConfig.setWatchThrottleWaitTime(100);

  // Copy img/ to _site/img .
  eleventyConfig.addPassthroughCopy("img");

  // Copy css/ to _site/css .
  // eleventyConfig.addPassthroughCopy("css");

  // Copy custom JS from js/ to _site/js .
  eleventyConfig.addPassthroughCopy("js");

  // Copy alpine.js from node_modules to _site/js/ .
  eleventyConfig.addPassthroughCopy({
    "node_modules/alpinejs/dist/alpine.js": "js/alpine.js"
  });

  // Do some stuff - like compile TW before build.
  eleventyConfig.on("beforeBuild", () => {
    // Run me before the build starts.
    // TODO: add this: If .env == 'prod'... so do TW prod build only on
    // prod builds!
    tw();
  });
};
