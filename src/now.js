const Table = require('cli-table3');
const { stats } = require('./utils');

module.exports = {
    handler: async function now(args) {

        const data = await stats();

        const table = new Table({
            head: ['Country', 'Cases: New', 'Active', 'Critical', 'Recovered', 'Total', 'Deaths: New', 'Deaths: Total', 'Tests', 'Date', 'Time'],
            colWidths: [15, 13, 10, 12, 7, 15, 13, 15, 15, 30],
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
            data.day,
            data.time
        ]);
        console.log(table.toString());
    }
}


