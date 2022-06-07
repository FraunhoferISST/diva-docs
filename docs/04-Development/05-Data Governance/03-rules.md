---
id: rules
title: Rules
---

# Rules

## Basic Behaviour

## Structure

```js
{
    id: "rule:uuid:8622b14e-6ad4-4083-8748-2d0ea462a7ee",
    title: "Delete review if corresponding entity was deleted",
    isActive: true,
    isEditable: true,
    scope: {
      channel: "datanetwork.events",
      "payload.type": "delete",
      "payload.object.id": "edge:.*",
      "payload.attributedTo[0].object.id": "review:.*",
    },
    condition: {
      and: [
        {
          cypher: {
            query:
              "MATCH (r:review {id:'{{payload.attributedTo[0].object.id}}'})-[:isReviewOf]->(entity) RETURN (count(entity)=0) as ruleMet",
          },
        },
      ],
    },
    actions: [
      {
        headers: {
          "x-diva": { actorId: "{{payload.actor.id}}" },
        },
        method: "DELETE",
        endpoint:
          "{{entity-management}}/reviews/{{payload.attributedTo[0].object.id}}",
        ignoreErrors: [
          {
            statusCode: 404, // already deleted, ignore it
          },
          {
            statusCode: 403, // forbidden is forbidden, try not to write rules that confront with the policies
          },
        ],
      },
    ],
},
```

## Business Rules Executor