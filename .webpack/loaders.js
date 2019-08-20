const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PROD_VERSION = NODE_ENV === 'production';

const ROOT_DIR = path.resolve(__dirname, '..')
const SRC_DIR = path.resolve(ROOT_DIR, 'src');
const STORIES_DIR = path.resolve(ROOT_DIR, 'stories');
const BUILD_DIR = path.resolve(ROOT_DIR, '.build');
const IMAGES_BUILD_DIR = path.relative(BUILD_DIR, path.resolve(BUILD_DIR, 'images'));
const FONTS_BUILD_DIR = path.relative(BUILD_DIR, path.resolve(BUILD_DIR, 'fonts'));

module.exports.TS_LOADERS = {
  test: /\.tsx?$/,
  include: [SRC_DIR, STORIES_DIR],
  use: [
    {
      loader: 'babel-loader',
      options: {
        babelrc: false,
        configFile: './babel.config.js',
      },
    },
  ],
};
module.exports.CSS_LOADERS = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'local',
          localIdentName: IS_PROD_VERSION ? '[local]-[hash:base64:4]' : '[name]-[local]-[hash:base64:4]',
          context: SRC_DIR,
        },
        import: false,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: ROOT_DIR,
        },
      },
    },
  ],
};
module.exports.IMAGES_LOADERS = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name]-[hash].[ext]',
        outputPath: IMAGES_BUILD_DIR,
      },
    },
  ],
};
module.exports.FONTS_LOADERS = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name]-[hash].[ext]',
        outputPath: FONTS_BUILD_DIR,
      },
    },
  ],
};
