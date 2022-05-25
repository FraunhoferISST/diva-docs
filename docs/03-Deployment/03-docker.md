---
id: docker
title: Docker Deployment
---

# Docker Deployment

DIVA is built with a focus on scalability, modularization and expandability using a microservice architecture.
Our team relies on the latest technologies for container-based development and deployment of the system using Docker.
All system components are containerized and have current images that are continuously built in the CI pipeline.
In this guide we will learn how to get DIVA running with `docker-compose`.

:::tip
Make sure to read the [prerequisites](prerequisites) to know what you need to get started with Docker and Docker Compose.
Also note that deployment with docker is not suitable for Production.
Nonetheless, it is convenient for local development  environment to quickly spin up most of the components like Kafka, Gateway and other services.
:::

All things related to docker are located in the [`docker/`](https://github.com/FraunhoferISST/diva/blob/master/docker)
directory. You can find this folder in the source code as well as in the release distribution.
Here we have prepared a script which you can use to directly boot all components, with default environment setup.
If you need a quick start, just execute the following commands:

```bash
# navigate to docker/ directory
cd docker
# spin up the system
./up_core.sh
```

The script starts all core services, profiling workflow engine, DSC and the web client application.
It may take some time until all components are up and running.
By default, the client should be available on `localhost:70`.

:::danger Container credentials
Bei default containers start with dummy values for credentials (e.g. `admin admin` for MongoDB) what is completely fine for local development environment.
If you plan to make DIVA available publicity through the deployment with Docker, make sure to change all sensitive data.
Refer to the [Environment variables](#environment-variables) section.
:::

## Environment variables

First with the environment variables you have the possibility to propagate settings to the containers on run time.
The ENV's are used to configure exposed ports, Kafka topics, database connections, credentials etc.
This makes the deployment  of containers more flexible and provides you a way to configure the environment without potential collisions with other software on your machines.

:::caution Ports allocation
DIVA components allocate many default ports like 80, 3000 or 27017.
To avoid potential conflicts on deployment, most of the allocated ports can be configured in `docker/.env` file.
:::

All available configuration possibilities are listed in the [`docker/.env.default`](https://github.com/FraunhoferISST/diva/blob/master/docker/.env.default) file.
This ENV template is used by default to boot the system with `up_core.sh` script. To override default settings, create 
a `.env` file in the `docker/` directory and copy the contents of `.env.default` to it. There you can adjust the deployment, 
should change all passwords and usernames and e.g. change the port of the web application as follows:

```env
WEB_CLIENT_PORT=90
```

In the development environment, the configuration in `.env.default` and other templates are quite sufficient and must work immediately.
However, in order to make DIVA "production-ready" in Docker, we need to do some tweaks. Just follow the configuration guides for
[Keycloak](/docs/Development/Architecture/keycloak#configuration), [API Gateway](/docs/Development/Architecture/gateway#configuration) and [Web-Client](/docs/Development/Architecture/web-client#configuration), in that order.

## Deployment with nginx reverse proxy

As mentioned earlier, docker is not optimal for production deployment. However, it could be useful to quickly deliver to the world a 
DIVA instance in an experimental environment. For this purpose, we provide an example reverse proxy configuration in 
[`docker/proxy/`](https://github.com/FraunhoferISST/diva/blob/master/docker/proxy/) that allows 
to easily expose DIVA with Docker Compose.

This simple nginx reverse proxy configuration serves as an example of how Diva could be exposed to the world. The proxy
configuration in `nginx.example.conf` is minimalistic and **not** suitable for production!

In general, the [Web client](/docs/Development/Architecture/web-client) application and the [API Gateway](/docs/Development/Architecture/gateway)
should be accessible through the network behind the proxy.
In addition, the client needs a running [Keycloak](/docs/Development/Architecture/keycloak) instance, which does not necessarily have to be delivered by the same 
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
   > This step is only applicable if you do not have your own managed Keycloak instance running. In that case you have to update
   > in your `docker/.env`: `KEYCLOAK_FRONTEND_URL=https://diva.com/auth/`.
6. Create Kong production config and restart container
   > In `core/kong-gateway` you have to create production config (e.g. `kong.prod.yml`). Your can copy the contents from
   > `core/kong-gateway/kong.production.yml` to it, but have at least to set everywhere the correct Keycloak token issuer:
   > ```
   > plugins:
   >    - name: jwt-keycloak
   >      config:
   >        allowed_iss: [ "https://diva.com/auth/realms/my-realm" ]
   > ```
   > For more details refer to [Kong API Gateway configuration](/docs/Development/Architecture/gateway)
7. Make sure DIVA Core is already running
   > You can spin up anything needed with `./up_core.sh` in `docker/`
8. Run nginx proxy server in `proxy/` with:
   ```bash
   docker-compose up -d
   ```
On your local machine with the default nginx config the Web client is available on `https://diva.com/`. Now just visit the URL,
log in to the application through Keycloak, and make sure... that the authentication does not work! You will probably see something like:

<!-- <div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/proxy_client_error.png')" alt="authentication error">
</div> -->

And this is fine. Since Kong and Keycloak are running in the container in Docker and we are working with `diva.com` fake domain, 
which maps to `localhost`, Kong cannot communicate with Keycloak for authentication. In the real production environment this wouldn't be
an issue, as Keycloak would be running on a real URL. Make sure to take a look at [API Gateway](/docs/Deployment/Configuration#kong-gateway),
[Keycloak](/docs/Deployment/Configuration#keycloak) and [Web-client](/docs/Deployment/Configuration#web-client) configurations to better prepare
DIVA for production.
