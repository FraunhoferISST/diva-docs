---
id: policies
title: Policies
---

# Policies

## Basic Behaviour

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

## Business Decision Point

## Securing a Service