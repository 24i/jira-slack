describe('receiver test suite', function () {
    'use strict';

    let https = require('https'),
        hook = require('../../src/hook'),
        message = require('../../src/slack/message'),
        response = require('../responses/jira/event'),
        evnt = require('../../src/jira/event')(response);

    beforeEach(function () {
        spyOn(https, 'request').and.callThrough();
    });

    it('should be able to send a message', function () {
        let msg = message('basic message'),
            req = hook.send(msg);

        expect(https.request).toHaveBeenCalledWith({
            method: 'POST',
            protocol: 'https:',
            host: 'localhost',
            path: '/slack-hook',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    });

    it('should be able to send an issue created message', function () {
        let msg;

        spyOn(hook, 'send');
        spyOn(hook, 'createMessage').and.callThrough();
        hook.created(evnt);

        msg = hook.createMessage.calls.mostRecent().returnValue;
        expect(msg.getText()).toBe('John Doe created Issue <https://jira.com/browse/EX-1|EX-1>');
        expect(hook.send).toHaveBeenCalled();
    });

    it('should be able to send an issue updated message', function () {
        let msg;

        spyOn(hook, 'send');
        spyOn(hook, 'createMessage').and.callThrough();
        hook.updated(evnt);

        msg = hook.createMessage.calls.mostRecent().returnValue;
        expect(msg.getText()).toBe('John Doe updated Issue <https://jira.com/browse/EX-1|EX-1>');
        expect(hook.send).toHaveBeenCalled();
    });

    it('should be able to send an issue deleted message', function () {
        let msg;

        spyOn(hook, 'send');
        spyOn(hook, 'createMessage').and.callThrough();
        hook.deleted(evnt);

        msg = hook.createMessage.calls.mostRecent().returnValue;
        expect(msg.getText()).toBe('John Doe deleted Issue <https://jira.com/browse/EX-1|EX-1>');
        expect(hook.send).toHaveBeenCalled();
    });

    it('should not have a specific channel whe the project is not mapped', function () {
        let msg;

        evnt.issue.project.key = 'EXMPL';
        spyOn(hook, 'send');
        spyOn(hook, 'createMessage').and.callThrough();
        hook.created(evnt);

        msg = hook.createMessage.calls.mostRecent().returnValue;
        expect(msg.getChannel()).toBe(false);
        evnt.issue.project.key = 'EX';
    });

    it('should have a specific channel when a variable is available', function () {
        let msg;

        spyOn(hook, 'send');
        spyOn(hook, 'createMessage').and.callThrough();
        hook.created(evnt);

        msg = hook.createMessage.calls.mostRecent().returnValue;
        expect(msg.getChannel()).toBe('#example-channel');
    });

});
