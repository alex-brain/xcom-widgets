module.exports = {
  plugins: [
    require('postcss-import')(),
    require('autoprefixer')({}),
    require('postcss-modules-values'),
    require('postcss-nested')(),
  ],
};
