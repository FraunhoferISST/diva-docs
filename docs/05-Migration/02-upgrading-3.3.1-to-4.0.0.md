---
id: upgrading-3.3.1-to-4.0.0
title: Upgrading from 3.3.1 to 4.0.0
---

:::caution
Currently, there is no automatic migration from 3.3.1 to 4.0.0.
This is due to the fact that an extremely large number of things have changed in the system.
We think it is saver to do a migration by hand.
:::

## First Steps

* We recommend stopping a large part of the DIVA deployment first.
* However, keep **MongoDB**, **Elasticsearch** and **MinIO** running.
* make backups from these three databases

## Remove outdated Services

* remove container and image for **resource-management**
* remove container and image for **asset-management**
* remove container and image for **review-management**
* remove container and image for **user-management**
* remove container and image for **dsc-adapter**
* remove container and image for **schema-registry**
* remove container and image for **resource-management-sink**
* remove container and image for **service-management**

## Remove Kafka Volume

We also added new topics and have a few new data models for the Kafka messages.
We recommend to delete the Kafka docker volumes to give you a fresh start.
Just stop Kafka and Zookeeper, remove the Volumes and then restart Kafka and Zookeeper.

## Upgrade to neo4j

neo4j is our new database that stores the relations between the entities.

* Create a new node for every entity that is stored in the MongoDB collections `resources`, `assets`, `users`, `reviews`, `services`.
* Every node needs a label. The label to be set can be found in the entityType field of the entity.
* Also set a node property called `entityId` with the value found in the entities `id` field.
* Every entity also has relations. We need to set edges for all the relations.
  * In MongoDB check every record for the `creatorId` field. Add an edge from the creator to the entity with an label called `isCreatorOf`. Remove the `creatorId` field.
  * In MongoDB check every record for the `ownerId` field. Add an edge from the creator to the entity with an label called `isOwnerOf`. Remove the `ownerId` field.
  * Assets have a field called `entities`. For every entry in `entities` create a new edge from the entity in the list to the asset with a label called `isPartOf`. Remove the `entities` field.
  * Every review has a `belongsTo` field with an id. Please create an edge from the review to the entity with corresponding id. You need to set a label called `reviewOf`.

## Upgrade MongoDB

We merged the different entity collections (`resources`, `assets`, `users`, `reviews`, `services`) into one `entities` collection.

* copy all entries of these collections in a new `entities` collection.
* Please change the field name `created` to `createdAt`.
* Please change the field name `modified` to `modifiedAt`.
* Please change the field name `belongsTo` to `attributedTo`.
* Please change the field name `fileCreated` to `fileCreatedAt`.
* Please change the field name `fileModified` to `fileModifiedAt`.

## Upgrade MinIO Buckets

You need to rename all files in the `file-lake` bucket.
In 3.3.1 we used the file hash as unique name.
From 4.0.0 on, we use the `id` stored in MongoDB as unique name in the bucket.
The following is pseudo code that you can script to help you doing this task:

```text
forEach in MongoDB.Collection.resources => (e):
  if field e.uniqueFingerprint exists:
    rename MinIO(e.uniqueFingerprint) to MinIO(e.id)
```

## Upgrade Elasticsearch

You can delete the whole Elasticsearch Volume as we need to reindex the system.

* Stop Elasticsearch
* Delete all Volumes that store data
* Start Elasticsearch (using our docker-compose with settings)
* To trigger a complete reindex we currently need a little hack:
  * Start our `entity-management` and wait till it is booted.
  * Start our new `elasticsearch-connector`.
  * Kafka needs to run.
  * Use the API to create a new JSON Schema (see `/api` when `entity-management` is running).
  * Now just delete that JSON Schema you created. This will trigger a complete reindex of the Elasticsearch data.
