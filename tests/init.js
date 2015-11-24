'use strict';

let JasmineRunner = require('jasmine'),
    jasmine = new JasmineRunner();

jasmine.loadConfigFile('tests/jasmine.json');

jasmine.onComplete(function(passed) {
    if(passed) {
        process.exit(0);
    } else {
        process.exit(1);
    }
});

jasmine.execute();