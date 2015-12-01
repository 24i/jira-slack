module.exports = function (user) {
    'use strict';

    let name = user.displayName,
        userName = user.key,
        email = user.emailAddress;

    return {

        getName: function () {
            return name;
        },

        getUsername: function () {
            return userName;
        },

        getEmail: function () {
            return email;
        }

    };
};