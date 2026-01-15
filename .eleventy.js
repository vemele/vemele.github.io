const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // 🗓️ Filtro de fechas
  eleventyConfig.addFilter("date", function(dateObj, format = "dd/MM/yyyy") {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // 📚 Colección de posts
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByTag("post").reverse();
  });

  // 📦 Archivos estáticos (MUY IMPORTANTE)
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles");

  // 📁 Configuración de carpetas
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    }
  };
};
