const postcssNesting = require('postcss-nesting');
const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = () => ({
  plugins: [
    postcssNormalize(),
    postcssPresetEnv({
      stage: 0,
    }),
    postcssNesting(),
  ],
});
