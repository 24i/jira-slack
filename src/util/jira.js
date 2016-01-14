module.exports = {

    /**
     * gets the JIRA base URL
     * @return {string} The configured JIRA url
     */
    getBaseURL: function () {
        return process.env.JIRA_URL;
    },

    /**
     * gets an URL for a JIRA project
     * @param  {string} key The project key
     * @return {string}     The JIRA project URL
     */
    getProjectURL: function (key) {
        return this.getBaseURL() + '/browse/' + key;
    },

    /**
     * gets an URL for a JIRA issue
     * @param  {string} key The issue key
     * @return {string}     The JIRA issue URL
     */
    getIssueURL: function (key) {
        return this.getBaseURL() + '/browse/' + key;
    }

};