{
  "title": "ServiceApi",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Service API ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Service API Name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[ServiceOperation]",
      "name": "operations",
      "url": "/travelgatex/reference/objects/serviceoperation",
      "description": "Operations that a Service Api has",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "AdminQuery",
      "description": "",
      "url": "/travelgatex/reference/objects/adminquery"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ServiceApi"
}
Information related to a Service API
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
