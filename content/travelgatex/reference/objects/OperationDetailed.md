{
  "title": "OperationDetailed",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Operation",
      "name": "operation",
      "url": "/travelgatex/reference/objects/operation",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "totalHits",
      "url": "/travelgatex/reference/scalars/int",
      "description": "operation: String!\noperationType: ServiceOperationType!\nList of service apis.\nserviceApis: ServiceApiConnection!\nTotal hits.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[StatsInfo!]",
      "name": "detailedHits",
      "url": "/travelgatex/reference/objects/statsinfo",
      "description": "Total time\n time: Time!",
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
      "description": "",
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
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
