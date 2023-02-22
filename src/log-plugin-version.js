const { resolve } = require('path');
const { getPackageInfo } = require('./package-info')
const debug = require('debug')('semantic-release:monorepo');

const logPluginVersion = type => plugin => async (pluginConfig, config) => {
  if (config.options.debug) {
    const { version } = await getPackageInfo(resolve(__dirname, '../'));
    debug('Running %o version %o', type, version);
  }

  return plugin(pluginConfig, config);
};

module.exports = logPluginVersion;
