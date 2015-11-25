describe('Slack message test suite', function () {
    'use strict';

    let slackMessage = require('../../../src/slack/message');

    it('should be able to create a basic message', function () {
        let message = slackMessage('basic message');

        expect(message.getText()).toBe('basic message');
    });

    it('should be able to set the text on the message', function () {
        let message = slackMessage('basic message');

        expect(message.getText()).toBe('basic message');
        message.setText('other message');
        expect(message.getText()).toBe('other message');
    });

    it('should be able to set a channel on the message', function () {
        let channel = '#internal-channel',
            user = '@user',
            message = slackMessage('basic message');

        message.setChannel(channel);

        expect(message.getChannel()).not.toBeUndefined();
        expect(message.getChannel()).toBe(channel);

        message.setChannel(user);

        expect(message.getChannel()).toBe(user);
    });

    it('should be able to set the username for a message', function () {
        let username = 'JIRA Tracker',
            message = slackMessage('basic message');

        message.setUsername(username);
        expect(message.getUsername()).toBe(username);
    });

    it('should be able to set an icon url', function () {
        let icon = 'http://url.com/icon.png',
            message = slackMessage('basic message');

        message.setIconUrl(icon);
        expect(message.getIconUrl()).toBe(icon);
    });

});