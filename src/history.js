const { hist } = require('./utils');

module.exports = {
    handler: async function getCountriesAffected() {

        const data = await hist();
        console.log(`This is the list of ${data.length} countries affected => ${data}`);
    }
}
