---
id: keycloak
title: Keycloak
---

# Keycloak

[Keycloak](https://www.keycloak.org/) is a popular Open Source identity and access management software. In DIVA v2.2 we 
integrated Keycloak to 1) reuse enterprise ready identity and user account management that Keycloak provides out of the box and
2) to open for the companies the possibility to configure more granular the access and authentication flow in DIVA.

## Deployment

DIVA is shipped with already [preconfigured](https://github.com/FraunhoferISST/diva/blob/main/core/keycloak/default-realm.json)
Keycloak 15 instance that can be started up directly with the other components. You will
find more details in the [Docker guide](../deployment/docker.md). The provided configuration has a realm with all necessary 
settings to accept Web-Client connections and authorize users.

## Realm

The pre-configured realm is automatically loaded into DIVA Keycloak at startup and has a client for DIVA Web app.
The default names for the realm and client are `diva-kc-realm` and `diva-kc-client`. This names are not mandatory and 
can be changed. You have only to reflect the name changes in the [Web client configuration](./web-client.md#configuration).
For the local development environment all values can be used as provided in default configuration.

## Authentication

The Kong API Gateway uses from Keycloak issued JWT tokens to authenticate users for further access to the DIVA 
API. By default, we use tokens with RS256 signature algorithm with default expiration policies. The Web-Client checks the token validity every
**60** seconds.

::: warning 
If you change token settings in Keycloak, probably the adjustment in the API Gateway will be required. For more details refer
to [Kong configuration](./gateway.md).
:::

## Users management

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



