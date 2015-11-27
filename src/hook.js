'use strict';

let https = require('https'),
    url = require('url'),
    message = require('./slack/message'),
    attachment = require('./slack/attachment');

module.exports = {

    created: function (issue) {
        let msg = message('Issue created <' + issue.url + '|' + issue.key + '>'),
            att = attachment();

        att.addField('Description', issue.description, false);
        msg.addAttachment(att);

        this.send(msg);
    },

    updated: function (issue) {
        let msg = message('Issue updated <' + issue.url + '|' + issue.key + '>'),
            att = attachment();

        att.addField('Description', issue.description, false);
        msg.addAttachment(att);

        this.send(msg);
    },

    deleted: function (issue) {
        let msg = message('Issue deleted <' + issue.url + '|' + issue.key + '>'),
            att = attachment();

        att.addField('Description', issue.description, false);
        msg.addAttachment(att);

        this.send(msg);
    },

    send: function (msg) {
        let slackUrl = url.parse(process.env.SLACK_HOOK_URL),
            request;

        request = https.request({
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