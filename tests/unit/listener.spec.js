describe('listener test suite', function () {
    'use strict';

    let issue = require('../responses/jira/issue.json'),
        createResponse,
        listener;

    createResponse = function (type) {
        return '{"webhookEvent":"jira:issue_' + type + '", "issue":' + JSON.stringify(issue) + '}';
    };

    beforeEach(function () {
        listener = require('../../src/listener');
    });

    afterEach(function () {
        listener = null;
    });

    it('should be able to fire an issue created event', function (done) {
        listener.on('issue.created', function (evnt) {
            expect(evnt.issue).not.toBeUndefined();
            done();
        });
        listener.receive(createResponse('created'));
    });

    it('should be able to fire an issue updated event', function (done) {
        listener.on('issue.updated', function (evnt) {
            expect(evnt.issue).not.toBeUndefined();
            done();
        });
        listener.receive(createResponse('updated'));
    });

    it('should be able to fire an issue deleted event', function (done) {
        listener.on('issue.deleted', function (evnt) {
            expect(evnt.issue).not.toBeUndefined();
            done();
        });
        listener.receive(createResponse('deleted'));
    });

});