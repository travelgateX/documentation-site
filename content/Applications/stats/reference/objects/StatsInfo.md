{
  "title": "StatsInfo",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/stats/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatsInfoTypes!",
      "name": "type",
      "url": "/stats/reference/enums/statsinfotypes",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int64!",
      "name": "hits",
      "url": "/stats/reference/scalars/int64",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "time",
      "url": "/stats/reference/scalars/int",
      "description": null,
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Added new fields averageTime and totalTime.",
      "descriptionSplitted": {
        "date": "2019-04-03",
        "first": "deprecated from",
        "second": "Added new fields averageTime and totalTime."
      },
      "deprecationDate": "2019-04-03",
      "typeName": "StatsInfo"
    },
    {
      "typeString": "Int64!",
      "name": "averageTime",
      "url": "/stats/reference/scalars/int64",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int64!",
      "name": "totalTime",
      "url": "/stats/reference/scalars/int64",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[StatsAsset!]",
      "name": "assets",
      "url": "/stats/reference/objects/statsasset",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "StatsInfo",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
