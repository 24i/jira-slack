'use strict';

module.exports = function (text) {
    let values = {
            text: text
        },
        slackAttachment;

    slackAttachment = {

        /**
         * sets the attachment text
         * @param {string} text The text you want to set
         */
        setText: function (text) {
            values.text = text;
        },

        /**
         * gets the attachment text
         * @return {string} The attachment text
         */
        getText: function () {
            return values.text;
        }

    };

    return slackAttachment;
}