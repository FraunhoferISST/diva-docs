---
id: local
title: Local development
---

# Local development

In this chapter we will look at what is needed to develop existing services or create new ones locally on your own development machine.
This guide is for the developers who want to actively contribute to the implementation of the system and assumes that the respective components must be run locally without Docker. Read this if you want to improve one of the existing components or add a new one.

:::tip
Make sure to read the [prerequisites](/dev-docs/deployment/) to know what do you need to be able to set up DIVA on your machine
:::

DIVA consist of many components, each with it own requirements.
All components are provided with  corresponding readmes where you can find detailed descriptions of the requirements and execution instructions.

In general, a common routine will look like this: check out the necessary repository, change to the right folder, install dependencies and start the component.
While there are system components that can run completely independently, most of our [core services](../architecture/services.md#core-services) rely on Kafka or databases.
For example [Web client](../architecture/web-client.md) relies on [API Gateway](../architecture/gateway.md), and the [API Gateway](../architecture/gateway.md) needs
other services to be running.
In order to be able to work properly with the client, other services have to operate as well.
To avoid this problem, the necessary components such as Kafka, databases or other service can be run directly with Docker Compose.
Therefore, we propose the following workflow for local development:

1. We recommend you to specify a host name forwarding for Kafka. Please map `broker` to `localhost` in your `/etc/hosts` file:

   ```text
   127.0.0.1 localhost broker
   ```

2. Spin up the system with Docker. Read our guide for [Docker deployment](./docker.md) for further information

   ```bash
   cd docker
   ./up_core.sh
   ```

   >It is not required to boot the complete system. If you are already familiar with the DIVA architecture, you can start only
   > these components that are required by corresponding dependent component

3. Stop the component you want to work on. For example, if you want to develop on Resource Management, stop the corresponding container

   ```bash
   cd docker
   docker-compose stop resource-management
   ```

4. Now you can execute the service locally

   ```bash
   cd code/services/resource-management
   npm i
   npm run dev
   ```

:::caution
Due to docker network configuration not all services can talk to each other service.
You might also need to start other services locally without docker!
:::

:::caution Elasticsearch Warning
Elasticsearch uses a mmapfs directory by default to store its indices. The default operating system limits on mmap counts is likely to be too low, which may result in out of memory exceptions. Please configure your machine like described [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/vm-max-map-count.html)
:::

This is the general procedure, the details in the steps may vary depending on the specific component. From this point on, 
you should learn more about DIVA architecture, know what to consider when developing services and other components, and 
how to containerize the software. 

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
  <div>
    <CardLink link="/dev-docs/architecture" title="Architecture overview">
      Learn DIVA architecture to understand components relations
    </CardLink>
  </div>
  <div>
    <CardLink class="fill" link="/dev-docs/architecture/services.html#services" title="Services development">
      Learn the core principles of our core and FaaS Services
    </CardLink>
  </div>
<div>
    <CardLink link="/dev-docs/architecture/web-client.html" title="Web client">
      Build our Vue based web application
    </CardLink>
  </div>
  <div>
    <CardLink class="fill" link="/dev-docs/architecture/tooling.html#services" title="DIVA tools">
      Develop helpful tools for the every day life with DIVA
    </CardLink>
  </div>
</div>