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

    /**
     * creates a new message to be sent to the slack hook
     * @param {object} opts options object
     * @param {Issue} opts.issue The issue which is related to this message
     * @param {User} opts.reporter The User who has reported the issue
     * @param {User} opts.assignee The User which is assigned to the issue
     * @return {Message}      Returns a filled message ready to be sent
     */
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

    /**
     * create and send a message for a newly created issue
     * @param  {object} evnt The JIRA event which was captured
     */
    created: function (evnt) {
        let msg = this.createMessage({
            text: evnt.user.getName() + ' created Issue',
            issue: evnt.issue,
            color: colors.open
        });
        this.send(msg);
    },

    /**
     * create and send a message for an updated JIRA issue
     * @param  {object} evnt The JIRA event which was captured
     */
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

    /**
     * create and send a message for a deleted JIRA issue
     * @param  {object} evnt The JIRA event which was captured
     */
    deleted: function (evnt) {
        let msg = this.createMessage({
            text: evnt.user.getName() + ' deleted Issue',
            issue: evnt.issue
        });
        this.send(msg);
    },

    /**
     * sends a message to the Slack hook
     * @param  {Message} msg The message you want to send
     * @return {Request}     The generated HTTPS request
     */
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