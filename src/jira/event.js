module.exports = function (response) {
    'use strict';

    let issueParser = require('./issue');

    return {
        date: (new Date(parseInt(response.timestamp) * 1000)),
        type: response.event,
        issue: issueParser(response.issue)
    };

};