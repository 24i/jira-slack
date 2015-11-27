'use strict';

let EventEmitter = require('events'),
    jiraEvent = require('./jira/event'),
    util = require('util'),
    listener,
    parseType;

listener = new EventEmitter();

/**
 * parses the hook type for usage as event name
 *
 * @param  {string} hookType The hook type from the response
 * @return {string}          The new event name
 */
parseType = function (hookType) {
    return hookType.replace(/jira\:([a-z]+)\_([a-z]+)/, '$1.$2');
};

/**
 * receive the response and emit the corresponding event with the
 * issue
 *
 * @param  {string} response The response from the webhook
 */
listener.receive = function (response) {
    let evnt;

    response = JSON.parse(response);
    evnt = jiraEvent(response);

    this.emit(parseType(response.webhookEvent), evnt);
}

module.exports = listener;