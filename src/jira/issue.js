module.exports = function (response) {
    'use strict';

    let util = require('../util/jira'),
        parsePerson,
        parseProject,
        parseStatus,
        parseType;

    parsePerson = function (person) {
        if (!person) {
            return false;
        }

        return {
            email: person.emailAddress,
            name: person.displayName
        };
    };

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
        description: response.fields.description,
        status: parseStatus(response.fields.status),
        type: parseType(response.fields.issuetype),

        assignee: parsePerson(response.fields.assignee),
        reporter: parsePerson(response.fields.reporter),
        project: parseProject(response.fields.project)
    };

};