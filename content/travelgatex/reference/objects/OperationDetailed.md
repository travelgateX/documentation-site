{
  "title": "OperationDetailed",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Operation!",
      "name": "operation",
      "url": "/travelgatex/reference/objects/operation",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int64!",
      "name": "totalHits",
      "url": "/travelgatex/reference/scalars/int64",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[StatsInfo!]",
      "name": "detailedHits",
      "url": "/travelgatex/reference/objects/statsinfo",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[StatsInfoTypes!]",
          "name": "type",
          "url": "/travelgatex/reference/enums/statsinfotypes",
          "description": null
        },
        {
          "typeString": "[Int!]",
          "name": "code",
          "url": "/travelgatex/reference/scalars/int",
          "description": null
        }
      ]
    },
    {
      "typeString": "Boolean!",
      "name": "cache",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": null,
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Added new field trafficType.",
      "descriptionSplitted": {
        "date": "2019-04-03",
        "first": "deprecated from",
        "second": "Added new field trafficType."
      },
      "deprecationDate": "2019-04-03",
      "typeName": "OperationDetailed"
    },
    {
      "typeString": "TrafficType!",
      "name": "trafficType",
      "url": "/travelgatex/reference/enums/traffictype",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "OperationDetailed",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
