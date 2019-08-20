const LOADERS = require('../.webpack/loaders');
const PLUGINS = require('../.webpack/plugins');

module.exports = async ({ config, mode }) => {
  config.plugins.push(PLUGINS.DEFINE, PLUGINS.MINI_CSS_EXTRACT, PLUGINS.FORK_TS_CHECKER);
  config.module.rules.push(LOADERS.TS_LOADERS);

  const cssLoaderIndex = config.module.rules.findIndex(x => x.test.test('.css'));
  config.module.rules.splice(cssLoaderIndex, 1, LOADERS.CSS_LOADERS);

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
