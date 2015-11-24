describe('JIRA utils test suite', function () {
    'use strict';

    let util = require('../../../src/util/jira'),
        url = process.env.JIRA_URL;

    it('should be able to generate a project URL', function () {
        expect(util.getProjectURL('EXAMPLE')).toBe(url + '/browse/EXAMPLE');
    });

    it('should be able to generate an issue URL', function () {
        expect(util.getIssueURL('EX-1')).toBe(url + '/browse/EX-1');
    });

});