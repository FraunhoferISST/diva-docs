# Web client

DIVA is a complex system with many services and different interfaces that drive the core functionality of the system.
Operating the system requires a solid understanding of the underlying architecture and the technologies used.
To enable everyone to enjoy the benefits of data management with DIVA, we have implemented a web-based client application.

<div class="flex justify-center">
    <img :src="$withBase('/assets/diva_client.png')" height="500" alt="DIVA Architecture">
</div>

Web application is a Vue 2 single page app and is currently the only client that allows managing DIVA Catalog through an 
intuitive and modern UI. For non-developers 
this is the only way to interact with the system's backend. Make sure to take a look at the [users guide](../../user-docs)!

[Vuetify](https://vuetifyjs.com/en/) is used as the frontend framework. Therefore, the look & feel is basically determined by the material design pattern. 
Nevertheless, we implement slight adjustments to the components to create an individual and recognizable form with a smoother and breezier feeling.

The web client project was originally created with vue-cli. More information on how to run the client for local development 
can be found in the corresponding README.md. 

In the near future we plan to update the client to Vue 3. With this update will come new features, improved structure and design of the pages.

## Configuration

In this chapter we will discuss how to prepare the client application for execution. 
The client communicates with the backend through Kong API Gateway and requires the user to be authenticated with a valid JWT.
You can read more about authentication flow in the [API Gateway](./gateway.md) section.

Once loaded, the client performs the identity check through Keycloak and initializes the user data in the browser, if user exists
and is already logged in, or navigates to login page. There anyone can create an account in the app and get access to the functionalities of the system. 
So the developers have to register first as well.

For the web client, in order to be able to execute identity verification and access API Gateway, corresponding information
should be configured.
The app can be configured by several environment variables. During development on your own machine, the default values should be completely sufficient.
In production, however, the built app is shipped in the container from a Nginx server over the internet to the browser. The communication
on `localhost` is not possible anymore and you have at least configure correct domains where client can rich Keycloak and API Gateway 
instances.

::: tip ENV's on runtime
Yes, you do not have to rebuild the web-client Docker image every time any of the ENV's changes. The environment variables are injected
in the app source code on each container start. You can adjust all accepted ENV's at any time without the need to build own image, just restart the container!
:::

In the following we will list and explain environment variables that can be set on runtime:

+ `VUE_APP_API_GATEWAY_URL`- the client must know how to reach the gateway. When working on the system locally, in most cases the gateway will be running on `localhost`
and the client will know, how to communicat to it. For more flexibility, the URL to the gateway can be configured 
through the environment variables. The client uses the `VUE_APP_API_GATEWAY_URL` environment variable as the base URL.
The variable can be set either in the local development environment directly when running with NPM or in Docker container. You can
learn more about how to deploy web-client and the Gateway with reverse proxy in our [Docker guide](../deployment/docker.html#deployment-with-nginx-reverse-proxy).

+ `VUE_APP_KEYCLOAK_URL`  <Badge type="tip" text="v2.2.0" vertical="middle" /> - the client must also know how to reach the Keycloak instance for user authentication. 
Here the same applies, in production the variable must be set correctly so that the client can communicate with Keycloak. 
Probably you will have your own managed Keycloak instance running. If not, we give an example on how to deploy Keycloak behind reverse
proxy in our [Docker guide](../deployment/docker.html#deployment-with-nginx-reverse-proxy). 
+ `VUE_APP_KEYCLOAK_REALM` <Badge type="tip" text="v2.2.0" vertical="middle" /> - if you have your own managed Keycloak instance, you can specify the realm that the client should
use for user authentication. We ship DIVA with already preconfigured Keycloak instance that you can adjust. Otherwise, the default value ca be left as is.
+ `VUE_APP_KEYCLOAK_CLIENT_ID` <Badge type="tip" text="v2.2.0" vertical="middle" /> - the `id` of the Keycloak client that regulates the permission for our web-client. 
No need to change this variable, if you use the Keycloak instance shipped with DIVA as is and do not have own managed Keycloak.

You can read more about how to use environment variables in the [Docker guide](../deployment/docker.html#environment-variables).
Please note that. For the client to successfully and securely connect to Keycloak in the production environment and authenticate 
in Kong, Kong and Keycloak must be configured correctly as well. At this point we refer the reader to the corresponding 
[Kong]() and [Keycloak]() guides.
