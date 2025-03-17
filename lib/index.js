'use strict';

const HttpStatusCode = require('./HttpStatusCode');

module.exports = async function httpStatusCodeRegistry() {
    const statusCodesUrl = 'https://www.iana.org/assignments/http-status-codes';
    const response = await fetch(`${statusCodesUrl}/http-status-codes-1.csv`);
    const csv = (await response.text()).trim();
    const getLines = (str) => str.split('\r\n');
    const notHeaderLine = (_, index) => index !== 0;

    return getLines(csv)
        .filter(notHeaderLine)
        .map(HttpStatusCode.factory)
        .filter(HttpStatusCode.notUnassigned);
};
