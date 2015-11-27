'use strict';

let EventEmitter = require('events'),
    jiraEvent = require('./jira/event'),
    util = require('util'),
    listener,
    parseType;

listener = new EventEmitter();

parseType = function (hookType) {
    return hookType.replace(/jira\:([a-z]+)\_([a-z]+)/, '$1.$2');
};

listener.receive = function (response) {
    let evnt;

    response = JSON.parse(response);
    evnt = jiraEvent(response);

    this.emit(parseType(response.webhookEvent), evnt);
}

module.exports = listener;