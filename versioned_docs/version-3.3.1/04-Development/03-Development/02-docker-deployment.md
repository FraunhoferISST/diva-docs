---
id: docker-deployment
title: Docker Deployment
---

# Docker Deployment

DIVA is built with a focus on scalability, modularisation and expandability using a microservice architecture. Our team 
relies on the latest technologies for container-based development and deployment of the system using Docker.
All system components are containerized and have current images that are
continuously built in the CI pipeline. In this guide we will learn how to get DIVA running with `docker-compose`.


:::tip
Make sure to read the [prerequisites](../prerequisites) to know what you need to get started with Docker and Docker Compose.
Also note that deployment with docker is not suitable for Production. Nonetheless, it is convenient for local development 
environment to quickly spin up most of the components like Kafka, Gateway and other services.
:::

All things related to docker are located in the [`docker/`](https://github.com/FraunhoferISST/diva/blob/master/docker)
directory. Here we have prepared a script which you can use to directly boot 
all components, with default environment setup. If you need a quick start,
just execute the following commands:

```bash
# navigate to docker/ directory
cd docker
# spin up the system
./up_core.sh
```

The script starts all core services, profiling workflow engine, DSC and the web client application. It may take some 
time until all components are up and running. By default, the client should be available on `localhost:70`.

If you want to learn more about the configuration options, the following chapters will show you 
how to manage Docker containers, images and deployment.

## Environment variables

First with the environment variables you have the possibility to propagate settings to the containers on run time. 
The ENV's are used to configure exposed ports, Kafka topics, database connections, credentials etc. This makes the deployment 
of containers more flexible and provides you a way to configure the environment without potential collisions with other software
on your machines.

:::caution Ports allocation
DIVA components allocate many default ports like 80, 3000 or 27017. To avoid potential conflicts on deployment, most of the allocated ports can
be configured in `docker/.env` file.
:::

All available configuration possibilities are listed in the [`docker/.env.default`](https://github.com/FraunhoferISST/diva/blob/master/docker/.env.default) file.
This ENV template is used by default to boot the system with `up_core.sh` script. To override default settings, create 
a `.env` file in the `docker/` directory and copy the contents of `.env.default` to it. There you can adjust the deployment,  
and e.g. change the port of the web application as follows:

```env
WEB_CLIENT_PORT=90
```

## Container and images management

Now we will briefly go through the lifecycle of containers and images, from configuration to deployment in the container registry.
This chapter is interesting for those who want to actively participate in the development of the system or manage
containers and images in a more granular way. 

:::caution Environment variables
Make sure to create `.env` file on your machine like described in [Environment variables](#environment-variables)
:::

We will take a brief look at how to build, push, and pull images in general.
Of course, this chapter only concerns the software we have created and containerized, external images like Kafka or Elasticsearch are not of interest to us.
In general, you will find multiple Docker Compose files that have the following responsibilities:

+ [`docker-compose.yml`](https://github.com/FraunhoferISST/diva/blob/master/docker/docker-compose.yml) - the most 
  interesting config file as it is a heart of the DIVA

+ [`docker-compose.faas.yml`](https://github.com/FraunhoferISST/diva/blob/master/docker/docker-compose.faas.yml) - FaaS services configuration useful only
for local development to build and test images
  
+ [`docker-compose.airflow.yml`](https://github.com/FraunhoferISST/diva/blob/master/docker/docker-compose.airflow.yml) - Airflow configuration

+ [`docker-compose.profiling.yml`](https://github.com/FraunhoferISST/diva/blob/master/docker/docker-compose.profiling.yml) - external profiling services
  used in our profiling workflows

+ [`docker-compose.monitoring.yml`](https://github.com/FraunhoferISST/diva/blob/master/docker/docker-compose.monitoring.yml) - several helpful monitoring
 and debugging tools like Kibana that are not deployed within the system core

+ [`docker-compose.dsc.yml`](https://github.com/FraunhoferISST/diva/blob/master/docker/docker-compose.dsc.yml) - DSC Service, for demonstration purpose only

The folder also contains other Docker Compose configurations that have `.build` in the suffix. These can override the 
normal configurations to build an image locally explicitly from source. The difference with the `.build` configurations 
is that the services are executed in the context of the corresponding folder.
Generally, the configuration can be overwritten as follows:

```bash
docker-compose -f docker-compose.build.yml build resource-management
```

### Manage microservices

All microservices and their dependencies are defined in `docker-compose.yml`. You will work with this file the most.

**Pull image**

Simply run the command:

```bash
docker-compose pull <service_name>
# for example
docker-compose pull user-management
```

**Build image**

To explicitly build the image from source, specify the path to the override `.yml` :

```bash
docker-compose f docker-compose.yml -f docker-compose.override.yml build <service_name>
# for example
docker-compose f docker-compose.yml -f docker-compose.override.yml build user-management
```

**Push image**

Push image to container registry:

```bash
docker-compose push <service_name>
# for example
docker-compose push user-management
```

### Manage FaaS

All FaaS are defined in `docker-compose.faas.yml`.

**Pull image**

```bash
docker-compose -f docker-compose.faas.yml pull <service_name>
# for example
docker-compose -f docker-compose.faas.yml pull text-keywords-extractor
```

**Build image**

To explicitly build the image from source, specify the path to the build `.yml` :

```bash
docker-compose -f docker-compose.faas.yml -f docker-compose.faas.build.yml build <service_name>
# for example
docker-compose -f docker-compose.faas.yml -f docker-compose.faas.build.yml build text-keywords-extractor
```

**Push image**

Push image to container registry:

```bash
docker-compose -f docker-compose.faas.yml push text-keywords-extractor
# for example
docker-compose -f docker-compose.faas.yml push text-keywords-extractor
```

### Manage Airflow

We use a slightly customized image for Airflow. The definitions for Airflow
are specified in`docker-compose.airflow.yml`.

**Pull image**

```bash
docker pull ghcr.io/fraunhoferisst/diva/airflow:<version>
```

**Build image**

To explicitly build the image from source, specify the path to the build `.yml` :

```bash
docker-compose -f docker-compose.airflow.build.yml build airflow
```

**Push image**

Push image to container registry:

```bash
docker-compose -f docker-compose.airflow.yml push airflow
```

### Manage base images

We have several images that serve as the basis for our FaaS. They are located in `./base-images`, so first
change the working directory:

```bash
cd base-images
```
**Pull image**

```bash
docker-compose pull <service_name>
# for example
docker-compose pull base-python3
```

**Build image**

```bash
docker-compose build <service_name>
# for example
docker-compose build base-python3
```

**Push image**

Push image to container registry:

```bash
docker-compose push <service_name>
# for example
docker-compose push base-python3
```