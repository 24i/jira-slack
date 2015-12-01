module.exports = {
    "timestamp": 1448636028289,
    "webhookEvent": "jira:issue_updated",
    "user": {
        "self": "https://example.com/rest/api/2/user?username=john.doe",
        "name": "john.doe",
        "key": "john.doe",
        "emailAddress": "john.doe@example.com",
        "avatarUrls": {
            "48x48": "https://example.com/secure/useravatar?avatarId=10122",
            "24x24": "https://example.com/secure/useravatar?size=small&avatarId=10122",
            "16x16": "https://example.com/secure/useravatar?size=xsmall&avatarId=10122",
            "32x32": "https://example.com/secure/useravatar?size=medium&avatarId=10122"
        },
        "displayName": "John Doe",
        "active": true,
        "timeZone": "Europe/Berlin"
    },
    "issue": {
        "id": "10002",
        "self": "https://example.com/rest/api/2/issue/10002",
        "key": "EX-1",
        "fields": {
            "issuetype": {
                "self": "https://example.com/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "https://example.com/secure/viewavatar?size=xsmall&avatarId=11818&avatarType=issuetype",
                "name": "Task",
                "subtask": false,
                "avatarId": 11818
            },
            "timespent": null,
            "project": {
                "self": "https://example.com/rest/api/2/project/10000",
                "id": "10000",
                "key": "EX",
                "name": "EX",
                "avatarUrls": {
                    "48x48": "https://example.com/secure/projectavatar?pid=10000&avatarId=11501",
                    "24x24": "https://example.com/secure/projectavatar?size=small&pid=10000&avatarId=11501",
                    "16x16": "https://example.com/secure/projectavatar?size=xsmall&pid=10000&avatarId=11501",
                    "32x32": "https://example.com/secure/projectavatar?size=medium&pid=10000&avatarId=11501"
                },
                "projectCategory": {
                    "self": "https://example.com/rest/api/2/projectCategory/10101",
                    "id": "10101",
                    "description": "",
                    "name": "External"
                }
            },
            "fixVersions": [],
            "customfield_10110": null,
            "aggregatetimespent": null,
            "resolution": null,
            "customfield_10510": null,
            "customfield_10104": null,
            "customfield_10105": null,
            "customfield_10106": null,
            "customfield_10502": null,
            "customfield_10107": null,
            "customfield_10503": null,
            "customfield_10504": null,
            "customfield_10109": null,
            "customfield_10505": null,
            "customfield_10506": null,
            "resolutiondate": null,
            "customfield_10507": null,
            "customfield_10508": null,
            "customfield_10509": null,
            "workratio": 0,
            "lastViewed": "2015-11-27T15:50:57.432+0100",
            "watches": {
                "self": "https://example.com/rest/api/2/issue/EX-154/watchers",
                "watchCount": 1,
                "isWatching": false
            },
            "created": "2014-12-18T11:38:35.589+0100",
            "customfield_10020": null,
            "customfield_10021": "Not started",
            "priority": {
                "self": "https://example.com/rest/api/2/priority/6",
                "iconUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Diamond_warning_sign.svg/500px-Diamond_warning_sign.svg.png",
                "name": "Medium",
                "id": "6"
            },
            "customfield_10100": null,
            "customfield_10024": null,
            "customfield_10101": null,
            "customfield_10300": null,
            "customfield_10102": null,
            "labels": [],
            "customfield_10103": null,
            "customfield_10016": null,
            "customfield_10017": null,
            "customfield_10018": null,
            "customfield_10019": null,
            "timeestimate": 86400,
            "aggregatetimeoriginalestimate": 86400,
            "versions": [],
            "issuelinks": [{
                "id": "15244",
                "self": "https://example.com/rest/api/2/issueLink/15244",
                "type": {
                    "id": "10001",
                    "name": "Cloners",
                    "inward": "is cloned by",
                    "outward": "clones",
                    "self": "https://example.com/rest/api/2/issueLinkType/10001"
                },
                "outwardIssue": {
                    "id": "21224",
                    "key": "EX-430",
                    "self": "https://example.com/rest/api/2/issue/21224",
                    "fields": {
                        "summary": "Make someting into something different",
                        "status": {
                            "self": "https://example.com/rest/api/2/status/6",
                            "description": "The issue is considered finished, the resolution is correct. Issues which are closed can be reopened.",
                            "iconUrl": "https://example.com/images/icons/statuses/closed.png",
                            "name": "Closed",
                            "id": "6",
                            "statusCategory": {
                                "self": "https://example.com/rest/api/2/statuscategory/3",
                                "id": 3,
                                "key": "done",
                                "colorName": "green",
                                "name": "Done"
                            }
                        },
                        "priority": {
                            "self": "https://example.com/rest/api/2/priority/6",
                            "iconUrl": "http://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Diamond_warning_sign.svg/500px-Diamond_warning_sign.svg.png",
                            "name": "Medium",
                            "id": "6"
                        },
                        "issuetype": {
                            "self": "https://example.com/rest/api/2/issuetype/2",
                            "id": "2",
                            "description": "A new feature of the product, which has yet to be developed.",
                            "iconUrl": "https://example.com/secure/viewavatar?size=xsmall&avatarId=11811&avatarType=issuetype",
                            "name": "Feature",
                            "subtask": false,
                            "avatarId": 11811
                        }
                    }
                }
            }],
            "assignee": {
                "self": "https://example.com/rest/api/2/user?username=john.doe",
                "name": "john.doe",
                "key": "john.doe",
                "emailAddress": "john.doe@example.com",
                "avatarUrls": {
                    "48x48": "https://example.com/secure/useravatar?avatarId=10122",
                    "24x24": "https://example.com/secure/useravatar?size=small&avatarId=10122",
                    "16x16": "https://example.com/secure/useravatar?size=xsmall&avatarId=10122",
                    "32x32": "https://example.com/secure/useravatar?size=medium&avatarId=10122"
                },
                "displayName": "John Doe",
                "active": true,
                "timeZone": "Europe/Berlin"
            },
            "updated": "2015-11-27T15:53:48.282+0100",
            "status": {
                "self": "https://example.com/rest/api/2/status/1",
                "description": "The issue is open and ready for the assignee to start work on it.",
                "iconUrl": "https://example.com/images/icons/statuses/open.png",
                "name": "Open",
                "id": "1",
                "statusCategory": {
                    "self": "https://example.com/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                }
            },
            "components": [],
            "timeoriginalestimate": 86400,
            "description": "We need to make the thing that is now what it is into something completely different!",
            "customfield_10012": null,
            "customfield_10013": null,
            "customfield_10014": null,
            "timetracking": {
                "originalEstimate": "3d",
                "remainingEstimate": "3d",
                "originalEstimateSeconds": 86400,
                "remainingEstimateSeconds": 86400
            },
            "customfield_10015": null,
            "customfield_10401": [],
            "customfield_10402": "The REST API JSON builder is not available via OSGi",
            "customfield_10006": "9223372036854775807",
            "customfield_10600": null,
            "customfield_10007": ["com.atlassian.greenhopper.service.sprint.Sprint@1f643f[id=266,rapidViewId=111,state=CLOSED,name=R0 prio 2 issues,startDate=2015-01-27T21:14:08.567+01:00,endDate=2015-02-10T21:14:00.000+01:00,completeDate=2015-02-17T18:41:57.225+01:00,sequence=266]", "com.atlassian.greenhopper.service.sprint.Sprint@abfa0c[id=318,rapidViewId=111,state=CLOSED,name=R1 Sprint 4,startDate=2015-04-29T14:33:40.764+02:00,endDate=2015-05-13T14:33:00.000+02:00,completeDate=2015-06-02T15:54:24.964+02:00,sequence=318]", "com.atlassian.greenhopper.service.sprint.Sprint@17af215[id=445,rapidViewId=111,state=CLOSED,name=R1 completion pt. 3,startDate=2015-10-05T10:59:50.777+02:00,endDate=2015-10-19T10:59:00.000+02:00,completeDate=2015-10-28T09:27:38.683+01:00,sequence=445]", "com.atlassian.greenhopper.service.sprint.Sprint@1231c8e[id=481,rapidViewId=111,state=ACTIVE,name=Release 1.9.1,startDate=2015-11-06T16:17:51.946+01:00,endDate=2015-11-20T16:17:00.000+01:00,completeDate=<null>,sequence=481]"],
            "customfield_10403": null,
            "customfield_10601": null,
            "customfield_10008": null,
            "customfield_10404": null,
            "attachment": [],
            "aggregatetimeestimate": 86400,
            "summary": "Make something into something different",
            "creator": {
                "self": "https://example.com/rest/api/2/user?username=jane.doe",
                "name": "jane.doe",
                "key": "jane.doe",
                "emailAddress": "jane.doe@example.com",
                "avatarUrls": {
                    "48x48": "https://example.com/secure/useravatar?ownerId=jane.doe&avatarId=13701",
                    "24x24": "https://example.com/secure/useravatar?size=small&ownerId=jane.doe&avatarId=13701",
                    "16x16": "https://example.com/secure/useravatar?size=xsmall&ownerId=jane.doe&avatarId=13701",
                    "32x32": "https://example.com/secure/useravatar?size=medium&ownerId=jane.doe&avatarId=13701"
                },
                "displayName": "Jane Doe",
                "active": true,
                "timeZone": "Europe/Berlin"
            },
            "subtasks": [],
            "reporter": {
                "self": "https://example.com/rest/api/2/user?username=jane.doe",
                "name": "jane.doe",
                "key": "jane.doe",
                "emailAddress": "jane.doe@example.com",
                "avatarUrls": {
                    "48x48": "https://example.com/secure/useravatar?ownerId=jane.doe&avatarId=13701",
                    "24x24": "https://example.com/secure/useravatar?size=small&ownerId=jane.doe&avatarId=13701",
                    "16x16": "https://example.com/secure/useravatar?size=xsmall&ownerId=jane.doe&avatarId=13701",
                    "32x32": "https://example.com/secure/useravatar?size=medium&ownerId=jane.doe&avatarId=13701"
                },
                "displayName": "Jane Doe",
                "active": true,
                "timeZone": "Europe/Berlin"
            },
            "customfield_10000": null,
            "aggregateprogress": {
                "progress": 0,
                "total": 86400,
                "percent": 0
            },
            "customfield_10001": null,
            "customfield_10122": null,
            "customfield_10200": "1|xzzg3g:zzi",
            "customfield_10002": null,
            "customfield_10003": null,
            "customfield_10400": "The REST API JSON builder is not available via OSGi",
            "customfield_10125": null,
            "customfield_10511": null,
            "environment": null,
            "duedate": null,
            "progress": {
                "progress": 0,
                "total": 86400,
                "percent": 0
            },
            "comment": {
                "startAt": 0,
                "maxResults": 1,
                "total": 1,
                "comments": [{
                    "self": "https://example.com/rest/api/2/issue/18832/comment/19633",
                    "id": "19633",
                    "author": {
                        "self": "https://example.com/rest/api/2/user?username=jane.doe",
                        "name": "jane.doe",
                        "key": "jane.doe",
                        "emailAddress": "jane.doe@example.com",
                        "avatarUrls": {
                            "48x48": "https://example.com/secure/useravatar?ownerId=jane.doe&avatarId=13701",
                            "24x24": "https://example.com/secure/useravatar?size=small&ownerId=jane.doe&avatarId=13701",
                            "16x16": "https://example.com/secure/useravatar?size=xsmall&ownerId=jane.doe&avatarId=13701",
                            "32x32": "https://example.com/secure/useravatar?size=medium&ownerId=jane.doe&avatarId=13701"
                        },
                        "displayName": "Jane Doe",
                        "active": true,
                        "timeZone": "Europe/Berlin"
                    },
                    "body": "Issue body",
                    "updateAuthor": {
                        "self": "https://example.com/rest/api/2/user?username=jane.doe",
                        "name": "jane.doe",
                        "key": "jane.doe",
                        "emailAddress": "jane.doe@example.com",
                        "avatarUrls": {
                            "48x48": "https://example.com/secure/useravatar?ownerId=jane.doe&avatarId=13701",
                            "24x24": "https://example.com/secure/useravatar?size=small&ownerId=jane.doe&avatarId=13701",
                            "16x16": "https://example.com/secure/useravatar?size=xsmall&ownerId=jane.doe&avatarId=13701",
                            "32x32": "https://example.com/secure/useravatar?size=medium&ownerId=jane.doe&avatarId=13701"
                        },
                        "displayName": "Jane Doe",
                        "active": true,
                        "timeZone": "Europe/Berlin"
                    },
                    "created": "2015-08-14T11:08:19.531+0200",
                    "updated": "2015-08-14T11:08:19.531+0200"
                }]
            },
            "worklog": {
                "startAt": 0,
                "maxResults": 20,
                "total": 0,
                "worklogs": []
            }
        }
    },
    "changelog": {
        "id": "89928",
        "items": [{
            "field": "description",
            "fieldtype": "jira",
            "from": null,
            "fromString": "This was before",
            "to": null,
            "toString": "This is after"
        }]
    }
}