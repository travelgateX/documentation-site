{
  "title": "ConnectUser",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/string",
      "description": "unique connect user of a supplier",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "indicates whether a connect user is active",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[ConnectUserGroup!]",
      "name": "connectUserGroups",
      "url": "/travelgatex/reference/objects/connectusergroup",
      "description": "connect user's related data of its groups",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Mutation",
      "description": "Mutations are operations that change or update data in the server.",
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ConnectUser"
}
data related to a connect user and its groups
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
