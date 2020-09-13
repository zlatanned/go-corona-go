const minimist = require('minimist');
const now  = require('./now');
const config = require('./config');
const forecast  = require('./forecast');
const help  = require('./help');
const version  = require('./version');
const getCountriesAffected = require('./history');

module.exports = {
    handler : async function cli(argsArray) {
        const args = minimist(argsArray.slice(2));
        let cmd = args._[0] || 'help';
      
        if (args.version || args.v) {
          cmd = 'version';
        }
      
        if (args.help || args.h) {
          cmd = 'help';
        }
      
        switch (cmd) {
          case 'version':
            version(args);
            break;
      
          case 'help':
            help(args);
            break;
      
          case 'now':
            now.handler(args);
            break;

          case 'history':
            getCountriesAffected.handler();
            break;
      
          case 'forecast':
            forecast(args);
            break;

          case 'config':
            config.handler(args);
            break;
      
          default:
            console.error(`"${cmd}" is not a valid command!`);
            break;
        }
      }
} 
