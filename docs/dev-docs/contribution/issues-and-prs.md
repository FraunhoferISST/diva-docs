# Issues and pull request

We are really excited that you are interested in contributing to DIVA.
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other 
method with the owners of this repository before making a change.

## Creating an issue

In an issue you can propose your ideas or report a bug in the system.
Describe briefly and clearly in your issue what the purpose of your contribution is. Furthermore, the predefined labels
improve the understanding of your intentions and help to more precisely define the scope of your changes.
Adhere to the template for issues, it will assist you in providing all the necessary information that will help us to 
investigate your inquiry faster. IN short, the common rules are:

+ Give your issue a short and concise title
+ Clearly indicate, if you report a bug or propose a feature
+ Try to provide the scope of the issue, if known (service, web client, JSON schema ...)
+ Very important is the information about your platform, DIVA version and how you execute the system

## Sending a pull Request

The DIVA core contributor team is monitoring for pull requests. We will review your pull request and either merge it, propose changes to it, 
or close it with a reason.

If you have chosen to make a pull request after we have discussed your concern in an issue or other communication channel, 
follow the rules below to incorporate your changes into DIVA.

+ Create your fork of the [DIVA repository](https://github.com/FraunhoferISST/diva). You can learn more about 
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
+ When issuing PR's, make your changes in a new git branch based on `dev`
+ The `master` branch is a snapshot of the latest stable release. All development should be done in dedicated branches. 
  Do not submit PR's against the `master` branch.
+ Don't be afraid to commit frequently. Just make sure to follow our [commit convention](./commits.md) 
+ Update the corresponding README.md with details of changes, this includes new environment variables, exposed ports, useful file locations and other information.
+ Always update OpenAPI specification of the corresponding service, if any changes to the REST API were applied
+ Lint the code and follow our source code [style guide](./code-styles.md), if applicable
+ Increase the version numbers in language specific file (e.g. package.json) and corresponding `docker-compose.yml` file to the new version that this
  Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
+ Propose your changes to be included in this documentation. Contribute in the [documentation repository](https://github.com/FraunhoferISST/diva-docs) according to the same principle 
+ You may merge the Pull Request in once you have the sign-off of the core team and the pipeline check are completed, or if you 
do not have permission to do that, you may request the team to merge it for you.