'use strict';

module.exports = function (message) {
    let values = {
            text: message
        },
        slackMessage;

    slackMessage = {

        /**
         * sets the text for this message object
         * @param {string} text The text for this message
         */
        setText: function (text) {
            values.text = text;
        },

        /**
         * gets the text for this message object
         * @return {string} The text for this message
         */
        getText: function () {
            return values.text;
        },

        /**
         * sets the channel for this message object
         * @param {string} channel The slack channel name
         */
        setChannel: function (channel) {
            values.channel = channel;
        },

        /**
         * gets the channel for this message object
         * @return {string|boolean} The channel name or false
         */
        getChannel: function () {
            return values.channel || false;
        },

        /**
         * sets the username for this message object
         * @param {string} username The username you want your message to get
         */
        setUsername: function (username) {
            values.username = username;
        },

        /**
         * gets the username for this message object
         * @return {string|boolean} The username or false
         */
        getUsername: function () {
            return values.username || false;
        },

        setIconUrl: function (url) {
            values.icon_url = url;
        },

        getIconUrl: function () {
            return values.icon_url || false;;
        }

    };

    return slackMessage;
};