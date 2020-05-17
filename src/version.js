module.exports = async function version() {
    const packagejson = require('../package.json');
    console.log(packagejson.version);
  }
