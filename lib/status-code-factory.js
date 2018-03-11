'use strict';

module.exports = function statusCodeFactory(csvLine) {
    const radix = 10;
    const dequote = (str) => str.replace(/"/g, '');
    const firstCommaIndex = csvLine.indexOf(',');
    const secondCommaIndex = csvLine.indexOf(',', firstCommaIndex + 1);

    return {
        value: parseInt(csvLine.slice(0, firstCommaIndex), radix),
        description: csvLine.slice(firstCommaIndex + 1, secondCommaIndex),
        reference: dequote(csvLine.slice(secondCommaIndex + 1))
    };
};
