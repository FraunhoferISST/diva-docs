---
id: introduction
title: How you can help
---

You can contribute to the project when you find a bug, suggest an improvement, or have an idea for a useful feature, such as a new profiling service or need a new adapter to connect to some specific data source, that DIVA does not support now.

The following is a set of guidelines for contributing to DIVA.
In general, you have always to create an issue to discuss your attentions and a corresponding pull request, follow our rules for commit messages and direct code changes to `dev` branch.

In order to achieve the highest possible level of code quality, all changes in the PR must satisfy checks in the CI pipeline.
After a review by a member of the core team, the changes will be integrated into the main branch and released.

## Prepare for contribution

DIVA is a complex system with many components and services, all of them have their own requirements.
To provide an overview, we have summarized all the most important information about installation and development on your own machine in our guide for [prerequisites](../prerequisites) and [local development](../development/local-development).

Make sure you have access to our [container registry](../../deployment/prerequisites#access-to-container-registry) on GitHub and read more information on how to use Docker to manage the system components you need.

Overview of the [architecture](../architecture/introduction) helps you to better understand how the components are organized and where your changes fit in.
Always feel free to ask any question if something is not clear, or you have a suggestion on how to improve the existing architecture.

## Connect to new Data Source

DIVA is expandable be design. Currently, we support uploading files via the browser and integration with UrbanPulse.
This is a point where DIVA can potentially grow very quickly and we plan to integrate with more data sources such as databases or HTTP API's.
If you want to integrate another data source like MongoDB, Dropbox or something specific with DIVA, that's a case for a new [Adapter Service](../architecture/introduction#diva-core).

:::info
A guide for the development of the Adapter services will be available soon.
:::

## Improving a Core Service

DIVA's [core](../architecture/introduction#diva-core) is responsible for key management functionality and must be maintained consistently and with proper competence.
Here everything focuses on data persistence, messaging, data model and management of internal entities through the strict API.

:::info
A guide for the development of Node.js core services will be available soon.
:::

## Extending Profiling Workflows

Counting letters in a PDF file, object recognition for images or named entity recognition - our task-oriented FaaS's are compact functions for such analyses.
If you have an idea for our profiling workflow, feel free to create a new FaaS.

## Clients Family

Modern Vue.js based SPA [client](../architecture/web-client) is a part of DIVA and provides an interface for accessing all functionality of the system.
We are continuously improving our web client, adding new features and improving the UX.
Here is plenty of room for your feedback and help.
Since we currently only have a web-based client, it would be nice to be able to offer the great and native usability of working with DIVA on mobile devices as well.
Android, IOS or hybrid with Dart, let's bring DIVA to all platforms.
We are open to any suggestions, even if it should be a client for an edge devices or a terminal, share your ideas with us.
