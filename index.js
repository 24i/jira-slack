(function () {
    'use strict';

    let express = require('express'),
        listener = require('./src/listener'),
        hook = require('./src/hook'),
        app,
        server;

    app = express();

    // Little bit of middleware to get the raw request body
    app.use(function (req, res, next) {
        let data = '';

        req.setEncoding('utf8');
        req.on('data', function (chunk) {
            data += chunk;
        });

        req.on('end', function () {
            req.body = unescape(data);
            next();
        });
    });

    app.get('/', function (req, res) {
        res.send('Welcome to the JIRA slack bot');
    });

    // Propagate request bodies through to the listener
    app.post('*', function (req, res) {
        process.stdout.write(req.body);
        listener.receive(req.body);
        res.send('OK');
    });

    // Run our webhook server
    server = app.listen(process.env.PORT || 3000, function () {

        listener.on('issue.created', function (evnt) {
            hook.created(evnt.issue);
        });

        process.stdout.write('Server running!\n');
    });

}());