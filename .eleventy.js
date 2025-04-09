const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("date", (value, format = "yyyy") => {
    return DateTime.fromJSDate(new Date(value)).toFormat(format);
  });

  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs" // 👈 ¡Esto es lo importante!
    }
  };
};
