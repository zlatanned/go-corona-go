const Table = require('cli-table3');
const { hist } = require('./utils');

module.exports = {
    handler: async function getCountriesAffected(args) {

        const data = await hist();
        console.log(data);
    }
}