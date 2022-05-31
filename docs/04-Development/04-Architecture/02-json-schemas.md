---
id: json-schemas
title: Schemata
---

To ensure high level of integrity and validity during write operations to the data storage and exchange of Kafka messages, we use [JSON Schemas](https://json-schema.org/) and [AsyncAPI](https://www.asyncapi.com/) accordingly.

## JSON Schema

JSON schemas are the fundamental building block of the whole DIVA architecture.
In Diva 2 we have implemented a granular structured hierarchical schema system that has saved us a lot of unnecessary complexity and hundreds lines of code compared to DIVA 1.

Every existing piece of data in DIVA is well defined in a schema.
DIVA never accepts data that is not explicitly defined in a schema.
This in turn means that schemas are the first place in the system to be tweaked when developing new functionality.
Schema-drive development engages us to first clearly define the data model and then start with implementation.
However, the most important benefit comes from the fact that thanks to the JSON Schema tools we were able to implement fully automated validation of the data in our services.

You will find all the schemas [here](https://github.com/FraunhoferISST/diva/tree/main/core/services/entity-management/defaultEntities/jsonSchemata).
JSON schema determine our [data model](../architecture/introduction#data-model).
Since the attributes of different resource types can vary significantly, we define other sub-resources such as PDF, CSV, PNG, etc. for the resources and assets.
The type of sub-resource is generally determined by the format or type of data source.
E.g. MongoDB, Hadoop or an API could be a sub-resource.
The entity abstracts common attributes that are "inherited" by all other entities.

:::caution Top-to-Bottom schemas
Practically, we define the schemas using the top-to-bottom approach.
This means that we extend from a parent schema called `entity`.
Every other entity is underneath the entity schema.
:::

With thisapproach, we include the subordinated schemas in the master schema according to certain conditions.
Basically, for example, the resource schema contains all the schemas definition of the sub-resources.
The advantages of this way of constructing the schemas are especially evident in automated validation.

### Defining a Schema

The biggest disadvantage of schemas - they must be written.
The important thing to note here is that each attribute has a strict and detailed definition.
And as mentioned before, every possible piece of data must be described in a schema, whether it is a resource, user, etc.
We already have a user interface to generate new fields and thus schemas [here](../../user-docs/admin/field-generator).
We will demonstrate the process of schema creation using a new field for a resource.

:::caution
This part will be updated soon...
:::

### Validation

There are many different tools in the JSON Schema ecosystem.
For validating the data against a schema we use [ajv](https://github.com/ajv-validator/ajv) library for Node.js.
We recommend the use of similar tools for your programming language.

Generally all write operations to the main MongoDB storage must pass validation first.
So all management services must always implement the validation.
The management services like Resource or User Management fetch the required schema on a start time from the Schema Registry service.
Important to note that the services have only to fetch the root schema (e.g. `resource.json` or `user.json`) thanks to the top-to-bottom approach and automated schema resolution in ajv.
The services with read-only access to the entities can implement the validation, but do not have to.
