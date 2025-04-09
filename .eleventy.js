const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Filtro de fecha personalizado
  eleventyConfig.addFilter("date", (value, format = "yyyy") => {
    return DateTime.fromJSDate(new Date(value)).toFormat(format);
  });

  // Copia los estilos sin tocarlos
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "dist"
    }
  };
};
