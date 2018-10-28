'use strict';

const got = require('got');
const HttpStatusCode = require('./HttpStatusCode');

module.exports = async function httpStatusCodeRegistry() {
    const statusCodesUrl = 'https://www.iana.org/assignments/http-status-codes';
    const response = await got(`${statusCodesUrl}/http-status-codes-1.csv`);
    const csv = response.body.trim();
    const getLines = (str) => str.split('\r\n');
    const notHeaderLine = (_, index) => index !== 0;

    return getLines(csv)
        .filter(notHeaderLine)
        .map(HttpStatusCode.factory)
        .filter(HttpStatusCode.notUnassigned);
};
