/**
 * Creates a new JIRA event
 * @param  {object} response The JIRA hook response body
 * @return {object}          Event object containing date, type, issue and user
 */
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