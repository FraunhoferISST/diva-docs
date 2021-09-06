# Keycloak

[Keycloak](https://www.keycloak.org/) is a popular Open Source identity and access management software. In DIVA v2.2 we 
integrated Keycloak to 1) reuse enterprise ready identity and user account management that Keycloak provides out of the box and
2) to open for the companies the possibility to configure more granular the access and authentication flow in DIVA.

## Deployment

DIVA is shipped with already [preconfigured](https://github.com/FraunhoferISST/diva/blob/main/core/keycloak/default-realm.json)
Keycloak 15 instance that can be started up directly with the other components. You will
find more details in the [Docker guide](../deployment/docker.md). The provided configuration has a realm with all necessary 
settings to accept Web-Client connections and authorize users. Nevertheless, this configuration must be optimized for 
production environment to improve the security setting.

DIVA can also be used with own managed Keycloak instance. In this case you just have to configure [Web client](./web-client.md) and
[API Gateway](./gateway.md) to work with your Keycloak.

## Configuration

Here we go through the important realm settings. We assume that you are already familiar with the basic concepts of Keycloak.
First, however, we will configure the deployment with Docker through the [environment variables](../deployment/docker.md#environment-variables). 
To do this, we need to explicitly tell Keycloak in your `docker/.env` on which URL the instance is running.
For example, if you we plan to deploy Keycloak on `https://diva.com/auth/`, we set the variable as follows:

```dotenv
KEYCLOAK_FRONTEND_URL=https://diva.com/auth/
```

::: danger Change credentials
Make sure to use secure Keycloak and Postgres usernames and passwords passed through the ENV's!
:::


### Realm

The pre-configured realm is automatically loaded into DIVA Keycloak at startup and has a client for DIVA Web app.
The default names for the realm and client are `diva-kc-realm` and `diva-kc-client`. This names are not mandatory and 
can be changed. You have only to reflect the name changes in the [Web client configuration](./web-client.md#configuration).

To restrict access to the DIVA Keycloak, the redirect and origin URL's must be adjusted in the client. For this we have to 
navigate to Keycloak admin console on `https://diva.com/auth/admin/master/console/#/realms/diva-kc-realm` and 
under **Clients** -> `diva-kc-client` -> **Settings** set the **Valid Redirect URIs** and **Web Origins** options.
These options must contain URL's under which the Web-client can be reached. For example if the client is deployed on `https://diva.com/`,
we set the setting like follows:

+ Valid Redirect URIs: `https://diva.com*`
+ Web origins: `https://diva.com`

<div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/keycloak_client.png')" alt="authentication error">
</div>

For the local development environment all values can be used as provided in default configuration.

### Authentication

The Kong API Gateway uses from Keycloak issued JWT tokens to authenticate users for further access to the DIVA 
API. By default, we use tokens with RS256 signature algorithm with default expiration policies. The Web-Client checks the token validity every
**100** seconds.

::: warning 
If you change token settings in Keycloak, probably the adjustment in the API Gateway will be required. For more details refer
to [Kong configuration](./gateway.md).
:::

### Users management

DIVA uses Keycloak **only** as identity management and log in service. That means all users date except `email` and `password`
are still managed in DIVA. DIVA users have additional fields like `username`, `jobTitle`, `company` etc. and a profile image.
All this data can be edited only in DIVA Web-client and the changes does not affect Keycloak users state.

The users from Keycloak are transferred to DIVA at login or register. Each time someone logs in or registers via Keycloak, 
the user data is updated in DIVA or a new user is created, if it does not yet exist in DIVA. This means that email and password can 
be updated in Keycloak, but only email and password. 

::: warning Users attributes
Please note that in DIVA we only import the **email** of the keycloak user.
The changes of the other user attributes in DIVA do not affect Keycloak and vice versa.
:::



