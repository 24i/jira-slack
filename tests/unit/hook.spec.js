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
        spyOn(hook, 'send');
        hook.created(evnt);
        expect(hook.send).toHaveBeenCalled();
    });

    it('should be able to send an issue updated message', function () {
        spyOn(hook, 'send');
        hook.updated(evnt);
        expect(hook.send).toHaveBeenCalled();
    });

    it('should be able to send an issue deleted message', function () {
        spyOn(hook, 'send');
        hook.deleted(evnt);
        expect(hook.send).toHaveBeenCalled();
    });

});