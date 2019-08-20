const path = require('path');
const LOADERS = require('./.webpack/loaders');
const PLUGINS = require('./.webpack/plugins');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PROD_VERSION = NODE_ENV === 'production';
const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, '.build');

const config = {
  context: SRC_DIR,
  mode: IS_PROD_VERSION ? 'production' : 'development',
  devtool: IS_PROD_VERSION ? false : 'cheap-source-map',
  entry: ['./Index.ts'],
  output: {
    filename: path.join('scripts', '[name].js'),
    chunkFilename: path.join('scripts', '[id].js'),
    path: BUILD_DIR,
    publicPath: '/',
  },
  module: {
    rules: [LOADERS.TS_LOADERS, LOADERS.CSS_LOADERS, LOADERS.IMAGES_LOADERS, LOADERS.FONTS_LOADERS],
  },
  plugins: [PLUGINS.DEFINE, PLUGINS.MINI_CSS_EXTRACT, PLUGINS.FORK_TS_CHECKER],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.tsx', '.jsx', '.js', '.ts'],
  },
  stats: {
    chunks: false,
    children: false,
  },
  watch: false,
  watchOptions: {
    poll: 500,
    ignored: ['/node_modules/', '*.css.d.ts'],
  },
  optimization: {
    namedModules: true,
    usedExports: true,
    sideEffects: true,
  },
};

module.exports = config;
