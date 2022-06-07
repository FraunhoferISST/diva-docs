---
id: introduction
title: Data Governance
---

# Data Governance

DIVA was developed as a flexible and open data catalogue and therefore - by design - had no strict access policies in the beginning. With the release of DIVA `v4.0.0` that changed and an extensive data governance toolset was introduced. For this we added policies and rules as new entities which are used by the two new services [business-decision-point](./policies#business-decision-point) and [business-rules-executor](./rules#business-rules-executor) to enforce platform-wide behaviour, particularly with respect to data. Rules and policies are entities and are therefore managed by the entity-management-service and stored in the MongoDB. In the next few pages, we will explain the concept behind rules and policies and how they are loaded and stored in more detail.

## Access Management

An important feature in data governance is access mangagement. With the [business-decision-point](./policies#business-decision-point) every endpoint and thus every entity can be secured in a fine-grained manner. The service operates on policies which are basically sets of conditions that allow a certain request to be executed. They can be used to define a scope the policy should apply to, the conditions themselfes under which the policy will allow the request as well as includes and excludes similar to mongoDB-queries.

Learn more about using policies and the business-decision-point [here](./policies).

## Rule Execution

Data governance also includes the ability to respond to specific actions on platforms. For example, if data is deleted from a shared catalog, it could be a requirement to inform the remaining members. For this we added the [business-rules-executor](./rules#business-rules-executor) which responds to rules describing how to react to certain messages in Kafka topics. In the case of DIVA, we use this mechanism, to remove associated data such as reviews when the underlying data is deleted.

Learn more about using rules and the business-rules-executor [here](./rules).

## Management of Policies & Rules

As explained above, policies and rules form the basis for decisions made by the [business-decision-point](./policies#business-decision-point) and the [business-rules-executor](./rules#business-rules-executor). Similar to assets, resources or schematas; policies and rules are predefined entities. As such they have a predetermined schema and are managed by the entity-management. That includes that they are stored in the MongoDB, referenced in the data-network and have their own routes as well as their own internal services. To populate the DB with policies and rules when the platform is first launched, defaultEntities can be loaded. These are stored as simple js files in the `defaultEntities`-folder in the entity-management. At start-up, the `loadDefault()`-function of the `EntityService` is then called to load the defaultEntities. 