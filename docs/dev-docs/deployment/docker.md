# Docker deployment

DIVA is built with a focus on scalability, modularisation and expandability using a microservice architecture. Our team 
relies on the latest technologies for container-based development and deployment of the system using Docker.
All system components are containerized and have current images that are
continuously built in the CI pipeline. In this guide we will learn how to get DIVA running with `docker-compose`.


::: tip
Make sure to read the [prerequisites](./README.md) to know what you need to get started with Docker and Docker Compose.
Also note that deployment with docker is not suitable for Production. Nonetheless, it is convenient for local development 
environment to quickly spin up most of the components like Kafka, Gateway and other services.
:::

All things related to docker are located in the [`docker/`](https://gitlab.cc-asp.fraunhofer.de/diva/drm/-/tree/master/docker)
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
time until all components are up and running. By default, the client should be available on `localhost:80`.

If you want to learn more about the configuration options, the following chapters will show you 
how to manage Docker containers, images and deployment.

## Environment variables

First of all, with environment variables you have the possibility to propagate settings to the containers on run time. 
The ENV's are used to configure exposed ports, Kafka topics, database connections etc. This makes the deployment 
of containers more flexible and provides you a way to configure the environment without potential collisions.

::: warning Ports allocation
DIVA components allocate many default ports like 80, 3000 or 27017. To avoid potential conflicts on deployment, most of the allocated ports can
be configured in `docker/.env` file.
:::

All available configuration possibilities are listed in the [`docker/.env.default`](https://gitlab.cc-asp.fraunhofer.de/diva/drm/-/blob/master/docker/.env.default) file.
This ENV template is used by default to boot the system with `up_core.sh` script. To override default settings, create 
a `.env` file in the `docker/` directory and copy the contents of `.env.default` to it. There you can adjust the deployment 
and e.g. change the port of the web application as follows:

```env
WEB_CLIENT_PORT=90
```

## Container and images management

Now we will briefly go through the lifecycle of containers and images, from configuration to deployment in the container registry. 
Of course, this chapter only concerns the software we have created and containerized, external images like Kafka or Elasticsearch are not of interest to us.
In general, you will find multiple Docker Compose files that have the following responsibilities:

+ [`docker-compose.yml`](https://gitlab.cc-asp.fraunhofer.de/diva/drm/-/blob/master/docker/docker-compose.yml) - the most 
  interesting config file as it contains the core of the DIVA

+ [`docker-compose.override.yml`](https://gitlab.cc-asp.fraunhofer.de/diva/drm/-/blob/master/docker/docker-compose.override.yml) - useful for [local development](#local-development), if
  the image is not already in the container registry. The services `image` filed points in this file to local source directory

+ [`docker-compose.airflow.yml`](https://gitlab.cc-asp.fraunhofer.de/diva/drm/-/blob/master/docker/docker-compose.airflow.yml) - Airflow configuration

+ [`docker-compose.profiling.yml`](https://gitlab.cc-asp.fraunhofer.de/diva/drm/-/blob/master/docker/docker-compose.profiling.yml) - external profiling services
  used in our profiling workflows

+ [`docker-compose.monitoring.yml`](https://gitlab.cc-asp.fraunhofer.de/diva/drm/-/blob/master/docker/docker-compose.monitoring.yml) - several helpful monitoring
 and debugging tools like Kibana that are not deployed within the system core

+ [`docker-compose.dsc.yml`](https://gitlab.cc-asp.fraunhofer.de/diva/drm/-/blob/master/docker/docker-compose.dsc.yml) - DSC Service, for demonstration purpose only

::: warning
WIP!
:::

## Deployment with nginx reverse proxy

As mentioned earlier, docker is not optimal for production deployment. However, it could be useful to quickly deliver to the world a 
DIVA instance in an experimental environment. For this purpose, we provide an example reverse proxy configuration in 
[`docker/proxy/`](https://gitlab.cc-asp.fraunhofer.de/diva/drm/-/tree/master/docker/proxy/) that allows 
to easily expose DIVA with Docker Compose.

This simple nginx reverse proxy configuration serves as an example of how Diva could be exposed to the world. The proxy
configuration in `nginx.example.conf` is minimalistic and **not** suitable for production! In general, the 
[Web client](../architecture/web-client.md) and the [API Gateway](../architecture/gateway.md) should be accessible through the network. Furthermore,
the [Web client](../architecture/web-client.md) app requires a `VUE_APP_API_GATEWAY_URL`
environment variable pointing to the [API Gateway](../architecture/gateway.md), so the client can reach DIVA backend. 
Follow the steps below to deploy DIVA behind a reverse proxy:
1. Place your SSL certificate and key in `./certs`
   > You can use existing certificates or generate new with letsencrypt, openssl or another tool
2. Create `nginx.conf` in `proxy/` and copy the contents of `nginx.example.conf` to it
   > In this file you can add more advanced configuration, e.g. caching.
   > Please note that your have to update the `VUE_APP_API_GATEWAY_URL`
   environment variable in `docker/.env`, if you change the URL of [API Gateway](../architecture/gateway.md). For example, if your reverse proxy
   > server is accessible on `https://my.domain.com` then you have to set `VUE_APP_API_GATEWAY_URL=https://my.domain.com/path/to/gateway`
4. Create `.env` in `proxy/` and copy the contents from `.env.default` to it
   > You can choose a port for the proxy server in `.env` as `PROXY_PORT` with default `443` value. Make sure to update
   > `VUE_APP_API_GATEWAY_URL` in `docker/.env`, if you change the port
3. Make sure DIVA Core is already running
   > You can spin up anything needed with `./up_core.sh` in `docker/`
5. Run nginx proxy server in `proxy/` with:
   ```bash
   docker-compose up
   ```
On your local machine with the default nginx config the Web client is available on `https://localhost` and communicates with
the backend on `https://localhost/api`.