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
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "GroupAccess"
}
Pair of groups and accesses. All accesses returned will belong to all the groups in groupCodes
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
