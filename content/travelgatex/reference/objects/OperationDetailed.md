{
  "title": "OperationDetailed",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Operation!",
      "name": "operation",
      "url": "/travelgatex/reference/objects/operation",
      "description": "Operation information",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "totalHits",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Total hits.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[StatsInfo!]",
      "name": "detailedHits",
      "url": "/travelgatex/reference/objects/statsinfo",
      "description": "Hits grouped depending on their status",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[StatsInfoTypes!]",
          "name": "type",
          "url": "/travelgatex/reference/enums/statsinfotypes",
          "description": ""
        },
        {
          "typeString": "[Int!]",
          "name": "code",
          "url": "/travelgatex/reference/scalars/int",
          "description": ""
        }
      ]
    },
    {
      "typeString": "Boolean!",
      "name": "cache",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Responsible for the execution of the this stats. If TRUE then cache, else client",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "OperationDetailed"
}
Stats information per operation
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
