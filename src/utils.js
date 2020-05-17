let execute = require('./base');
const chalk = require('chalk');

function stats() {
    
    return execute({
        method: 'GET',
        URL: process.env.BASE_URL + 'statistics',
        headers: {
            'x-rapidapi-key': process.env.API_KEY
        },
        query: { 
            country: process.argv[3] || "India"
        }
    })
        .then((res) => {
            return res.response[0];
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
}

async function hist() {
    if (process.argv[3]){
        return {error: 'Bad Request. Cannot pass second argument'};
    }
    return execute({
        method: 'GET',
        URL: process.env.BASE_URL + 'countries',
        headers: {
            'x-rapidapi-key': process.env.API_KEY
        },
    })
        .then((res) => {
            return res.response;
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
}

function validateApiKey(apiKey) {
    if (!apiKey || apiKey.length !== 50) {
        console.log(apiKey)
      console.error(
        chalk.redBright(
          `API Key for Covid live data service has not been set up yet.`
        )
      );
      console.warn(
        `Please use command ${chalk.greenBright(
          'covid-data config --apiKey'
        )} to save your API key.
          `
      );
      return false;
    }
    return true;
  }

module.exports = {stats, hist, validateApiKey};

