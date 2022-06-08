---
id: policies
title: Policies
---

# Policies

As explained in the [Introduction to Data Governance](./introduction) in the DIVA ecosystem, policies are a set of conditions that allow a query to be executed with a certain scope. For the task of restricting access and enforcing policies, we provide a policy decision service similar to popular solutions such as [Open Policy Agent](https://www.openpolicyagent.org/) or [Oso](https://www.osohq.com/). What distinguishes our solution from the alternatives is its scope, i.e., its wide-ranging and generic configuration options and, in particular, deeper capabilities for incorporating input data into the decision-making process. Since we provide a variety of ways to query the different data sources on the platform and the fields included in the requests, a good understanding of DIVAs architecture is recommended before starting to work on policies.

In the next sections you will find information about the [basic-behaviour](#basic-behaviour) and the specifications we have made, the [structure-of-policies](#structure-of-policies), the [business-decision-point](#business-decision-point) and how to use all these tools and concepts to [secure-a-service](#securing-a-service). Since the whole policy system can be quite complex and therefore error-prone, we have also put together some best practices for the [troubleshooting process](#troubleshooting).

:::danger Danger zone!
Be aware that changing policies can have far-reaching consequences. Policies should be checked for errors, in the best case automatically. Policies should also be deliberately kept more restrictive so as not to accidentally allow too much.
:::

## Basic Behaviour

The most basic concept of policies and the business-decision-point is, that all actions (on services where the business-decision-point is integrated) are **forbidden-by-default**. That means that policies are used to specifically **allow** request rather than to deny them. So when you [secure a service](#securing-a-service) with the business-decision-point, you wont be able to initially access any endpoint because the service cannot find any policies that allow requests for those endpoints (regardless of whether an admin is accessing, for example). 

As explained in the section on [Management of Policies & Rules](introduction#management-of-policies--rules) defaultEntities can be loaded, when the platform is first launched - this includes policies. You will find a `defaultEntities`-folder in the directory of `entity-management`. The systemEntities-collection in the MongoDB is populated with all the default policies found there (if they have not already been loaded into the DB). An important feature of our policies-system is, that you can edit, delete or even create policies while all platform services are running. It is not necessary to reload the business-decision-point, which could cause some user requests to be unintentionally rejected because the service does not handle policy-requests. The business decision point caches the policies from the DB internally. There are several reasons for this, but most importantly it avoids a possible bottleneck due to DB queries. When you use one of the CRUD-endpoints of the entity-management to create, update or delete a policy, the entity-management will produce a new message to a Kafka topic which the business-decision-point listens to, resulting in a re-cache of the policies.

:::caution 🔁 Re-caching policies
When you update (or delete/create) a policy, the expected behavior is not available immediately. It can take a moment for the messages to propagate and for the service to complete the re-caching process.
:::

When you start writing policies to allow requests you wil first have to define a scope. You should try to limit the scope to a specific request or a group of requests. With regex logic (see below) it would be possible to define a wide scope or even allow any request - be careful not to write scopes that are too wide unless absolutely necessary. For conditions, we have added ways to chain multiple queries using Boolean expressions. The queries can be of different types. For example, you could query the Neo4j-datanetwork or even the headers of the request set by the Kong gateway. See [below](#structure-of-policies) for more explanations of the fields available in policy-objects.

## Structure of Policies

**Example of a policy-object that allows PATCH-requests to a user's own data:**

:::note How the example works
For the <ins>**scope**</ins>, the policy targets `PATCH`-requests to a path starting with `/users/` followed by a user-uuid. As you can see the path is a regular expression.
Further, the policy only targets requests that are handled by the service with the name `entity-management` - the field `headers.serviceName` is automatically added to the header by the middleware-handler.

As for the <ins>**condition**</ins> field, an `and`-connector is used at the top level - this is required by the syntax, but in this case it is not used for concatenating different queries. The `and`-connector contains only one `inputData`-query, which is used to query the request objects DIVA-header for the actorId (the DIVA-header is added to the request by DIVA, i.e. the Gateway, and contains important information like the actorID.) The actorId from the DIVA-header is then checked for equality with the id from the url-params (which itself is a template). This is the check to only allow requests to the user's own data.

Finally, the policy also <ins>**excludes**</ins> some fields from beeing PATCH-able. The fields for `groups` and `roles` directly control access rights and should not be able to be changed by a simple user. Here you can also see how important it is to carefully check each policy for errors or overly broad access rights.
:::

```json
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
|id|Every entity has a random uuid. Use a [uuid-generator](https://www.uuidgenerator.net/) to generate a fresh uuid for new default policies. Remember to add the prefix `policy:uuid:`!|
|title|The title of the policy. The text should allow another person to quickly see what the policy is about.|
|description|A more in-depth description of the policy. This field is optional, but can be used to e.g. explain under which conditions the policy allows requests.|
|isActive|Boolean variable to switch policies on or off.|
|isEditable|Boolean variable to make policies immutable. This is necessary, for example, for 'allow-all'-style policies for admins. If these are turned off, admins may not be able to edit policies and consequently lose access to the system.|
|scope|An object describing the scope the policy applies to. This can be, for example, a specific endpoint. [Below](#scope) is a more detailed explanation of the object.|
|condition|An object that describes what conditions must be met for the policy to allow the query. This object can become complex as it allows for chaining and different query types and mechanisms for entering data for decision making. [Below](#condition) is a more detailed explanation of the object.|
|includes **or** excludes|Policies can also allow a query but, for example, display only a subset of the fields of the object associated with the query or allow only a few of them to be modified. You can use includes or excludes to specify which fields to include or exclude. Please note that you should not use includes and excludes in the same policy and that includes cause only the specified fields to be visible.|

### scope

The scope defines which requests the policy applies to. It usually contains values taken directly from the request-object, e.g.:

- **"headers.serviceName"**: a value added by the middleware-handler
- **path**: the path-string of the request-object
- **method**: the HTTP method of the request-object

The scope-object works as follows: On the key-side you can define the header-key whose value should be regex-tested for a match with the value-side of the scope-object. As you can see in the (admin power / allow all rights) example below, you can use any kind of regular expression to customize the scope to your needs:

```json
scope: {
  "headers.serviceName": ".*",
  path: "^/[a-zA-Z0-9]+/[a-zA-Z0-9]+:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}.*",
  method: "(PUT|POST|PATCH|DELETE|OPTIONS)",
},
```

### condition

The condition is the heart of each policy. Here you can use input data from queries on the MongoDB, the data-network or data from the request-object to check if the requirements are met for the policy to allow a request. The structure of the condition-object is that of a boolean expression. At the top-level, you must either use the `and`- or the `or`-keyword, even if the policy contains only one query. However, of course you can also chain together many different search queries with these keywords.

As for the input data and its source, we currently offer three types of queries:

- **cypher**: a query to the neo4j db in cypher language - must return true or false
  ```json
  // A query for checking if the current user is the owner of the entity he requested 
  cypher: {
    query:
      "MATCH (e {entityId:'{{params.id}}'})<-[r:isOwnerOf]-(:user {entityId:'{{headers.diva.actorId}}'}) RETURN (count(r)>0) as ruleMet",
  },
  ``` 
- **mongo**: a query to the MongoDB in MongoDB Query Language - must return true or false
   ```json
   // A query to ensure that the requested entity is not set to private
   mongo: {
    query: {
      id: "{{params.id}}",
      isPrivate: { $ne: true },
    },
  },
  ```
- **inputData**: a query on information stored in the request-object (this also includes the DIVA-header)
  ```json
  // A query for checking if the current user has the realm_access-role ("admin")
  inputData: {
    query: {
      "headers.diva.realm_access.roles": '("admin")',
    },
  },
  ```

### templates

You may have noticed that the above example queries often contain `{{expression}}`. These are **templates** that can be used to express variable values that depend on the request. For example you could use {{headers.diva.actorId}} to access the actorId in the DIVA-header. The templates are replaced with their true value by the business decision point during the policy check - this is the second important reason why policies are cached and not retrieved from the DB on every query, as this would not be possible with templates. For templates we provide a variety of values taken from the request: `headers` (including headers.diva.actorId), `body`, `method`, `path`, `query` and `params`.

It may also happen that you need only a substring of a field (e.g. only the part after the last / of a URL). For this we have introduced the doublepipe operator `||`, which can be used to extract a substring that matches a certain pattern. The following example shows how to use the doublepipe operator to extract the resource-uuid from a path to be used in a cypher query:
```json
// NOTE: This can also be achieved more easily by using {{params.id}} instead
cypher: {
  query:
    "MATCH (r:resource {entityId:'{{path||resource:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$}}'})<-[e:isCreatorOf]-(:user {entityId:'{{headers[\"x-actorid\"]}}'}) RETURN (count(e)>0) as ruleMet",
},
```

## Business Decision Point

The business-decision-point is the service that handles the decision-making process based on the policies. It also handles template substitution and the merging of includes and excludes. For more information about how the service caches and re-caches policies, and how template substitution works, see above.

The decision-making service itsself is - although you should not use it - accessible through the `/enforcePolicies` endpoint which will return the decision (true or false) and, in some cases, a payload object (containing, for example, the projection object for includes and excludes). 

:::caution Usage of the business-decision-point-service
Please note that you are not supposed to use the `/enforcePolicies`-endpoint. Rather, the service should be integrated as a middleware that ensures the policy enforcement across all endpoints of the service. Further information on [securing a service](#securing-a-service) with the business-decision-point can be found below!
:::

Regarding includes and excludes the behaviour we have implemented is as follows: From every policy from the matching policies (those where the scope matches the request) that returns true (the condition is met and the policy allows the request), the includes- or excludes-array will be stored and concatenated to a big includes- and excludes-array-set. When all policies to be considered for the query have been checked, the two array sets are converted to a classic MongoDB projection and added to the response as payload.

:::info Multiple policies matching a request
It is quite possible and even common that several policies match a request and have to be considered in the decision-making process. For example, a simple PATCH request on an entity might have one policy that allows the owner/creator of the entity to PATCH and another policy that allows the administrator to PATCH any entity. Now, when the administrator performs a PATCH on an entity of which he is also the owner/creator, both policies apply.
:::

If you want to take a look at the code for matching policies to a request or the logic behind template replacement, or if you want to add your own behavior, you can find the code at `core/services/business-decision-point/util/utils.js`!

## Securing a Service

If you want to use policies for own of your own services a few steps need to be completed. Most importantly, as mentioned earlier, the [business-decision-point](#business-decision-point) should be integrated as middleware via the expressServer provided in `/core/services/common`. This ensures that policy enforcement works as expected for all endpoints of the service in question. Perform these steps to use policies in a service:

1. Use the expressServer provided in `/core/services/common` (although not recommended you could also copy the middleware-behaviour mentioned in the next steps)
2. Setup the server with standard behaviour: basic middleware, openAPIValidator middleware etc.
3. Use the `addPolicyValidatorMiddleware()`-function provided in the expressServer: `server.addPolicyValidatorMiddleware()` to add the business-decision-point as a middleware
4. Start your service and call any endpoint. Since there is no policy for your service, you should get a `304 "There is no policy that allows the current request"`-response (AccessDeniedError). If you can still access the endpoint check the .env-file for a POLICY_MIDDLEWARE flag. If you do not find one or it is set to something else, set the flag to the string `active`.
5. You can now start adding policies for your service. You can do this either by writing new default policies (restart the entity-management to get these into the DB) or by adding the policies via the `/policy/` endpoint of `/policy/`-endpoint of the entity-management.

:::tip
A good example of the above explanation can be found at the  `entity-management`-service.
:::

# Troubleshooting

- **"Policies are not working, although I have added the middleware!"**
  - Check the .env-file for a POLICY_MIDDLEWARE flag. If you do not find one or it is set to something else, set the flag to the string `active`.
  - If the problem still occurs, double-check your implementation: Is the middleware really called? Are there hidden error messages?
- **"Every request returns `"There is no policy that allows the current request"`!"**
  - As the system denies requests by default (if there are no policies allowing it) this is the expected behaviour. If you have written a policy that explicitly allows the request in question, you have most likely made a mistake. Run the `business-decision-point` in dev-mode and look at the output in the console. It might also help to set a breakpoint in `business-decision-point/services/PoliciesService.js` somewhere in the code that checks the conditions (in the enforcePolicies-function) and see which policies actually matched your request. Most likely your request is either not included or the condition is not met. Start small an run your queries against the MongoDB or Neo4j.
- **"I managed to lock myself out."**
  - Some of the admin-power-rights-policies have the isEditable flag set to false to prevent this. Maybe you are just not logged in with an admin-user. Go to the Keycloak-Admin-Console > Users > Show all users > Select your current user > Realm_access and add the admin-role to your user.
  - If that didn't help, check the MongoDB collection (e.g. via the MongoDB extension for VSCode under divaDb > systemEntities) for policies. You may have managed to delete the admin privileges. In this case, you probably won't be able to add them via the endpoint, as it will be restricted. Add the following admin power right to the collection, for example, using the VSCode extension:
  ```json
  {
    "_id": {
      "$oid": "62a0a532f531b8de9798ee74"
    },
    "id": "policy:uuid:c269f6ae-d5ad-4522-952e-244d0f10ac1e",
    "title": "Admin Power Right",
    "isActive": true,
    "isEditable": false,
    "scope": {
      "headers.serviceName": ".*",
      "path": "^/[a-zA-Z0-9]+/[a-zA-Z0-9]+:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}.*",
      "method": "(PUT|POST|PATCH|DELETE|OPTIONS)",
    },
    "condition": {
      "and": [
        {
          "inputData": {
            "query": {
              "headers.diva.realm_access.roles": '("admin")',
            },
          },
        },
        {
          "mongo": {
            "query": {
              "id": "{{params.id}}",
              "isEditable": true,
            },
          },
        },
      ],
    },
    "entityType": "systemEntity",
    "systemEntityType": "policy",
    "createdAt": "2022-06-08T15:04:16.202Z",
    "modifiedAt": "2022-06-08T15:04:16.202Z"
  }
  ```
