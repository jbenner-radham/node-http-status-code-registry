'use strict';

const httpStatusCodeRegistry = require('../');
const {any} = jasmine;

describe('http-status-code-registry', function () {
    beforeEach(function () {
        /**
         * Sometimes the builds run slow on Travis-CI so crank up the timeout
         * just in case.
         *
         * @see https://docs.travis-ci.com/user/environment-variables#Default-Environment-Variables
         */
        if (process.env.TRAVIS === 'true') {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000;
        }
    });

    it('is a function', function () {
        expect(httpStatusCodeRegistry).toEqual(any(Function));
    });

    it('returns a promise', function () {
        expect(httpStatusCodeRegistry()).toEqual(any(Promise));
    });

    it('returns a promise containing an array', async function () {
        expect(await httpStatusCodeRegistry()).toEqual(any(Array));
    });
});
