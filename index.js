#!/usr/bin/env node

'use strict';

const httpStatusCodeRegistry = require('./lib');

(async () => {
    try {
        console.log(JSON.stringify(await httpStatusCodeRegistry(), null, 4));
    } catch (e) {
        console.error(e);
    }
})();
