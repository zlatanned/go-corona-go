const chalk = require('chalk');

const menus = {
  main: `
${chalk.greenBright('covid-data [command] <options>')}
  ${chalk.blueBright('now')} ................ show live covid-19 data
  ${chalk.blueBright('forecast')} ........... show covid-data forecast Message
  ${chalk.blueBright('history')}.............. type a country name to show stats for that country
  ${chalk.blueBright('version')} ............ show app version
  ${chalk.blueBright('help')} ............... show help menu for a command
`,

  now: `//...
        `,
  forecast: `//...
        `,
  config: `//...
        `,
}

async function help(args) {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  console.log(menus[subCmd] || menus.main)
}

module.exports = help;