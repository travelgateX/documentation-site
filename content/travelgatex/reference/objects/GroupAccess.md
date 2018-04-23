{
  "title": "GroupAccess",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[String!]!",
      "name": "groupCodes",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Group identifiers",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Access!]",
      "name": "accesses",
      "url": "/travelgatex/reference/objects/access",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "GroupAccess"
}
Pairs of Groups and Accesses. All Accesses returned will belong to all the Groups in groupCodes.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
