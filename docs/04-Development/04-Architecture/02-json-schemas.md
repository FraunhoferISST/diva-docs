---
id: json-schemas
title: Schemata
---

# Schemata  

To ensure high level of integrity and validity during write operations to the data storage and exchange of Kafka messages, 
we use [JSON Schemas](https://json-schema.org/) and [AsyncAPI](https://www.asyncapi.com/) accordingly. 

## JSON Schema

JSON schemas are the fundamental building block of the whole DIVA architecture. In Diva 2 we have implemented a granular 
structured hierarchical schema system that has saved us a lot of unnecessary complexity and hundreds lines of code compared to DIVA 1.

Every existing piece of data in DIVA is well defined in a schema. DIVA never accepts data that is not explicitly defined 
in a schema. This in turn means that schemas are the first place in the system to be tweaked when developing new functionality.
Schema-drive development engages us to first clearly define the data model and then start with implementation.
However, the most important benefit comes from the fact that thanks to the JSON Schema tools we were able to implement 
fully automated validation of the data in our services. 

You will find all the schemas in the [`core/schemata/json-schema/`](https://github.com/FraunhoferISST/diva/blob/master/core/schemata/json-schema) directory.
The directory is structured like follows:

+ `artifacts` - common reusable definitions
+ `resource` - Resource and all subresources schemas
+ `asset` - Asset and all subassets schemas
+ `review` - Review schema
+ `history` - History schema
+ `user` - User schema

Json schema determine our [data model](../architecture/README.md#data-model). Since the attributes of different resource 
types can vary significantly, we define other sub-resources such as PDF, CSV, PNG, etc. for the resources and assets. 
The type of sub-resource is generally determined by the format or type of data source. E.g. MongoDB, Hadoop or an API could be a sub-resource.
The entity abstracts common attributes that are "inherited" by all other entities.

<JsonSchemasModel />

:::caution Bottom-to-top schemas
Practically, we define the schemas using the bottom-to-top approach. This means that the sub-resources do not extend the 
Resource schema, rather they are included in the Resource.
:::

With the bottom-to-top approach, we include the subordinated schemas in the master schema according to certain conditions. 
Basically, for example, the resource schema contains all the schemas definition of the sub-resources. 
The advantages of this way of constructing the schemas are especially evident in automated validation.

We will take a [Resource](https://github.com/FraunhoferISST/diva/blob/master/core/schemata/json-schema/resource/resource.json) example to demonstrate the approach:

```json
{
  ...
  "allOf": [
    {
      "properties": {
        "resourceType": {
          ...
        }
      }
    },
    {
      "$ref": "/entity" // extend Entity schema
    },
    // include sub-resource schema, if resourceType corresponds to this sub-resource
    {
      "if": {
        "properties": {
          "resourceType": {
            "const": "urbanPulseSensor"
          }
        }
      },
      "then": {
        "$ref": "/resourceUrbanPulseSensor"
      }
    },
  ]
}
```

This schema tells us that if we have an entity of type Resource and this Resource has type `urbanPulseSensor`, we need to validate 
against a composition of Entity, Resource and UrbanPulseSensor schemas.

### Defining a schema

The biggest disadvantage of schemas - they must be written. The important thing to note here is that each attribute has 
a strict and detailed definition. And as mentioned before, every possible piece of data must be described in a schema, 
whether it is a resource, user, etc. We will demonstrate the process of schema creation using a new resource type that 
should be added to Diva, e.g., Excel file resource.

First, we need to find the right place for the new scheme. Since we know that this will be a new file Resource, 
we follow the path below:

```
schemata
└───json-schema
│   └───resources
│       │   resource.json
│       │   resourceFile.json
│       │   resourceFileApplicationPdf.json
│       │   ...
│       │   resourceFileExcel.json # our new definition for file Resource 
```

Next create a `resourceFileExcel.json` file and write down all required definitions here. You can use the existing schemas for other types as a guideline.

:::caution
Please define the schemas in detail and as strictly as possible! Always provide attributes with a title and description. 
Wherever it makes sense, define concrete type, format, value range etc. and give a couple of examples.
:::

Since Excel is a file and a subtype of File Resource, we need to include the Excel Resource in `resourceFile.json` according to the bottom-to-top approach:

```json

// resourceFile.json
{
  ...
      "if": {
        "properties": { "mimeType": { "const": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" } }
      },
      "then": {
        "$ref": "/resourceFileExcel"
      }
    },
}
```

This is the general procedure. There is no one ultimate pattern for schema creation for all possible resources in the world. 
Schema composition is a logical process and should be derived from the real world.

### Validation

There are many different tools in the JSON Schema ecosystem. For validating the data against a 
schema we use [ajv](https://github.com/ajv-validator/ajv) library for Node.js. We recommend the use of similar tools for 
your programming language.

Generally all write operations to the main MongoDB storage must pass validation first.
So all management services must always implement the validation. The management services like Resource or User Management
fetch the required schema on a start time from the Schema Registry service. Important to note that the services have only
to fetch the root schema (e.g. `resource.json` or `user.json`) thanks to the bottom-to-top approach and automated schema resolution 
in ajv. The services with read-only access to the entities can implement the validation, but do not have to.