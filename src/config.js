const Conf = require('conf');
const validateApiKey = require('./utils').validateApiKey;

module.exports = {
handler : async function configure(args) {
  const config = new Conf();
  let configKey = {};
  config.set('configKey', 'covid-data')
  let currentConfigObject = config.get(configKey);
  currentConfigObject = currentConfigObject || {};

  let apiKey = args.apiKey || args.apikey || args['api-key'] || args.key || args.k;
  currentConfigObject.apiKey = apiKey;

  if (!apiKey) {
    apiKey = currentConfigObject.apiKey;
  }
  if (!validateApiKey(apiKey)) {
    return;
  }
  config.set('apikey', apiKey);
}
}