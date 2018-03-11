'use strict';

const got = require('got');
const statusCodeFactory = require('./status-code-factory');
const notUnassignedStatusCode = require('./not-unassigned-status-code');

module.exports = async function httpStatusCodeRegistry() {
    const statusCodesUrl = 'https://www.iana.org/assignments/http-status-codes';
    const response = await got(`${statusCodesUrl}/http-status-codes-1.csv`);
    const csv = response.body.trim();
    const getLines = (str) => str.split('\r\n');
    const statusCodes = getLines(csv).slice(1)
        .map(statusCodeFactory)
        .filter(notUnassignedStatusCode);

    return statusCodes;
};
