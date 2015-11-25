describe('Slack attachment test suite', function () {
    'use strict';

    let slackAttachment = require('../../../src/slack/attachment');

    it('should be able to create an attachment', function () {
        let message = 'A **formatted** message',
            attachment = slackAttachment(message);

        expect(attachment).not.toBeUndefined();
        expect(attachment.getText()).toBe(message);
    });

});