module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addPassthroughCopy("./src/assets")
  eleventyConfig.addWatchTarget("./src/sass/")
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      include: "includes"
    },
  }
}