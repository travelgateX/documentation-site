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
    },
    {
      "typeString": "Int!",
      "name": "travelOperation",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Service Operation Travel Operation ID (1: avail) (2: reservation) (3: batch) (4: batchLongRun)",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "ServiceApi",
      "description": "Information related to a Service API",
      "url": "/travelgatex/reference/objects/serviceapi"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ServiceOperation",
  "hideGithubLink": true
}
Information related to an API operation
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
