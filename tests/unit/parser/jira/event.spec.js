describe('JIRA event parser test suite', function () {
    'use strict';

    let base = '../../../../',
        parser = require(base + 'src/parser/jira/event'),
        issueResponse = require(base + 'tests/responses/jira/issue.json'),
        timestamp = Math.floor(Date.now() / 1000),
        // Fake a JIRA webhook event
        eventData = {
            timestamp: timestamp,
            event: 'created',
            issue: issueResponse
        };

    it('should be able to parse an event', function () {
        let event = parser(eventData);

        expect(event.date instanceof Date).toBe(true);
        expect(event.date.getYear()).toBe((new Date()).getYear());
        expect(event.type).toBe('created');

        expect(event.issue).not.toBeUndefined();
    });

});