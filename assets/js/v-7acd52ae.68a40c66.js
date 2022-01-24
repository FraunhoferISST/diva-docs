(self.webpackChunkdiva_docs=self.webpackChunkdiva_docs||[]).push([[108],{3119:(e,t,s)=>{"use strict";s.r(t),s.d(t,{data:()=>n});const n={key:"v-7acd52ae",path:"/development/architecture/rest-api.html",title:"REST API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Best practises",slug:"best-practises",children:[{level:3,title:"Describe your API with OpenAPI",slug:"describe-your-api-with-openapi",children:[]},{level:3,title:"Use nouns to represent resources",slug:"use-nouns-to-represent-resources",children:[]},{level:3,title:"Name collections with plural nouns",slug:"name-collections-with-plural-nouns",children:[]},{level:3,title:"Controller archetype",slug:"controller-archetype",children:[]},{level:3,title:"Pagination, projection and filtering",slug:"pagination-projection-and-filtering",children:[]},{level:3,title:"Nesting resources",slug:"nesting-resources",children:[]},{level:3,title:"Flat Resources Structure",slug:"flat-resources-structure",children:[]},{level:3,title:"Bulk request mode",slug:"bulk-request-mode",children:[]},{level:3,title:"Consistent Responses",slug:"consistent-responses",children:[]}]}],filePathRelative:"development/architecture/rest-api.md",git:{contributors:[]}}},4819:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>P});var n=s(6252);const a=(0,n.Wm)("h1",{id:"rest-api"},[(0,n.Wm)("a",{class:"header-anchor",href:"#rest-api"},"#"),(0,n.Uk)(" REST API")],-1),o=(0,n.Uk)("The core of our system consists of several services that provide their functionality through REST API. These are only the API's that are used internally by DIVA and should not be available to third party providers. Since the services do not implement authentication logic, the service must always run behind the "),r=(0,n.Uk)("Gateway"),i=(0,n.Uk)("."),c=(0,n.uE)('<h2 id="best-practises"><a class="header-anchor" href="#best-practises">#</a> Best practises</h2><p>The number of services will potentially continue to grow. This makes it more complicated to implement a system-wide consistent, clean and simple API. This guide provides us with a reference for developing the APIs in a consistent manner and helps us make the right decisions.</p><p>The rules listed below are a derivation of the general REST API best practices. We only mention the points that are relevant to us here. This guide is not intended to teach you REST API. Furthermore, REST is a style guide, so we adopt some practices to the architecture of our system.</p><p><strong>Legend</strong></p><p>✅ - do</p><p>🛑 - nope</p><p>⚡ - not recommended</p><h3 id="describe-your-api-with-openapi"><a class="header-anchor" href="#describe-your-api-with-openapi">#</a> Describe your API with OpenAPI</h3><p>All services document their interfaces with OpenAPI. Please write the definition as detailed as possible and explain all existing edge cases. All parameters, return values, etc. must have clear and strict type definitions.</p><h3 id="use-nouns-to-represent-resources"><a class="header-anchor" href="#use-nouns-to-represent-resources">#</a> Use nouns to represent resources</h3><p>In REST, primary data representation is called Resource. Do <strong>not</strong> use verbs to express manipulations on resources, as they are presented by HTTP methods.</p><div class="language-text ext-text"><pre class="language-text"><code>✅ service/users\n🛑 service/getUsers\n</code></pre></div><h3 id="name-collections-with-plural-nouns"><a class="header-anchor" href="#name-collections-with-plural-nouns">#</a> Name collections with plural nouns</h3><p>In most cases our REST interfaces represent collections. By using the plural it becomes obvious that we are working with a set of resources (e.g. users). To express manipulation on a single resource use an endpoint with <code>id</code> path parameter.</p><div class="language-text ext-text"><pre class="language-text"><code>✅ users\n✅ users/:id\n🛑 user\n🛑 user/:id\n</code></pre></div><h3 id="controller-archetype"><a class="header-anchor" href="#controller-archetype">#</a> Controller archetype</h3>',16),p=(0,n.Uk)("Sometimes the HTTP verbs are not sufficient to express an action on resources. Use "),l={href:"https://restfulapi.net/resource-naming/",target:"_blank",rel:"noopener noreferrer"},u=(0,n.Uk)("Controller Resources"),d=(0,n.Uk)(" to express special actions."),h=(0,n.uE)('<div class="language-text ext-text"><pre class="language-text"><code>✅ POST users/:id/verify\n</code></pre></div><h3 id="pagination-projection-and-filtering"><a class="header-anchor" href="#pagination-projection-and-filtering">#</a> Pagination, projection and filtering</h3><p>The APIs must provide pagination, projection and filtering for resources.</p><h4 id="pagination"><a class="header-anchor" href="#pagination">#</a> Pagination</h4><p>Pagination is the most important concept and must be present in all APIs. We also recommend to fallback to a default value for the page size, if not defined in the request. But make sure that this value is clearly documented. The response must contain a <code>cursor</code> that can be used to query the next page. The <code>cursor</code> value is dependent on the technology used in the service, but the client does not have to worry about the internal mechanisms. If there is no cursor in the response, there is no further page. Also make sure to include the total number of entities as <code>total</code> that could be returned according to current filtering conditions.</p><div class="language-text ext-text"><pre class="language-text"><code>✅ GET resources RESPONSE BODY {&quot;collection&quot;: [50], total: 1300, cursor: &quot;12g3hhgfhg1f32&quot;}\n✅ GET resources?cursor=12g3hhgfhg1f32\n✅ GET resources?cursor=12g3hhgfhg1f32&amp;pageSize=20\n</code></pre></div><h4 id="projection"><a class="header-anchor" href="#projection">#</a> Projection</h4><p>In oder for the client to be able to select the fields of a resource, the API must support projection. The <code>fields</code> query parameter that is a String with coma separated fields in it must be supported.</p><div class="language-text ext-text"><pre class="language-text"><code>✅ GET users?fields=name,email,imageId\n</code></pre></div><h4 id="filtering"><a class="header-anchor" href="#filtering">#</a> Filtering</h4><p>To keep the API simple and consistent, the API muss support simple filtering possibilities by specific entity fields with a general scheme <code>[field]=[value]</code>. In the corresponding OpenAPI specification it must be documented by which fields the entities can be filtered</p><div class="language-text ext-text"><pre class="language-text"><code>✅ GET reviews?belongsTo=resource:uuid:some-id\n🛑 GET users/admin\n🛑 GET resources(type=pdf&amp;rating&gt;=4)\n</code></pre></div><p>For resources, assets, user and other entity types in the future we have to consider more complex search functionality. The Search Assistant service is responsible for advanced search functionalities.</p><details class="custom-container details"><summary>Summary</summary><p>Response:</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1300</span><span class="token punctuation">,</span>              <span class="token comment">// total number of entites</span>\n  <span class="token property">&quot;collection&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>           <span class="token comment">// returned array of entites</span>\n  <span class="token property">&quot;cursor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dajkshjkh234kh&quot;</span>  <span class="token comment">// cursor to the next page</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Query:</p><ul><li><code>cursor</code> - cursor for the next page</li><li><code>fields</code> - coma separated list of projection fields as String</li><li><code>[someField]</code> - entity specific filtering fields</li></ul></details><h3 id="nesting-resources"><a class="header-anchor" href="#nesting-resources">#</a> Nesting resources</h3>',15),m=(0,n.Uk)("There are different views regarding the representation of the hierarchy between resources. To be short, we prefer a flat structure without sub resources to keep the API as simple and clear as possible. In general, entities that can be seen as independent resources should have their own endpoint. Instead of the nesting we express the relations between Resources like stated in the "),g=(0,n.Uk)("data model"),k=(0,n.Uk)(" section. So entities that are in a relation to another entity must store the "),f=(0,n.Wm)("code",null,"id",-1),v=(0,n.Uk)(" of this entity as "),y=(0,n.Wm)("code",null,"belogsTo",-1),b=(0,n.Uk)(" attribute. Corresponding to the "),w=(0,n.Wm)("a",{href:"#filtering"},"filtering",-1),q=(0,n.Uk)(" rules we could request entities that belong to some other entity with "),x=(0,n.Wm)("code",null,"belogsTo",-1),T=(0,n.Uk)(" query parameter."),I=(0,n.uE)('<div class="language-text ext-text"><pre class="language-text"><code>✅ reviews\n✅ reviews/:id\n✅ reviews?creatorId=user:uuid:some-id\n✅ reviews?belongsTo=entity:uuid:some-id\n⚡ users/:id/reviews\n⚡ users/:id/reviews/:reviewId\n</code></pre></div><h4 id="motivation"><a class="header-anchor" href="#motivation">#</a> Motivation</h4><p>First of all, by looking at the not recommended examples, we can&#39;t tell if we get a complete representation of the comments or a list of IDs. This affects the readability of the API. If we want to be able to paginate, filter or project the comment, URL will grow quickly in length and become confusing.</p><p>But the most important point is our microservice architecture. We already have Review Management service, which performs all operations on the Reviews. So it makes no sense to manage the Reviews via the endpoint <code>users/:id/reviews</code>. It is semantically incorrect for Review Management service to provide <code>users</code> endpoint and User Management has nothing to do with Reviews.</p><h4 id="exception"><a class="header-anchor" href="#exception">#</a> Exception</h4><p>We can break these rule if we are sure that there is a strong coupling between two resources and that this coupling does not go beyond several services. As an example we can take User Management Service. Users have an image profile and images are independent resources, because a binary file cannot be part of a user document. Nevertheless, there is a strong coupling between users and images, since currently only user can have profile imgae. Without users the images do not exist. In direct contrast to this, the existence of comments is not bound to a specific resource. Comments can also be created by the system itself. So we can accept a subresources according to the user example.</p><div class="language-text ext-text"><pre class="language-text"><code>users/:id/image\n</code></pre></div><h4 id="nesting-resources-n-m"><a class="header-anchor" href="#nesting-resources-n-m">#</a> Nesting resources: n:m</h4><p>Yes, the above definition allows us to develop simpler and cleaner APIs without service mesh. But what if we really want to express a dynamic relation between the entities? An example that will soon be on our desk is the ability for users to bookmark entities. That means, we want to somehow capture that a user bookmarks a resource or an asset or removes a bookmark, we want to display the list of bookmarks of a user and for an entity we want to display the list of users who have bookmarked that entity. Obviously we have to manage the bookmarks in a set. But the question is, how this set has to look like and where it is stored. Furthermore it is clear that we need operations POST, GET and DELETE on this set.</p><p>But we only want to store the information about who has bookmarked what. We could consider creating a <code>bookmarks</code> REST resource. Extracting this information to an independent resource seems to be overwhelming. And this is a case for the sub resources. At this point it must be admitted that the <code>&lt;someEntity&gt;/:id/bookmarks</code> cannot be avoided. We just need to replace <code>&lt;someEntity&gt;</code> with concrete one. One option would be to store the information about bookmarks in the resource, asset etc. itself. But due to our micro service nature we would have to implement this endpoint for each service. And redundancy is the thing we want to avoid the most. We know that only users can save the entities. So the users are good candidates for it. Now we agree that we need the endpoint <code>users/:id/bookmarks</code>. Again, we want to avoid redundancies and of course do not save the whole entity object as a bookmark. Instead we only store the <code>id</code>&#39;s. This means in turn that we cannot query complete entities at the endpoint <code>GET users/:id/bookmarks</code>. Instead, the individual entities must be queried from the corresponding service by <code>id</code>. This approach helps us to keep the individual APIs as simple as possible and decoupled from each other, but introduces a certain amount of additional effort for the clients.</p><p>The concrete implementation can vary, we do not mention how the bookmarks are stored, they can be persisted as part of the user object in an array or individually in an external collection. But through this endpoint we emphasize that bookmarks are not independent resources and are strongly related to the user.</p><h3 id="flat-resources-structure"><a class="header-anchor" href="#flat-resources-structure">#</a> Flat Resources Structure</h3><p>Try to keep the structure of all resources as flat as possible. This will help us to keep the individual documents in the collections clear and not too large. Especially try to avoid arrays of objects, which can potentially be very long. One example is the history. Logically you can see the history as a subresource of resources. But we expect that the history will grow over time and make the resource document very large. In this case the option to represent history as a separate REST resource should be considered.</p><h3 id="bulk-request-mode"><a class="header-anchor" href="#bulk-request-mode">#</a> Bulk request mode</h3><p>The bulk mode allows to create and / or update multiple resources in one request. We should consider this option for our resources and asset APIs. The endpoints for creating new entities should support bulk mode, where an array of new resources is accepted. This can be useful when importing data sources that contain many individual resources.</p><h3 id="consistent-responses"><a class="header-anchor" href="#consistent-responses">#</a> Consistent Responses</h3><p>Depending on the API endpoint and the status of the operation, we specify different response schemes. In all cases, the use of HTTP status code must be implemented consistently and semantically correct and documented in the OpenAPI specification.</p><ul><li><p>Collection response (according to <a href="#pagination">pagination</a>):</p><div class="language-json ext-json"><pre class="language-json"><code>  <span class="token punctuation">{</span>\n    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;collection&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;cursor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;akjzdaztsgdz32jg=&quot;</span>\n  <span class="token punctuation">}</span>\n</code></pre></div></li><li><p>Error response:</p><div class="language-json ext-json"><pre class="language-json"><code>  <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// error type like &quot;AuthentificationError&quot;</span>\n    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> <span class="token comment">// detailed human readable message</span>\n    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">409</span><span class="token punctuation">,</span>         <span class="token comment">// error code, HTTP Status Code or some specific code</span>\n    <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>          <span class="token comment">// additional errors, mostly schema or specification validation errors</span>\n      <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n</code></pre></div></li><li><p>Bulk collection response: <code>Status 207</code></p><div class="language-json ext-json"><pre class="language-json"><code>  <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;statusCode&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>      <span class="token comment">// status code for each operation in the bulk</span>\n      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>       <span class="token comment">// additional data</span>\n      <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>              <span class="token comment">// error must be included in error case</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">409</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span><span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n</code></pre></div></li></ul>',18),P={render:function(e,t){const s=(0,n.up)("RouterLink"),P=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[a,(0,n.Wm)("p",null,[o,(0,n.Wm)(s,{to:"/development/architecture/gateway.html"},{default:(0,n.w5)((()=>[r])),_:1}),i]),c,(0,n.Wm)("p",null,[p,(0,n.Wm)("a",l,[u,(0,n.Wm)(P)]),d]),h,(0,n.Wm)("p",null,[m,(0,n.Wm)(s,{to:"/development/architecture/#data-model"},{default:(0,n.w5)((()=>[g])),_:1}),k,f,v,y,b,w,q,x,T]),I],64)}}}}]);