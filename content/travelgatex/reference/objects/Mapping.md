{
  "title": "Mapping",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[MappingContext!]",
      "name": "contexts",
      "url": "/travelgatex/reference/objects/mappingcontext",
      "description": "Returns the differents group contexts, you can filter by some contexts.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "contextCodes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "[String!]",
          "name": "supplierCodes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Query",
      "description": "",
      "url": "/travelgatex/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Mapping"
}
Returns the mapping for a group.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
