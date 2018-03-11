'use strict';

module.exports = function notUnassignedStatusCode(statusCode) {
    return statusCode.description !== 'Unassigned';
};
