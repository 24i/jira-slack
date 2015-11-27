(function () {
    'use strict';

    let express = require('express'),
        listener = require('./src/listener'),
        hook = require('./src/hook'),
        app,
        server;

    app = express();

    // Little bit of middleware to get the raw request body
    app.use(function (req, res) {
        let data = '';

        req.setEncoding('utf8');
        req.on('data', function (chunk) {
            data += chunk;
        });

        req.on('end', function () {
            req.body = data;
            next();
        });
    })

    // Propagate request bodies through to the listener
    app.post('/', function (req, res, next) {
        listener.receive(req.body);
    });

    // Run our webhook server
    server = app.listen(process.env.EXPRESS_PORT || 3000, function () {

        listener.on('issue.created', hook.created.bind(hook));

        process.stdout.write('Server running!\n');
    });

}());