'use strict';

let https = require('https'),
    url = require('url'),
    message = require('./slack/message'),
    attachment = require('./slack/attachment'),
    colors;

colors = {
    'open': '#E1715B',
    'closed': '#57BF57'
};

module.exports = {

    createMessage: function (opts) {
        let issue = opts.issue,
            msg = message(opts.text + ' <' + issue.url + '|' + issue.key + '>'),
            att = attachment(),
            reporter = issue.reporter,
            assignee = issue.assignee;

        att.addField('Description', issue.description, false);
        if (issue.reporter) {
            att.addField(
                'Reporter',
                '<mailto:' + reporter.getEmail() + '|' + reporter.getName() + '>'
            );
        }
        if (issue.assignee) {
            att.addField(
                'Assignee',
                '<mailto:' + assignee.getEmail() + '|' + assignee.getName() + '>'
            );
        }

        if (opts.color) {
            att.setColor(opts.color);
        }

        if (issue.project && process.env['JIRA_SLACK_PROJECT_' + issue.project.key]) {
            msg.setChannel('#' + process.env['JIRA_SLACK_PROJECT_' + issue.project.key]);
        }

        msg.addAttachment(att);

        return msg;
    },

    created: function (evnt) {
        let msg = this.createMessage({
            text: evnt.user.getName() + ' created Issue',
            issue: evnt.issue,
            color: colors.open
        });
        this.send(msg);
    },

    updated: function (evnt) {
        let issue = evnt.issue,
            opts = {
                text: evnt.user.getName() + ' updated Issue',
                issue: issue
            };

        if (colors[issue.status]) {
            opts.color = colors[issue.status];
        }

        let msg = this.createMessage(opts);
        this.send(msg);
    },

    deleted: function (evnt) {
        let msg = this.createMessage({
            text: evnt.user.getName() + ' deleted Issue',
            issue: evnt.issue
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