# Configuration

When building DIVA we rely on established opens source solutions for creating a scalable and transparent architecture.
We try to pick the best technologies like MongoDB, Elasticsearch or Kafka and others for communication of internal 
components and persistent storage to focus on DIVA specific logic. Since we cannot know in which environments DIVA could 
be deployed, we do not want to make strict assumptions about the necessary configuration of the external software.

Potentially, all external components can be configured flexibly. You can deploy and scale them where and how you want.
The only requirement is - our DIVA internal components still know how to connect to the external components.
The whole system can be configured through the environment variables. 
You can customize all variables in `docker/.env`. For more specific requirements, you can also set the variables for individual services. 
The variables are documented in corresponding README's.

In the following we will go through the main configuration steps and learn how to best prepare DIVA for production environment.

## Keycloak

[Keycloak](https://www.keycloak.org/) is a popular Open Source identity and access management software. In DIVA v2.2 we
integrated Keycloak to 1) reuse enterprise ready identity and user account management that Keycloak provides out of the box and
2) to open for the companies the possibility to configure more granular access and authentication flow in DIVA. 
In this guide we assume that you are already familiar with the basic concepts of Keycloak.

DIVA is shipped with already [preconfigured](https://github.com/FraunhoferISST/diva/blob/main/core/keycloak/default-realm.json)
Keycloak 15 instance that can be started up directly with the other components. You will
find more details in the [Docker guide](../deployment/docker.md). The provided configuration has a realm with all necessary
settings to accept Web-Client connections and authorize users. Nevertheless, this configuration must be optimized for
production environment to improve the security setting.

DIVA can also be used with own managed Keycloak instance. In this case you just have to configure [Web client](#web-client) and
[API Gateway](#kong-gateway) to work with your Keycloak.

::: warning Default realm configuration
The provided configuration is very minimal and has only a set of features required for DIVA to function properly. You have 
to adjust the security setting corresponding to your policies and enable further features like emailing through advanced
Keycloak configuration.
:::

### Environment

First, Keycloak must be configured in Docker through the [environment variables](../deployment/docker.md#environment-variables).
To do this, we need to explicitly tell Keycloak in your `docker/.env` on which URL the instance is running.
For example, if you plan to deploy Keycloak on `https://diva.com/auth/`, we set the variable as follows:

```dotenv
KEYCLOAK_FRONTEND_URL=https://diva.com/auth/
```

Below is the list of important variables:

```dotenv
KEYCLOAK_PORT=7000
KEYCLOAK_USER=admin
KEYCLOAK_PASSWORD=my_secure_password
KEYCLOAK_DB_USER=keycloak
KEYCLOAK_DB_PASSWORD=my_secure_password
```

::: danger Change credentials
Make sure to use secure Keycloak and Postgres usernames and passwords passed through the ENV's!
:::


### Realm

The pre-configured realm is automatically loaded into DIVA Keycloak at startup and has a client for DIVA Web app.
The default names for the realm and client are `diva-kc-realm` and `diva-kc-client`. This names are not mandatory and
can be changed. You have only to reflect the name changes in the [Web Client configuration](#web-client).

To restrict access to the DIVA Keycloak, the redirect and origin URL's must be adjusted in the client. For this we have to
navigate to Keycloak admin console on `https://diva.com/auth/admin/master/console/#/realms/diva-kc-realm` and
under **Clients** -> `diva-kc-client` -> **Settings** set the **Valid Redirect URIs** and **Web Origins** options.
These options must contain URL's under which the Web-client can be reached. For example if the client is deployed on `https://diva.com/`,
we set the setting like follows:

+ Valid Redirect URIs: `https://diva.com*`
+ Web origins: `https://diva.com`

<div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/keycloak_client.png')" alt="Client configuration">
</div>

For the local development environment all values can be used as provided in the default configuration.

### Authentication

The Kong API Gateway uses JWT tokens issued by Keycloak to authenticate users for further access to the DIVA
API. By default, we use tokens with RS256 signature algorithm with default expiration policies. The Web Client checks the token validity every
**60** seconds.

::: warning
If you change token settings in Keycloak, probably the adjustment in the API Gateway will be required. For more details refer
to [Kong configuration](#kong-gateway).
:::

### Users management

DIVA uses Keycloak **only** as identity management and log in service. That means all users date except `email` and `password`
are still managed in DIVA. DIVA users have additional fields like `username`, `jobTitle`, `company` etc. and a profile image.
All this data can be edited only in DIVA Web-client and the changes does not affect Keycloak users state.

The users from Keycloak are transferred to DIVA at login or register. Each time someone logs in or registers via Keycloak,
the user data is updated in DIVA or a new user is created, if it does not yet exist in DIVA. This means that email and password can
be updated in Keycloak, but only email and password.

::: warning Users attributes
Please note that we only import the **email** of the keycloak user in DIVA.
The changes of other users attributes in DIVA do not affect Keycloak and vice versa.
:::

## Kong Gateway

The [Kong](https://konghq.com/kong/) API Gateway acts as a secure access point to the backend services. It is an abstraction layer for the REST API's
of the individual services used by our [Web client](#web-client). Gateway provides an authentication mechanism and accepts
requests only from the clients with a valid [JWT](https://jwt.io/). So the gateway is the security layer in the
entire system and should be the only component accessible on the Internet. The backend of the system should always run
behind the gateway, since the services themselves do not implement any authentication.

As of DIVA v2.2 we use Keycloak as identity provider and user authorization service.
The client sends the JWT tokens created by Keycloak in each request. Kong uses the token to authenticate the
user by checking the token signature with the Keycloak public key.

This is the default flow for authorization and authentication by Keycloak and Kong, but it can be flexibly adjusted.
If e.g. a different algorithm is used in Keycloak for token creation, Kong configuration must be adjusted accordingly so
that Kong can correctly authenticate a user.

### Declarative Configuration

The Kong Gateway upstream services are configured through the declarative [`kong.yml`](https://github.com/FraunhoferISST/diva/blob/master/core/kong-gateway/kong.yml).
Here you can regulate access to the service and enable or disable authentication for some routes or methods.
To understand the configuration, we recommend reading the documentation on Kong.

The `kong.yml` contains configuration that is in no way suitable for production environment and is only useful for
local development. We strongly encourage you to create and use other rather appropriate declarative configuration. As a baseline we
provide you with an example configuration in [`kong.production.yml`](https://github.com/FraunhoferISST/diva/blob/master/core/kong-gateway/kong.production.yml).

::: danger Exposed credentials
All sensitive information in default `kong.yml` and `kong.production.yml` is exposed on GitHub. Make sure to not copy and paste any secrets or passwords
from the default publicity visible configurations!
:::

When deploying with Docker, you can easily switch between configurations with the `KONG_DECLARATIVE_CONFIG` environment variable.
Please read more in our [Docker guide](../deployment/docker.html#environment-variables) about environment variables. For example,
you can place your configuration in `core/kong-gateway/my-production-config.yml` and set the ENV in your `.env` file:
```dotenv
KONG_DECLARATIVE_CONFIG=my-production-config.yml
```

The next important point is that Kong needs to know the Keycloak token issuer for authentication. The field `iss` in
Keycloak generated token depends on how [Keycloak is configured](#keycloak) and on which URL it lives. Fo example, if the
Keycloak instance is located on `https://my.kc.domain.com`, you have to adjust the following everywhere authentication is required:
```yml
plugins:
  - name: jwt-keycloak
    config:
      allowed_iss: [ "https://my.kc.domain.com/auth/realms/<realm-name>" ]
```
And again, `realm-name` depends on how your Keycloak is configured to be used in DIVA. In the default configuration
shipped with DIVA the realm name is `diva-kc-realm`. In general the `iss` URL origin part should correspond to with
`KEYCLOAK_FRONTEND_URL` ENV specified URL origin.
The resulting URL is used from [`kong-plugin-jwt-keycloak`](https://github.com/gbbirkisson/kong-plugin-jwt-keycloak)
to fetch the Keycloak public key and authenticate the user. It is important to note, that if you change the JWT token creation
in Keycloak (e.g. signature algorithm), the provided token authentication may fail and you have to fix it on your own in your
`my-production-config.yml` or create an issue and request the changes.


## Web client

DIVA is a complex system with many services and different interfaces that drive the core functionality of the system.
Operating the system requires a solid understanding of the underlying architecture and the technologies used.
To enable everyone to enjoy the benefits of data management with DIVA, we have implemented a web-based client application.

<div class="flex justify-center">
    <img :src="$withBase('/assets/diva_client.png')" height="500" alt="DIVA Architecture">
</div>

The client communicates with the backend through Kong API Gateway and requires the user to be authenticated with a valid JWT.

Once loaded, the client performs the identity check through Keycloak and initializes the user data in the browser, if user exists
and is already logged in, or navigates to login page. There the authorization to the system is managed by [Keycloak](#keycloak).

For the web client, in order to be able to execute identity verification and access API Gateway, corresponding information
should be configured.
The app can be configured by several environment variables and is shipped from a containerized Nginx server over the internet to the browser. The communication
on `localhost` is not possible anymore and you have at least to configure correct URL's where client can rich Keycloak and API Gateway
instances.

::: tip ENV's on runtime
Yes, you do not have to rebuild the web-client Docker image every time any of the ENV's changes. The environment variables are injected
in the app source code on each container start. You can adjust all accepted ENV's at any time without the need to build own image, just restart the container!
:::

In the following we will list and explain environment variables that can be configured in you `docker/.env` and are automatically
injected on runtime:

+ `VUE_APP_API_GATEWAY_URL`- the client must know how to reach the gateway and uses the `VUE_APP_API_GATEWAY_URL` environment variable as the base URL. You can
  learn more about how to deploy web-client and the Gateway with reverse proxy in our [Docker guide](../deployment/docker.html#deployment-with-nginx-reverse-proxy).

+ `VUE_APP_KEYCLOAK_URL` - the client must also know how to reach the Keycloak instance for user authorization.
  Here applies the same, in production the variable must be set correctly so that the client can communicate with Keycloak.
  Probably you will have your own managed Keycloak instance running. If not, we give an example on how to deploy Keycloak behind reverse
  proxy in our [Docker guide](../deployment/docker.html#deployment-with-nginx-reverse-proxy).
+ `VUE_APP_KEYCLOAK_REALM` - if you have your own managed Keycloak instance, you can specify the realm that the client should
  use for user authentication. We ship DIVA with already preconfigured Keycloak instance that you can adjust. Otherwise, the default value ca be left as is.
+ `VUE_APP_KEYCLOAK_CLIENT_ID` - the `id` of the Keycloak client that regulates the permission for our web-client.
  No need to change this variable, if you use the Keycloak instance shipped with DIVA as is and do not have own managed Keycloak.
+ `VUE_APP_REGISTER_AVAILABLE` <Badge type="tip" text="v3" vertical="middle" /> - by default the Web Client login page provides 
  a link to the register page on Keycloak. If you want to disable the registration in Keycloak, this link can be deactivated and hidden.
  Just set `VUE_APP_REGISTER_AVAILABLE` to `false`, empty string or let the variable empty. For example:
  ```
  VUE_APP_REGISTER_AVAILABLE=false
  # or
  VUE_APP_REGISTER_AVAILABLE
  ```
+ `VUE_APP_DISABLE_PATCH` <Badge type="tip" text="v3.3.1" vertical="middle" /> - in the environments with the specific security 
  policies it is possible to disable PATCH requests. In this case all PATCH API requests will be mapped to POST. To disable PATCH requests
  the variable should be set to `true`, e.g.:
  ```
  VUE_APP_DISABLE_PATCH=true
  ```

You can read more about how to use environment variables in the [Docker guide](../deployment/docker.html#environment-variables).
Please note that for the client to successfully and securely connect to Keycloak in the production environment and authenticate
in Kong, Kong and Keycloak must be configured correctly as well. At this point we refer the reader to the corresponding
[Kong Gateway](#kong-gateway) and [Keycloak](#keycloak) guides.

