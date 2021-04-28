const postcss = require('rollup-plugin-postcss-modules').default;
// import typescript from 'rollup-plugin-typescript2';

const autoprefixer = require('autoprefixer');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss(
        postcss({
          extract: true, // extracts to `${basename(dest)}.css`
          plugins: [autoprefixer()],
          writeDefinitions: true,
          // modules: { ... }
        })
      )
    );
    return config;
  },
};
