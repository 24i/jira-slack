# Contributing to JIRA-Slack

Feel free to contribute to this repository with fixes/features or suggestions.

## How to start developing

**Fork the repository**
```
git clone git@github.com:yourusername/jira-slack.git
cd jira-slack
git remote add upstream git@github.com/24i/jira-slack.git
git checkout -b feature/my-awesome-feature
```

After you've developed the feature you want to contribute make sure your branch is up to date with the upstream master by doing:

```
git fetch upstream
git rebase upstream/master
```

Everything done? Great, time to make a pull request :+1:

## Things to consider when contributing
* Make sure your code passes the existing tests
* When no tests exists for your code please create it
* Document your code