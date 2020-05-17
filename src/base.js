const request = require('request-promise');

module.exports = function execute({ URL, method, body, headers, query, form }) {
    let option = {
        method,
        headers,
        uri: URL,
        body,
        form,
        json: true,
        qs: query
    }
    return request(option).promise()
        .then((result) => {
            return result;
        })
        .catch((error) => {
            return error;;
        });
}