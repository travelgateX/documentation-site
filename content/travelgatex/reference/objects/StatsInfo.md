{
  "title": "StatsInfo",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatsInfoTypes!",
      "name": "type",
      "url": "/travelgatex/reference/enums/statsinfotypes",
      "description": "Stats type",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "hits",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Total hits",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "time",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Average time (ms)",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[StatsAssert!]",
      "name": "asserts",
      "url": "/travelgatex/reference/objects/statsassert",
      "description": "Details about errors.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "StatsInfo"
}
Details of an specific error
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
