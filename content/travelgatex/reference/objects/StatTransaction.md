{
  "title": "StatTransaction",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "reference",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Extra information about transaction.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "total",
      "url": "/travelgatex/reference/objects/stat",
      "description": "Total transaction time",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "buildRequest",
      "url": "/travelgatex/reference/objects/stat",
      "description": "Build request time",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "workerCommunication",
      "url": "/travelgatex/reference/objects/stat",
      "description": "Worker connection time",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "parseResponse",
      "url": "/travelgatex/reference/objects/stat",
      "description": "Parse response time",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "StatTransaction"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
