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
Currently, anyone can create an account in the app and get access to the functionalities of the system. So the developers have to register first as well.

The client must know how to reach the gateway. When working on the system locally, in most cases the gateway will be running on `localhost`
and the client will know, how to communicat to it. For more flexibility, the URL to the gateway can be configured 
through the environment variables. The client uses the `VUE_APP_API_GATEWAY_URL` environment variable as the base URL.
The variable can be set either in the local development environment directly when running with NPM or in Docker container. You can
learn more about how to deploy Client with reverse proxy in our [Docker Guide](../deployment/docker.html#deployment-with-nginx-reverse-proxy).
