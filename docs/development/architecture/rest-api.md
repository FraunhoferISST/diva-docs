---
id: rest-api
title: REST API
---

# REST API

The core of our system consists of several services that provide their functionality through REST API.
These are only the API's that are used internally by DIVA and should not be available to third party providers. 
Since the services do not implement authentication logic, the service must always run behind the [Gateway](./gateway.md).

## Best practises

The number of services will potentially continue to grow. This makes it more complicated to implement a
system-wide consistent, clean and simple API. This guide provides us with a reference for developing the
APIs in a consistent manner and helps us make the right decisions.

The rules listed below are a derivation of the general REST API best practices. We only mention the points
that are relevant to us here. This guide is not intended to teach you REST API. Furthermore, REST is a style
guide, so we adopt some practices to the architecture of our system.

**Legend**

✅ - do

🛑 - nope

⚡ - not recommended

### Describe your API with OpenAPI 

All services document their interfaces with OpenAPI. Please write the definition as detailed as possible and explain all existing edge cases.
All parameters, return values, etc. must have clear and strict type definitions.

### Use nouns to represent resources
In REST, primary data representation is called Resource. Do **not** use verbs to express manipulations on resources, 
as they are presented by HTTP methods.
```
✅ service/users
🛑 service/getUsers
```

### Name collections with plural nouns
In most cases our REST interfaces represent collections. By using the plural it becomes obvious that we are 
working with a set of resources (e.g. users). To express manipulation on a single resource use an endpoint with `id` path parameter.
```
✅ users
✅ users/:id
🛑 user
🛑 user/:id
```

### Controller archetype

