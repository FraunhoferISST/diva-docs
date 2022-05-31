---
id: prerequisites
title: Prerequisites
---

Here we will explain how we set up most optimal environment for DIVA development and deployment.
The following instructions are not mandatory, it should be possible to use other operating systems or software versions, but we can not guarantee a flawless experience.
Most of the time we develop DIVA using virtual machines.
There are host tools like VirtualBox or VMWare.
You should be able to set up and manage a VM or run a Linux distribution bare metal.
In the following, we will go through the steps necessary for preparing an environment in which DIVA can be run optimally.

## Requirements

The following is a list of requirements that must be met in order to work comfortably with all DIVA components during 
local development or deployment:

+ Linux distribution (We recommend to use Ubuntu 18.04, 20.04 or 22.04)
+ Git
+ Docker 20.10.x
+ Docker Compose 1.28.x
+ Node.js 16.14.x
+ Python3
+ Java

The requirements for the technical specification of the machine depend strongly on what you intend to do with DIVA.
On our development machines we run DIVA without any problems with the following specifications:

+ i7 with 4 physical CPUs
+ 16GB RAM
+ 150GB SSD

## Repositories Setup

All repositories are freely accessible on GitHub and can be cloned without authentication.
Below is the list of existing repos:

+ [diva](https://github.com/FraunhoferISST/diva) - DIVA System Core containing all necessary components
+ [diva-docs](https://github.com/FraunhoferISST/diva-docs) - Repository for this documentation 

Clone the `diva` repository with the following command:

```bash
git clone https://github.com/FraunhoferISST/diva.git
```

## Access to Container Registry

All images are continuously built in the CI pipeline and publicly available to pull without authentication in GitHub container registry.
To be able to push, update or delete the images, you have to [Authenticating to the Container registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry).

```bash
docker login ghcr.io/fraunhoferisst/diva -u USERNAME --password YOUR_TOKEN
```

After successful authentication you will be able to pull and update the images:

```bash
# pull an image
docker pull ghcr.io/fraunhoferisst/diva/web-client:19.0.0

# push an image
docker push ghcr.io/fraunhoferisst/diva/web-client:19.0.0
```

To learn how to manage and containerize service with docker please refer to our detailed guide for [Container and images management](/docs/Development/Development/docker-deployment#container-and-images-management)
