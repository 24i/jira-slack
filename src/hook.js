'use strict';

let http = require('http'),
    url = require('url'),
    message = require('./slack/message'),
    attachment = require('./slack/attachment');

module.exports = {

    created: function (issue) {
        let msg = message(issue.key);
        this.send(msg);
    },

    send: function (msg) {
        let slackUrl = url.parse(process.env.SLACK_HOOK_URL),
            request;

        request = http.request({
            method: 'POST',
            protocol: slackUrl.protocol,
            host: slackUrl.host,
            path: slackUrl.path,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        request.write(msg.toJSON());
        request.end();

        return request;
    }

};