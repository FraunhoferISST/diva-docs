# Committing changes

We encourage all contributors to stick to the commit convention following the specification on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
With this restriction, we want to create a consistent and trackable history of changes across all system components.
Furthermore, rule-compliant commits are important for the automatic generation of the [CHANGELOG.md]() according to the specification 
from [keepachangelog.com](https://keepachangelog.com/en/1.0.0/).

In general, write the commits in imperative present tens. The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

We are using the following types: `feat`, `feat`, `chore`, `test`, `docs`, `feat`, `refactor`, `ci`, `release`.
The list ist not comprehensive and can be extended on demand.

Append `!` for breaking changes to a type.

::: tip Scopes are useful
The scope in the commit message help a lot to understand which parts of the system a commit affects. Always try to specify 
the scope in your messages. When working on services, you can use the [abbreviation]() of the service name as the scope. 
If the change can be assigned to an issue, you can derive the scopes from the labels of the corresponding issues.
:::

To give you an orientation consider some examples of good commits.

```
feat!(UM): change the response for GET operation

This commit introduces changes to the response format 
of the User Management GET operation to adher to new OpenAPI specification 
```

```
release(client): v20.0.0
```

```
ci: update actions
```