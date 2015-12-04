'use strict';

let JasmineRunner = require('jasmine'),
    jasmine = new JasmineRunner();

require('dotenv').config({
    path: __dirname + '/.env'
});

jasmine.loadConfigFile('tests/jasmine.json');

jasmine.onComplete(function(passed) {
    if(passed) {
        process.exit(0);
    } else {
        process.exit(1);
    }
});

jasmine.execute();