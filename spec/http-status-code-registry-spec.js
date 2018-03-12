'use strict';

const httpStatusCodeRegistry = require('../');
const {any} = jasmine;

describe('http-status-code-registry', function () {
    it('is a function', function () {
        expect(httpStatusCodeRegistry).toEqual(any(Function));
    });

    it('returns a promise', function () {
        expect(httpStatusCodeRegistry()).toEqual(any(Promise));
    });
});
