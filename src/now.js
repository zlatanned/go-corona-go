const Table = require('cli-table3');
const { stats } = require('./utils');

module.exports = {
    handler: async function now() {

        const data = await stats();
        const time = new Date(data.time);

        const table = new Table({
            head: ['Country', 'Cases: New', 'Active', 'Critical', 'Recovered', 'Total', 'Deaths: New', 'Deaths: Total', 'Tests', 'Last Updated At'],
            colWidths: [18, 13, 15, 12, 18, 20, 13, 15, 20, 25],
            wordWrap: true
        });
        table.push([
            data.country,
            data.cases.new,
            data.cases.active,
            data.cases.critical,
            data.cases.recovered,
            data.cases.total,
            data.deaths.new,
            data.deaths.total,
            data.tests.total,
            time.toLocaleString()
        ]);
        console.log(table.toString());
    }
}
