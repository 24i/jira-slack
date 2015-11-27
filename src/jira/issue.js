module.exports = function (response) {
    'use strict';

    let util = require('../util/jira'),
        parseProject,
        parseUrl;

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

        project: parseProject(response.fields.project)
    };

};