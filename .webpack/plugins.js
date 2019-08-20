const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const ROOT_DIR = path.resolve(__dirname, '..');
const BUILD_DIR = path.resolve(ROOT_DIR, '.build');
const STYLES_BUILD_DIR = path.relative(BUILD_DIR, path.resolve(BUILD_DIR, 'styles'));

module.exports.DEFINE = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
});

module.exports.MINI_CSS_EXTRACT = new MiniCssExtractPlugin({
  filename: path.join(STYLES_BUILD_DIR, '[name].css'),
  chunkFilename: path.join(STYLES_BUILD_DIR, '[id].css'),
  ignoreOrder: true,
});
module.exports.FORK_TS_CHECKER = new ForkTsCheckerWebpackPlugin({
  tsconfig: path.resolve(ROOT_DIR, 'tsconfig.json'),
  workers: ForkTsCheckerWebpackPlugin.ONE_CPU,
  useTypescriptIncrementalApi: true,
});
