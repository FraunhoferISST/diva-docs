---
id: create-resource
title: Create Resource
---

Through the user interface, you can choose what type of resource you want to inventory in DIVA.
Currently, DIVA offers the following types of resources:

- [Create Resource](#create-resource)
  - [Generic Resource](#generic-resource)
  - [File Resource](#file-resource)
  - [DKSR Urban Pulse Sensor](#dksr-urban-pulse-sensor)

![DIVA Create Resources](/diva_4.0.0/screenshots/create_resource.png)

## Generic Resource

A generic resource should be created whenever DIVA does not offer another more specific type or you don't know the technical type of the resource.
To create a generic resource, you only need to assign a title.

:::caution
Titles may be allocated more than once.
After creating the resource, it is advisable to enrich it with further metadata.
:::

![DIVA Create Resource Generic](/diva_4.0.0/screenshots/create_resources_generic.png)

## File Resource

This importer can be used to inventory files in DIVA.
You can simply select them via a selection menu or by dragging and dropping them into DIVA.

:::tip
Any file type can be inventoried in DIVA.
However, only certain types of files are automatically analyzed to extract further metadata.
:::

![DIVA Create Resource File](/diva_4.0.0/screenshots/create_resources_file.png)

## DKSR Urban Pulse Sensor

This is a special importer to inventory sensors from an **Urban Pulse** into **DIVA**.
You need to provide the necessary data such as URL, username and password that **DIVA** can use to connect to the Urban Pulse.
If you do not want to import all sensors but only specific ones, just add their `uuid` in the list of **specific sensors**.

![DIVA Create Resource Urban Pulse Sensor](/diva_4.0.0/screenshots/create_resources_up_sensor.png)
