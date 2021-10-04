# Prerequisites

DIVA can be deployed anywhere you can run containers, be it your laptop or cloud infrastructure.
The following instructions are not mandatory,
it should be possible to use other operating systems or software versions, but we can not guarantee a flawless experience.

## Requirements

The following is a list of requirements that must be met in order to work comfortably with all DIVA components during 
local development or deployment:

+ Linux distribution (We recommend to use Ubuntu 18.04 or 20.04)
+ Docker 20.10.x
+ Docker Compose 1.28.x

The requirements for the technical specification of the machine depend strongly on what you intend to do with DIVA.
On our development machines we run DIVA without any problems with the following specifications:

+ i7 with 4 physical CPUs
+ 16GB RAM
+ 150GB SSD

The production environment for DIVA must of course take into account a much higher volume of storage capacity requirements

## Find latest release

All DIVA repositories are freely accessible on GitHub and can be cloned without authentication. Below is the list of 
existing repos:

+ [diva](https://github.com/FraunhoferISST/diva) - DIVA System Core containing all necessary components
+ [diva-docs](https://github.com/FraunhoferISST/diva-docs) - Repository for this documentation 

You can always find the latest Docker distribution under [releases](https://github.com/FraunhoferISST/diva/releases).
Follow our [docker guide](./docker.md) to  deploy DIVA.

## Access to container registry

All docker images are continuously built in the CI 
pipeline and publicly available to pull without authentication in GitHub container registry. 