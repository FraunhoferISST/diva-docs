---
id: general-metadata
title: General Metadata
---

# General Metadata

## General Page

This page is the same for all types of resources.
To edit a field, just click on it and the edit mode will be activated.
Make your change and click the checkmark icon to save them.
The following metadata can be edited:

|Property|Description|
|---|---|
|**title**|This property contains a name given to the entity|
|**description**|This property contains a free-text account of the entity|
|**keywords**|This property contains keywords or tags describing the entity|
|**version info**|This property contains a version number or other version identification of the entity|
|**version notes**|This property contains a description of the differences between this version and a previous version of the entity|
|**data owner**|Currently only people that signed into DIVA at least once can be selected|
|**planned availability level**| This property indicates how long it is planned to keep the Distribution of the Entity available (**stable**, **available**, **experimental**, **temporary**)|
|**political geocoding**|For the coded indication of the respective principle management level from which the entity was collected and set (**international**, **european**, **federal**, **state**, **administrativeDistrict**, **municipality**)|
|**themes**|Predefined subject areas in which the entity could be located.|
|**languages**|Describes in which language(s) the entity is available.|
|**data classification**|Indication of the sensitivity of the entity. (**public**, **internal**, **confidential**, **restricted**)|
|**licenses**|Multiple licenses can be stored for one entity. The web application already has a set of default licenses in autocomplete. However, you can also manually enter any other licenses.|
|**location**|We offer a map on which points or regions can be drawn visually. The semantic meaning of a location may differ depending on the entity and may need to be explained in the description.|

:::tip Rating
The **rating** field is the only one you can not edit.
It will be automatically set according to the reviews made by the users.
We will change this in the future, as it seems rather confusing.
:::

<!-- <div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/screenshots/details/general.png')" alt="DIVA General Metadata">
</div> -->

## Cost Page

Currently, 4 types of costs can be identified.
You can also specify, in addition to the costs, whether they are in $ or €.
You can define a payment interval.
For example, you can document if you have monthly costs for a resource.

|Property|Description|
|---|---|
|**distribution costs**|Cost of distributing this entity|
|**storage costs**|Cost of holding/storing this entity|
|**maintenance costs**|Cost of keeping this entity up to date|
|**external costs**|Cost of buying this entity|

<!-- <div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/screenshots/details/general_costs.png')" alt="DIVA General Costs Metadata">
</div> -->

## History Page

All changes to the metadata are saved in DIVA.
It is stored which user has made changes to which fields and when.
If an automated profiling was performed, the initiating user is also recorded as the one who made changes.

:::tip
The history has a very technical character.
This is due to the fact that we can store a very large amount of metadata in the catalog.
Presenting every single metadata field in the history in a human-readable way would currently lead to an enormous additional effort.
:::

<!-- <div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/screenshots/details/history.png')" alt="DIVA History Metadata">
</div> -->

If larger parts of the metadata are changed, the details are hidden for the time being.
Each entry has a button with 3 dots.
The details can be displayed via this button.
There you can also expand and examine the technical data further.

<!-- <div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/screenshots/details/history_details.png')" alt="DIVA History Details Metadata">
</div> -->

## Reviews Page

Users can rate a resource or asset.
For this you can give a 1-5 star rating and add a suitable rating text.
Users can also edit or completely delete their rating after creating it.
For this you need to click on the pen or bin icon.
The overall rating is the average of all ratings of the resource or asset.

<!-- <div class="flex justify-center">
    <img class="rounded-lg" :src="$withBase('/assets/screenshots/details/reviews.png')" alt="DIVA Reviews Metadata">
</div> -->