Sometimes the HTTP verbs are not sufficient to express an action on resources. Use [Controller Resources](https://restfulapi.net/resource-naming/) 
to express special actions.
```
✅ POST users/:id/verify
```

### Pagination, projection and filtering

The APIs must provide pagination, projection and filtering for resources.

#### Pagination

Pagination is the most important concept and must be present in all APIs. We also recommend to fallback to a default 
value for the page size, if not defined in the request. But make sure that this value is clearly documented. 
The response must contain a `cursor` that can be used to query the next page. The `cursor` value is dependent on the 
technology used in the service, but the client does not have to worry about the internal mechanisms. If there is no 
cursor in the response, there is no further page. Also make sure to include the total number of entities as `total` that could be returned 
according to current filtering conditions.

```
✅ GET resources RESPONSE BODY {"collection": [50], total: 1300, cursor: "12g3hhgfhg1f32"}
✅ GET resources?cursor=12g3hhgfhg1f32
✅ GET resources?cursor=12g3hhgfhg1f32&pageSize=20
```

#### Projection

In oder for the client to be able to select the fields of a resource, the API must support projection. The `fields` query parameter
that is a String with coma separated fields in it must be supported.
```
✅ GET users?fields=name,email,imageId
```

#### Filtering

To keep the API simple and consistent, the API muss support simple filtering possibilities by specific entity fields with a
general scheme `[field]=[value]`. In the corresponding OpenAPI specification it must be documented by which fields the entities can be filtered
```
✅ GET reviews?belongsTo=resource:uuid:some-id
🛑 GET users/admin
🛑 GET resources(type=pdf&rating>=4)
```

For resources, assets, user and other entity types in the future we have to consider more complex search functionality.
The Search Assistant service is responsible for advanced search functionalities.

::: details Summary
Response:

```json
{
  "total": 1300,              // total number of entites
  "collection": [],           // returned array of entites
  "cursor": "dajkshjkh234kh"  // cursor to the next page
}
```

Query:
* `cursor` - cursor for the next page
* `fields` - coma separated list of projection fields as String
* `[someField]` - entity specific filtering fields

:::

### Nesting resources
There are different views regarding the representation of the hierarchy between resources. To be short, we prefer a 
flat structure without sub resources to keep the API as simple and clear as possible. In general, entities that can 
be seen as independent resources should have their own endpoint. Instead of the nesting we express the relations between Resources
like stated in the [data model](./README.md#data-model) section. So entities that are in a relation to another entity must store the `id` of this entity
as `belogsTo` attribute. Corresponding to the [filtering](#filtering) rules we could request entities that belong to some other entity
with `belogsTo` query parameter.

```
✅ reviews
✅ reviews/:id
✅ reviews?creatorId=user:uuid:some-id
✅ reviews?belongsTo=entity:uuid:some-id
⚡ users/:id/reviews
⚡ users/:id/reviews/:reviewId
``` 
#### Motivation
First of all, by looking at the not recommended examples, we can't tell if we get a complete representation of the 
comments or a list of IDs. This affects the readability of the API. If we want to be able to paginate, filter or 
project the comment, URL will grow quickly in length and become confusing.

But the most important point is our microservice architecture. We already have Review Management service, 
which performs all operations on the Reviews. So it makes no sense to manage the Reviews via the 
endpoint `users/:id/reviews`. It is semantically incorrect for Review Management service to provide `users` 
endpoint and User Management has nothing to do with Reviews.

#### Exception

We can break these rule if we are sure that there is a strong coupling between two resources and that this coupling 
does not go beyond several services. As an example we can take User Management Service. Users have an image profile 
and images are independent resources, because a binary file cannot be part of a user document. Nevertheless, there is 
a strong coupling between users and images, since currently only user can have profile imgae. Without users the images 
do not exist. In direct contrast to this, the existence of comments is not bound to a specific resource. Comments can 
also be created by the system itself. So we can accept a subresources according to the user example.

```
users/:id/image
```

#### Nesting resources: n:m

Yes, the above definition allows us to develop simpler and cleaner APIs without service mesh. But what if we really want 
to express a dynamic relation between the entities? An example that will soon be on our desk is the ability for users to 
bookmark entities. That means, we want to somehow capture that a user bookmarks a resource or an asset or removes a 
bookmark, we want to display the list of bookmarks of a user and for an entity we want to display the list of users who 
have bookmarked that entity. Obviously we have to manage the bookmarks in a set. But the question is, how this set has 
to look like and where it is stored. Furthermore it is clear that we need operations POST, GET and DELETE on this set.

But we only want to store the information about who has bookmarked what. We could consider creating a `bookmarks` REST 
resource. Extracting this information to an independent resource seems to be overwhelming. And this is a case for the 
sub resources. At this point it must be admitted that the `<someEntity>/:id/bookmarks` cannot be avoided. We just need 
to replace `<someEntity>` with concrete one. One option would be to store the information about bookmarks in the 
resource, asset etc. itself. But due to our micro service nature we would have to implement this endpoint for each 
service. And redundancy is the thing we want to avoid the most. We know that only users can save the entities. 
So the users are good candidates for it. Now we agree that we need the endpoint `users/:id/bookmarks`. Again, we 
want to avoid redundancies and of course do not save the whole entity object as a bookmark. Instead we only store 
the `id`'s. This means in turn that we cannot query complete entities at the endpoint `GET users/:id/bookmarks`. 
Instead, the individual entities must be queried from the corresponding service by `id`. This approach helps us to 
keep the individual APIs as simple as possible and decoupled from each other, but introduces a certain amount of 
additional effort for the clients.

The concrete implementation can 
vary, we do not mention how the bookmarks are stored, they can be persisted as part of the user object in an array or 
individually in an external collection. But through this endpoint we emphasize that bookmarks are not independent 
resources and are strongly related to the user.

### Flat Resources Structure
Try to keep the structure of all resources as flat as possible. This will help us to keep the individual documents in 
the collections clear and not too large. Especially try to avoid arrays of objects, which can potentially be very long. 
One example is the history. Logically you can see the history as a subresource of resources. But we expect that the 
history will grow over time and make the resource document very large. In this case the option to represent history as 
a separate REST resource should be considered.

### Bulk request mode

The bulk mode allows to create and / or update multiple resources in one request. We should consider this option for 
our resources and asset APIs. The endpoints for creating new entities should support bulk mode, where an array of new 
resources is accepted. This can be useful when importing data sources that contain many individual resources.

### Consistent Responses

Depending on the API endpoint and the status of the operation, we specify different response schemes. 
In all cases, the use of HTTP status code must be implemented consistently and semantically correct and documented in the OpenAPI specification. 

+ Collection response (according to [pagination](#pagination)):
  ```json
    {
      "total": 1500,
      "collection": [],
      "cursor": "akjzdaztsgdz32jg="
    }
  ```

+ Error response:
  ```json
    {
      "type": "string",    // error type like "AuthentificationError"
      "message": "string", // detailed human readable message
      "code": 409,         // error code, HTTP Status Code or some specific code
      "errors": [          // additional errors, mostly schema or specification validation errors
        {}
      ]
    }
  ```


+ Bulk collection response:
  `Status 207`
  ```json
    [
      {
        "statusCode": 500,      // status code for each operation in the bulk
        "data": "string",       // additional data
        "error": {              // error must be included in error case
          "type": "string",
          "message": "string",
          "code": 409,
          "errors": [
            {}
          ]
        }
      }
    ]
  ```