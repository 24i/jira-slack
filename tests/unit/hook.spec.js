describe('receiver test suite', function () {
    'use strict';

    let http = require('http'),
        hook = require('../../src/hook'),
        message = require('../../src/slack/message'),
        response = require('../responses/jira/issue.json'),
        issue = require('../../src/jira/issue')(response);

    beforeEach(function () {
        spyOn(http, 'request').and.callThrough();
    });

    it('should be able to send a message', function () {
        let msg = message('basic message'),
            req = hook.send(msg);

        expect(http.request).toHaveBeenCalledWith({
            method: 'POST',
            protocol: 'http:',
            host: 'localhost',
            path: '/slack-hook',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    });

    it('should be able to send an issue created message', function () {
        spyOn(hook, 'send');
        hook.created(issue);
        expect(hook.send).toHaveBeenCalled();
    });

});