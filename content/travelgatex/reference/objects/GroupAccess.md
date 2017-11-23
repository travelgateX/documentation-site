{
  "title": "GroupAccess",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[String!]!",
      "name": "groupCodes",
      "url": "/travelgatex/reference/scalars/string",
      "description": "group identifiers",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Access!]",
      "name": "accesses",
      "url": "/travelgatex/reference/objects/access",
      "description": "",
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
  "typename": "GroupAccess"
}
Pair of groups and accesses. All accesses returned will belong to all the groups in groupCodes
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
