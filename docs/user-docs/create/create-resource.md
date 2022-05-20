---
id: create-resource
title: Create Resource
---

# Create Resource

Through the user interface, you can choose what type of resource you want to inventory in DIVA.
Currently, DIVA offers the following types of resources:

- [Create Resource](#create-resource)
  - [Generic Resource](#generic-resource)
  - [File Resource](#file-resource)
  - [DKSR Urban Pulse Sensor](#dksr-urban-pulse-sensor)

<!-- <div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/screenshots/create/create_resources.png')" alt="DIVA Create Resources">
</div> -->

## Generic Resource

A generic resource should be created whenever DIVA does not offer another more specific type or you don't know the technical type of the resource.
To create a generic resource, you only need to assign a title.

:::caution
Titles may be allocated more than once.
After creating the resource, it is advisable to enrich it with further metadata.
:::

<!-- <div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/screenshots/create/create_resources_generic.png')" alt="DIVA Create Resources Generic">
</div> -->

## File Resource

This importer can be used to inventory files in DIVA.
You can simply select them via a selection menu or by dragging and dropping them into DIVA.

:::tip
Any file type can be inventoried in DIVA.
However, only certain types of files are automatically analyzed to extract further metadata.
:::

<!-- <div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/screenshots/create/create_resources_file.png')" alt="DIVA Create Resources File">
</div> -->

## DKSR Urban Pulse Sensor

This is a special importer to inventory sensors from an **Urban Pulse** into **DIVA**.
You need to provide the necessary data such as URL, username and password that **DIVA** can use to connect to the Urban Pulse.
If you do not want to import all sensors but only specific ones, just add their `uuid` in the list of **specific sensors**.

<!-- <div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/screenshots/create/create_resources_up_sensor.png')" alt="DIVA Create Resources Urban Pulse Sensor">
</div> -->
