describe('Slack attachment test suite', function () {
    'use strict';

    let slackAttachment = require('../../../src/slack/attachment');

    it('should be able to create an attachment', function () {
        let message = 'A **formatted** message',
            attachment = slackAttachment(message);

        expect(attachment).not.toBeUndefined();
        expect(attachment.getText()).toBe(message);
    });

    it('should have a sanitized fallback by default', function () {
        let message = 'A **formatted** message';
        expect(slackAttachment(message).getFallback()).toBe('A formatted message');
    });

    it('should be able to set the atttachment color', function () {
        let attachment = slackAttachment();

        attachment.setColor('#000000');
        expect(attachment.getColor()).toBe('#000000');
    });

    it('should be able to add fields', function () {
        let attachment = slackAttachment(),
            secondAttachment = slackAttachment();

        attachment.addField('priority', 'high');
        expect(attachment.getFields()).toEqual([{
            'title': 'priority',
            'value': 'high',
            'short': true
        }]);

        // Non-short field
        secondAttachment.addField('description','a description', false);
        expect(secondAttachment.getFields()).toEqual([{
            'title': 'description',
            'value': 'a description',
            'short': false
        }]);
    });

    it('should be able to add multiple fields', function () {
        let attachment = slackAttachment();

        attachment.addFields([{
            title: 'first title',
            value: 'first value'
        }, {
            title: 'second title',
            value: 'second value',
            shortValue: false
        }]);

        expect(attachment.getFields()).toEqual([{
            'title': 'first title',
            'value': 'first value',
            'short': true
        }, {
            'title': 'second title',
            'value': 'second value',
            'short': false
        }]);
    });

});