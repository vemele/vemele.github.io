const { DateTime } = require("luxon"); // ← esto va al inicio

module.exports = function(eleventyConfig) {
  // 🗓️ Filtro personalizado para formatear fechas
  eleventyConfig.addFilter("date", function(dateObj, format = "dd/MM/yyyy") {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // 📚 Colección de posts
  eleventyConfig.addCollection("posts", function(collection) {
    return collection.getFilteredByTag("post").reverse();
  });

  // 📁 Configuración de carpetas
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    }
  };
};
