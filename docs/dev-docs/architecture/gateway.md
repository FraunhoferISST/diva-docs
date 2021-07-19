# Gateway

The [Kong](https://konghq.com/kong/) API Gateway acts as a secure access point to the backend services. It is an abstraction layer for the [REST API's](./rest-api.md)
of the individual services used by our [Web client](./web-client.md). Gateway provides an authentication mechanism and accepts 
requests only from the clients with a valid [JWT](https://jwt.io/). So the gateway is the only security layer in the 
entire system and should be the only component accessible on the Internet. The backend of the system should always run 
behind the gateway, since the services themselves do not implement any authentication.

Only authenticated users with a valid JWT have access to the backend 
through the API Gateway.

## Authentication

To reach the API behind the gateway, clients must include the Authorization Bearer header in the request:
```
Authorization: Bearer <JWT>
```
The User Management service is responsible for creation and validation of the JWT's. Only users authenticated on the User Management service
with a valid JWT have access to the backend through the API Gateway.

When Kong processes requests, we use a special plugin to extract user information from the Authorization header and set it 
as additional headers. For example, the user `id` is extracted from the JWT and set as `x-actorid`. The `x-actorid` header 
is required by most services through the OpenAPI specification.

## Configuration

The Gateway is configured through the [kong.yml](https://github.com/FraunhoferISST/diva/blob/master/core/kong-gateway/kong.yml)
Here you can regulate access to the service and enable or disable authentication for some routes or methods.
To understand the configuration, we recommend reading the documentation on Kong