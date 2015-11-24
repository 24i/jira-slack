module.exports = {

    getBaseURL: function () {
        return process.env.JIRA_URL;
    },

    getProjectURL: function (key) {
        return this.getBaseURL() + '/browse/' + key;
    },

    getIssueURL: function (key) {
        return this.getBaseURL() + '/browse/' + key;
    }

};