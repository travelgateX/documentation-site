{
  "title": "ServiceOperation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Service Operation ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Service Operation name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "type",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Service Operation type",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "ServiceApi",
      "description": "Information related to a Service API",
      "url": "/travelgatex/reference/objects/serviceapi"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ServiceOperation"
}
Information related to an API operation
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
