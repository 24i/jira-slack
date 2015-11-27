'use strict';

/**
 * sanitizes the input string
 * @param  {string} text The input string
 * @return {string}      The sanitized string
 */
let sanitize = function (text) {
    // TODO: better sanitizing, now it only removes non-alphanumeric characters
    return text.replace(/[^a-zA-Z\d\s]/g, '');
};

module.exports = function (text) {
    let values = {},
        slackAttachment;

    if (typeof text !== 'undefined') {
        values = {
            text: text,
            fallback: sanitize(text)
        };
    }

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
        },

        /**
         * sets the attachment fallback
         * @param {string} fallback The fallback string
         */
        setFallback: function (fallback) {
            values.fallback = sanitize(fallback);
        },

        /**
         * gets the attachment fallback
         * @return {string} The attachment fallback
         */
        getFallback: function () {
            return values.fallback;
        },

        /**
         * sets the attachment color
         * @param {string} color The color in hex value
         */
        setColor: function (color) {
            values.color = color;
        },

        /**
         * gets the attachment color
         * @return {string} The color in hex value
         */
        getColor: function () {
            return values.color;
        },

        /**
         * adds an attachment field
         * @param {string} title      The field title
         * @param {string} value      The field text
         * @param {boolean} shortValue Whether the field can be short or not
         */
        addField: function (title, value, shortValue) {
            if (Object.prototype.toString.call(values.fields) !== '[object Array]') {
                values.fields = [];
            }

            if (typeof shortValue === 'undefined') {
                shortValue = true;
            }

            values.fields.push({
                'title': title,
                'value': value,
                'short': shortValue
            });
        },

        /**
         * adds multiple fields at once
         * @param {array} fields Array containing multiple fields
         */
        addFields: function (fields) {
            for (let field of fields) {
                this.addField(field.title, field.value, field.shortValue);
            }
        },

        /**
         * gets the attachment fields
         * @return {array} All attachment fields
         */
        getFields: function () {
            return values.fields || [];
        },

        /**
         * gets the attachment values
         * @return {object} Object with attachment values
         */
        getValues: function () {
            return values;
        }

    };

    return slackAttachment;
}