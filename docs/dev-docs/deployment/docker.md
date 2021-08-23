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

::: danger Container credentials
Bei default containers start with dummy values for credentials (e.g. `admin admin` for MongoDB) what is completely fine for 
local development environment. If you plan to make DIVA available publicity through the deployment with Docker, make sure 
to change all sensitive data. Refer to the [Environment variables](#environment-variables) section.
:::

If you want to learn more about the configuration options, the following chapters will show you 
how to manage Docker containers, images and deployment.

## Environment variables

First with the environment variables you have the possibility to propagate settings to the containers on run time. 
The ENV's are used to configure exposed ports, Kafka topics, database connections, credentials etc. This makes the deployment 
of containers more flexible and provides you a way to configure the environment without potential collisions with other software
on your machines.

::: warning Ports allocation
DIVA components allocate many default ports like 80, 3000 or 27017. To avoid potential conflicts on deployment, most of the allocated ports can
be configured in `docker/.env` file.
:::

All available configuration possibilities are listed in the [`docker/.env.default`](https://github.com/FraunhoferISST/diva/blob/master/docker/.env.default) file.
This ENV template is used by default to boot the system with `up_core.sh` script. To override default settings, create 
a `.env` file in the `docker/` directory and copy the contents of `.env.default` to it. There you can adjust the deployment, 
should change all passwords and usernames and e.g. change the port of the web application as follows:

```env
WEB_CLIENT_PORT=90
```

In the development environment, the configuration in `.env.default` and other templates are quite sufficient and must work immediately.
However, in order to make DIVA production-ready in Docker, we need to do some tweaks. Just follow the configuration guides for
[Keycloak](../architecture/keycloak.md#configuration), [API Gateway](../architecture/gateway.md#configuration) and [Web-Client](../architecture/web-client.md#configuration), in that order.


## Container and images management

Now we will briefly go through the lifecycle of containers and images, from configuration to deployment in the container registry.
This chapter is interesting for those who want to actively participate in the development of the system or manage
containers and images in a more granular way. 

::: warning Environment variables
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

```sh
docker-compose -f docker-compose.build.yml build resource-management
```

### Manage microservices

All microservices and their dependencies are defined in `docker-compose.yml`. You will work with this file the most.

**Pull image**

Simply run the command:

```sh
docker-compose pull <service_name>
# for example
docker-compose pull user-management
```

**Build image**

To explicitly build the image from source, specify the path to the build `.yml` :

```sh
docker-compose f docker-compose.yml -f docker-compose.build.yml build <service_name>
# for example
docker-compose f docker-compose.yml -f docker-compose.build.yml build user-management
```

**Push image**

Push image to container registry:

```sh
docker-compose push <service_name>
# for example
docker-compose push user-management
```

### Manage FaaS

All FaaS are defined in `docker-compose.faas.yml`.

**Pull image**

```sh
docker-compose -f docker-compose.faas.yml pull <service_name>
# for example
docker-compose -f docker-compose.faas.yml pull text-keywords-extractor
```

**Build image**

To explicitly build the image from source, specify the path to the build `.yml` :

```sh
docker-compose -f docker-compose.faas.yml -f docker-compose.faas.build.yml build <service_name>
# for example
docker-compose -f docker-compose.faas.yml -f docker-compose.faas.build.yml build text-keywords-extractor
```

**Push image**

Push image to container registry:

```sh
docker-compose -f docker-compose.faas.yml push text-keywords-extractor
# for example
docker-compose -f docker-compose.faas.yml push text-keywords-extractor
```

### Manage Airflow

We use a slightly customized image for Airflow. The definitions for Airflow
are specified in`docker-compose.airflow.yml`.

**Pull image**

```sh
docker pull ghcr.io/fraunhoferisst/diva/airflow:<version>
```

**Build image**

To explicitly build the image from source, specify the path to the build `.yml` :

```sh
docker-compose -f docker-compose.airflow.build.yml build airflow
```

**Push image**

Push image to container registry:

```sh
docker-compose -f docker-compose.airflow.yml push airflow
```

### Manage base images

We have several images that serve as the basis for our FaaS. They are located in `./base-images`, so first
change the working directory:

```sh
cd base-images
```
**Pull image**

```sh
docker-compose pull <service_name>
# for example
docker-compose pull base-python3
```

**Build image**

To explicitly build the image from source, specify the path to the build `.yml` :

```sh
docker-compose build <service_name>
# for example
docker-compose build base-python3
```

**Push image**

Push image to container registry:

```sh
docker-compose push <service_name>
# for example
docker-compose push base-python3
```

## Deployment with nginx reverse proxy

As mentioned earlier, docker is not optimal for production deployment. However, it could be useful to quickly deliver to the world a 
DIVA instance in an experimental environment. For this purpose, we provide an example reverse proxy configuration in 
[`docker/proxy/`](https://github.com/FraunhoferISST/diva/blob/master/docker/proxy/) that allows 
to easily expose DIVA with Docker Compose.

This simple nginx reverse proxy configuration serves as an example of how Diva could be exposed to the world. The proxy
configuration in `nginx.example.conf` is minimalistic and **not** suitable for production! 

In general, the [Web client](../architecture/web-client.md) application and the [API Gateway](../architecture/gateway.md)
should be accessible through the network behind the proxy. 
In addition, the client needs a running [Keycloak](../architecture/keycloak.md) instance, which does not necessarily have to be delivered by the same 
reverse proxy server. So the rule is that only 3 DIVA components must be accessible over the internet - Web Client, 
Kong Gateway and Keycloak. Furthermore, for the Web-Client app the access to API Gateway and Keycloak should be configured 
through the [environment variables](#environment-variables) on runtime.

In the following we will go through an example configuration, which must give a rough idea of how DIVA could be delivered with a secured reverse proxy server.
To make things look more realistic, we will not be working with `localhost`. We will simply imagine the domain name `diva.com` and map it to `localhost`
in `/etc/hosts` on our machine:
```shell
127.0.0.1 localhost diva.com
```

1. Place your SSL certificate and key in `./certs`
   > Use letsencrypt, openssl or other tool of your choice. Here is a command that can quickly generate the required keys for you:
   > ```
   > openssl req -x509 -sha256 -nodes -newkey rsa:4096 -keyout private.key -out certificate.crt
   > ```
2. Create `nginx.conf` in `proxy/` and copy the contents of `nginx.example.conf` to it
   > In this file you can add more advanced configuration, e.g. caching. 
   > Please note that your have to update the client app ENV's according to the changes in the config you made!
   > In the example configuration we instruct nginx to proxy to the underlying components like follows:
   > ```nginx configuration
   > # API Gateaway should be accessable on https://diva.com/api/ endpoint
   > location /api/ {
   >       proxy_pass http://kong:8000/; # the requests are directed to the Kong API Gateaway container
   >   }
   > ```
   > ```nginx configuration
   > # Keyclocak should be accessable on https://diva.com/auth/
   > location /auth/ {
   >       proxy_pass http://keycloak:8080/auth/; # the requests are directed to the Keycloak container, it could also be a URL of your own Keycloak instance
   >   }
   > ```
   > ```nginx configuration
   > # And finally the client itself, all othe request on https://diva.com/ should go to the web app
   > location / {
   >       proxy_pass http://web-client:70;
   >   }
   > ```
3. Create `.env` in `proxy/` and copy the contents from `.env.default` to it
   > You can choose a port for the proxy server in `.env` as `PROXY_PORT` with default `443` value.
4. Set Web-Client ENV's and restart container
   > Update the `VUE_APP_API_GATEWAY_URL` and `VUE_APP_KEYCLOAK_URL` in `docker/.env` corresponding to your nginx configuration.
   > Make sure the client can access all API endpoints and communicate with Keycloak. According to provided default configuration
   > the variables should be set for example as `VUE_APP_API_GATEWAY_URL=https://diva/api/` and `VUE_APP_KEYCLOAK_URL=https://diva.com/auth/`
5. Set Keycloak ENV's and restart container (optional)
   > This step is only applicable if you do not have your own managed Keycloak instance running. In that case your have to update
   > in your `docker/.env`: `KEYCLOAK_FRONTEND_URL=https://diva.com/auth/`.
6. Create Kong production config and restart container
   > In `core/kong-gateway` you have to create production config (e.g. kong.prod.yml). Your can copy the contents from
   > `core/kong-gateway/kong.production.yml` to it, but have at least to set everywhere the correct Keycloak token issuer:
   > ```
   > plugins:
   >    - name: jwt-keycloak
   >      config:
   >        allowed_iss: [ "https://diva.com/auth/realms/my-realm" ]
   > ```
   > For more details refer to [Kong API Gateway configuration](../architecture/gateway.md)
7. Make sure DIVA Core is already running
   > You can spin up anything needed with `./up_core.sh` in `docker/`
8. Run nginx proxy server in `proxy/` with:
   ```bash
   docker-compose up -d
   ```
On your local machine with the default nginx config the Web client is available on `https://diva.com/`. Now just visit the URL,
log in to the application through Keycloak, and make sure... that the authentication does not work! You will probably see something like:

<div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/proxy_client_error.png')" alt="authentication error">
</div>

And this is fine. Since Kong and Keycloak are running in the container in Docker and we are working with `diva.com` fake domain, 
which maps to `localhost`, Kong cannot communicate with Keycloak for authentication. In the real production environment this wouldn't be
an issue, as Keycloak would be running on a real URL. Make sure to take a look at [API Gateway](../architecture/gateway.md),
[Keycloak](../architecture/keycloak.md) and [Web-client](../architecture/web-client.md) configurations to better prepare
DIVA for production.
