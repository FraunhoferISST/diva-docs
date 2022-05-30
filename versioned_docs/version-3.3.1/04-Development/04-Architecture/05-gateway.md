---
id: gateway
title: Gateway
---

# Gateway

The [Kong](https://konghq.com/kong/) API Gateway acts as a secure access point to the backend services. It is an abstraction layer for the [REST API's](rest-api)
of the individual services used by our [Web client](web-client). Gateway provides an authentication mechanism and accepts 
requests only from the clients with a valid [JWT](https://jwt.io/). So the gateway is the only security layer in the 
entire system and should be the only component accessible on the Internet. The backend of the system should always run 
behind the gateway, since the services themselves do not implement any authentication.

## Authentication

To reach the API behind the gateway, clients must include the Authorization Bearer header in the request:
```
Authorization: Bearer <JWT>
```
As of DIVA v2.2 we use Keycloak as identity provider and user authorization service.
The client sends the JWT tokens created by Keycloak in each request and Kong in the header. Kong uses the token to authenticate the
user by checking the token signature with the Keycloak public key.

When Kong processes requests, we use a plugin to extract user information from the token in authorization header and set it 
as additional headers. For example, the user `id` is extracted from the JWT and set as `x-actorid`. The `x-actorid` header 
is required by most services through the OpenAPI specification.

This is the default flow for authorization and authentication by Keycloak and Kong, but it can be flexibly adjusted. 
If a different algorithm is used in Keycloak for token creation, Kong configuration must be adjusted accordingly so 
that Kong can correctly authenticate a user.

## Configuration

The Kong Gateway upstream service are configured through the declarative [`kong.yml`](https://github.com/FraunhoferISST/diva/blob/master/core/kong-gateway/kong.yml).
Here you can regulate access to the service and enable or disable authentication for some routes or methods.
To understand the configuration, we recommend reading the documentation on Kong.

The `kong.yml` contains configuration that is in no way suitable for production environment and is only useful for 
local development. As a baseline we
provide an example production configuration in [`kong.production.yml`](https://github.com/FraunhoferISST/diva/blob/master/core/kong-gateway/kong.production.yml),
which must always be kept up to date with the development configuration.

When deploying with Docker, you can easily switch between configurations with the `KONG_DECLARATIVE_CONFIG` environment variable.
Please read more in our [Docker guide](../../deployment/docker#environment-variables) about environment variables. For example,
you can place your configuration in `core/kong-gateway/my-production-config.yml` and set the ENV in your `.env` file:
```dotenv
KONG_DECLARATIVE_CONFIG=my-production-config.yml
```

The next important point is that Kong needs to know the Keycloak token issuer for authentication. The field `iss` in 
Keycloak generated token depends on how [Keycloak is configured](keycloak) and on which URL it lives. Fo example, if the
Keycloak instance is located on `https://my.kc.domain.com`, you have to adjust the following everywhere authentication is required:
```yml
plugins:
  - name: jwt-keycloak
    config:
      allowed_iss: [ "https://my.kc.domain.com/auth/realms/<realm-name>" ]
```
And again, `realm-name` can very depending on how your Keycloak is configured to be used in DIVA. In the default configuration 
shipped with DIVA the realm name is `diva-kc-realm`. In general the `iss` URL origin part should correspond to with 
`KEYCLOAK_FRONTEND_URL` ENV specified URL origin.
The resulting URL is used from [`kong-plugin-jwt-keycloak`](https://github.com/gbbirkisson/kong-plugin-jwt-keycloak)
to fetch the Keycloak public key and authenticate the user. It is important to note, that if you change the JWT token creation
in Keycloak (e.g. signature algorithm), the provided token authentication may fail and you have to adjust 
the declarative configuration correspondingly.

