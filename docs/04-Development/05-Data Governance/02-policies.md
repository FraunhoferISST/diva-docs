---
id: policies
title: Policies
---

# Policies

As explained in the [Introduction to Data Governance](./introduction) in the DIVA ecosystem, policies are a set of conditions that allow a query to be executed with a certain scope. For the task of restricting access and enforcing policies, we provide a policy decision service similar to popular solutions such as [Open Policy Agent](https://www.openpolicyagent.org/) or [Oso](https://www.osohq.com/). What distinguishes our solution from the alternatives is its scope, i.e., its wide-ranging and generic configuration options and, in particular, deeper capabilities for incorporating input data into the decision-making process. Since we provide a variety of ways to query the different data sources on the platform and the fields included in the requests, a good understanding of DIVAs architecture is recommended before starting to work on policies.

In the next sections you will find information about the [basic-behaviour](#basic-behaviour) and the specifications we have made, the [structure-of-policies](#structure-of-policies), the [business-decision-point](#business-decision-point) and how to use all these tools and concepts to [secure-a-service](#securing-a-service). Since the whole policy system can be quite complex and therefore error-prone, we have also put together some best practices for the [troubleshooting process](#troubleshooting).

## Basic Behaviour

- Forbidden-by-default
- Cache policies

## Structure of Policies

```js
{
    id: "policy:uuid:a229c1a9-9371-4d84-89b7-81b662250c7d",
    title: "User can execute PATCH on itself (excluding roles and groups)",
    description:
      "The policy allows an user to edit own data, excluding the fields for roles and groups",
    isActive: true,
    isEditable: true,
    scope: {
      "headers.serviceName": "entity-management",
      path: "^/users/user:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}.*",
      method: "PATCH",
    },
    condition: {
      and: [
        {
          inputData: {
            query: {
              "headers.diva.actorId": "{{params.id}}",
            },
          },
        },
      ],
    },
    excludes: ["groups", "roles"],
}
```

| Field Name | Description |
|---|---|
|id|Every entity has a random uuid. Use a [uuid-generator](https://www.uuidgenerator.net/) to generate a fresh uuid for new default policies.|
|title|The title of the policy. The text should allow another person to quickly see what the policy is about.|
|description|A more in-depth description of the policy. This field is optional, but can be used to e.g. explain under which conditions the policy allows requests.|
|isActive|Boolean variable to switch policies on or off.|
|isEditable|Boolean variable to make policies immutable. This is necessary, for example, for 'allow-all'-style policies for admins. If these are turned off, admins may not be able to edit policies and consequently lose access to the system.|
|scope|An object describing the scope the policy applies to. This can be, for example, a specific endpoint. [Below](#scope) is a more detailed explanation of the object.|
|condition|An object that describes what conditions must be met for the policy to allow the query. This object can become complex as it allows for chaining and different query types and mechanisms for entering data for decision making. [Below](#condition) is a more detailed explanation of the object.|
|includes **or** excludes|Policies can also allow a query but, for example, display only a subset of the fields of the object associated with the query or allow only a few of them to be modified. You can use includes or excludes to specify which fields to include or exclude. Please note that you should not use includes and excludes in the same policy and that includes cause only the specified fields to be visible.|

### scope

### condition

### templates
- {{}}
- regex
- pipe-operator

## Business Decision Point
- caching
- re-caching
- include/exclude-chaining
- responses

## Securing a Service
- adding and activating policy middleware

# Troubleshooting
- admin has locked himself out
- forbidden in every request
