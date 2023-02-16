const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin);
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('downloads');

  return {
    dir: {
      input: "src",
      output: "_site"
    },
  }
}
