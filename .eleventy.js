const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Filtro para formatear fechas
  eleventyConfig.addFilter("date", (value, format = "yyyy") => {
    return DateTime.fromJSDate(new Date(value)).toFormat(format);
  });

  // Colección de posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/*.md").reverse();
  });

  // Archivos estáticos
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    },
    pathPrefix: "/mi-sitio/"
  };
};
