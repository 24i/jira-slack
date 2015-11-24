(function () {
    'use strict';

    let express = require('express'),
        app,
        server;

    app = express();

    // Run our webhook server
    server = app.listen(process.env.EXPRESS_PORT || 3000, function () {
        process.stdout.write('Server running!\n');
    });
}());