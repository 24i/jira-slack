module.exports = function (response) {
    'use strict';

    let issueParser = require('./issue');

    return {
        date: (new Date(parseInt(response.timestamp))),
        type: response.event || 'updated',
        issue: issueParser(response.issue)
    };

};