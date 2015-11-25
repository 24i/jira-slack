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

        /**
         * sets the message icon URL
         * @param {string} url Icon URL you want to use
         */
        setIconUrl: function (url) {
            values.icon_url = url;
        },

        /**
         * gets the message icon URL
         * @return {string} The icon URL
         */
        getIconUrl: function () {
            return values.icon_url || false;;
        },

        /**
         * add an attachment to the message
         * @param {object} attachment An attachment object
         */
        addAttachment: function (attachment) {
            if (Object.prototype.toString.call(values.attachments)) {
                values.attachments = [];
            }
            values.attachments.push(attachment);
        },

        /**
         * get all attachments for this message
         * @return {array} Array containing attachments
         */
        getAttachments: function () {
            return values.attachments || [];
        },

        /**
         * generate JSON for the message
         * @return {string} The JSON message payload
         */
        toJSON: function () {
            return JSON.stringify(values);
        }

    };

    return slackMessage;
};