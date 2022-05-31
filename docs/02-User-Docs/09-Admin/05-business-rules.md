---
id: business-rules
title: Business Rules
---

DIVA provides an RESTful API that allows an administrator to create, update and delte so called business rules.
Business rules are triggered by events that are available in a Kafka topic.
A business rule has a specific data model that you need to consider.
Here you can see an example:

```json
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
  }
```

If you are using our RESTful API, you don't need to set an `id` when you create a new business rule.
Please take care, that you set all the other fields.

|field|description|
|---|---|
|title|give a good title so you can understand what this rule should do|
|isActive|DIVA only considers rules if they are active (true)|
|isEditable|Prevents the accidental deletion of a rule. WARNING: If you want to delete this rule if this is set to false, ask a system admin to delete this rule insode our MongoDB|
|scope|Here you can specify what must be present in a kafka message. You can use RegEx on the right hand of the key-value pais.|
|condition|Here you can specify additional conditions that must be met, before we execute actions. There are different kinds of conditions. You can check in mongoDB or neo4j. For more examples check our code.|
|actions|This is what should be triggered if scope and conditions are met. Currently only HTTP requests can be executed. You can ignore specific HTTP status code that are fine to you.|
