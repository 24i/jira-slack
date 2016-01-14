/**
 * creates a JIRA issue object
 * @param  {object} response The JIRA hook response body
 * @return {object}          Object containing:
 *                                  - ID (object.id)
 *                                  - Issue key (object.key)
 *                                  - Issue URL (object.url)
 *                                  - Issue description (object.description)
 *                                  - Issue status (object.status)
 *                                  - Issue type (object.type)
 *                                  - Assignee (object.assignee)
 *                                  - Reporter (object.reporter)
 *                                  - Project (object.project)
 */
module.exports = function (response) {
    'use strict';

    let util = require('../util/jira'),
        user = require('./user'),
        parseProject,
        parseStatus,
        parseType;

    parseStatus = function (status) {
        if (!status || typeof status.name !== 'string') {
            return false;
        }

        return response.fields.status.name.toLowerCase();
    };

    parseType = function (type) {
        if (!type) {
            return false;
        }
        return type.name;
    };

    /**
     * parses the project response
     * @param  {object} project The project response object
     * @return {boolean|object}         The parsed project object or false if no project is given
     */
    parseProject = function (project) {
        if (!project) {
            return false;
        }

        return {
            id: project.id,
            name: project.name,
            key: project.key,
            url: util.getProjectURL(project.key)
        };
    };

    if (typeof response === 'string') {
        response = JSON.parse(response);
    }

    return {
        id: response.id,
        key: response.key,
        url: util.getIssueURL(response.key),
        description: response.fields.summary,
        status: parseStatus(response.fields.status),
        type: parseType(response.fields.issuetype),

        assignee: user(response.fields.assignee),
        reporter: user(response.fields.reporter),
        project: parseProject(response.fields.project)
    };

};