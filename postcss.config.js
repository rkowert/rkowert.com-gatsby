const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = () => ({
  plugins: [
    postcssNormalize(),
    postcssPresetEnv({
      stage: 0,
      importFrom: [
        {
          customMedia: { '--expanded-nav': '(min-width: 60em)' },
        },
      ],
    }),
  ],
});
