module.exports = function (response) {
    'use strict';

    let issue = require('./issue'),
        user = require('./user');

    return {
        date: (new Date(parseInt(response.timestamp))),
        type: response.event || 'updated',
        issue: issue(response.issue),
        user: user(response.user)
    };

};