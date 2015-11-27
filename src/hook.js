'use strict';

let https = require('https'),
    url = require('url'),
    message = require('./slack/message'),
    attachment = require('./slack/attachment'),
    colors;

colors = {
    'open': '#FF0000',
    'closed': '#00FF00'
};

module.exports = {

    createMessage: function (opts) {
        let issue = opts.issue,
            msg = message(opts.text + ' <' + issue.url + '|' + issue.key + '>'),
            att = attachment();

        att.addField('Description', issue.description, false);
        if (issue.reporter) {
            att.addField('Reporter', '<mailto:' + issue.reporter.email + '|' + issue.reporter.name + '>');
        }
        if (issue.assignee) {
            att.addField('Assignee', '<mailto:' + issue.assignee.email + '|' + issue.assignee.name + '>');
        }

        if (opts.color) {
            att.setColor(opts.color);
        }

        msg.addAttachment(att);

        return msg;
    },

    created: function (issue) {
        let msg = this.createMessage({
            text: 'Issue created',
            issue: issue,
            color: colors.open
        });
        this.send(msg);
    },

    updated: function (issue) {
        let opts = {
            text: 'Issue updated',
            issue: issue
        };

        if (colors[issue.status]) {
            opts.color = colors[issue.status];
        }

        let msg = this.createMessage(opts);
        this.send(msg);
    },

    deleted: function (issue) {
        let msg = this.createMessage({
            text: 'Issue deleted',
            issue: issue
        });
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