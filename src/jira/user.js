module.exports = function (user) {
    'use strict';

    let values;

    if (!user) {
        return false;
    }

    values = {
        name: user.displayName,
        username: user.key,
        email: user.emailAddress
    };

    return {

        getName: function () {
            return values.name;
        },

        getUsername: function () {
            return values.username;
        },

        getEmail: function () {
            return values.email;
        }

    };
};