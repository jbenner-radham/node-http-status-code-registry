#!/usr/bin/env node

'use strict';

const httpStatusCodeRegistry = require('./lib');

(async () => {
    try {
        console.log(await httpStatusCodeRegistry());
    } catch (e) {
        console.error(e);
    }
})();
