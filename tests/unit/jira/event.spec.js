describe('JIRA event parser test suite', function () {
    'use strict';

    let base = '../../../',
        parser = require(base + 'src/jira/event'),
        eventData = require(base + 'tests/responses/jira/event'),
        timestamp = Math.floor(Date.now() / 1000);

    it('should be able to parse an event', function () {
        let event = parser(eventData);

        expect(event.date instanceof Date).toBe(true);
        expect(event.date.getFullYear()).toBe((new Date()).getFullYear());
        expect(event.type).toBe('updated');

        expect(event.issue).not.toBeUndefined();
        expect(event.user).not.toBeUndefined();
    });

});