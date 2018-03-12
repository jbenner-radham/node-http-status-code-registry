http-status-code-registry
=========================
[![npm](https://img.shields.io/npm/v/http-status-code-registry.svg?)](https://www.npmjs.com/package/http-status-code-registry)
[![node](https://img.shields.io/node/v/http-status-code-registry.svg?)](https://nodejs.org/)
[![build](https://img.shields.io/travis/jbenner-radham/node-http-status-code-registry.svg?)](https://travis-ci.org/jbenner-radham/node-http-status-code-registry)
[![license](https://img.shields.io/github/license/jbenner-radham/node-http-status-code-registry.svg?)](LICENSE)

Fetches the HTTP status codes from the [IANA registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml).

Install
-------
```sh
$ yarn add http-status-code-registry # Or alternatively: `npm install http-status-code-registry`
```

Usage
-----
```js
'use strict';

const httpStatusCodeRegistry = require('http-status-code-registry');

(async () => {
    try {
        console.log(await httpStatusCodeRegistry());
    } catch (e) {
        console.error(e);
    }
})();
```

Testing
-------
```sh
$ yarn test # Or alternatively: `npm test`
```

License
-------
The MIT License (Expat). See the [license file](LICENSE) for details.
