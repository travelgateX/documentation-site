{
  "title": "StatsInfo",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/stats/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatsInfoTypes!",
      "name": "type",
      "url": "/stats/reference/enums/statsinfotypes",
      "description": "Stats type",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "hits",
      "url": "/stats/reference/scalars/int",
      "description": "Total hits",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "time",
      "url": "/stats/reference/scalars/int",
      "description": "Average time (ms)",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[StatsAsset!]",
      "name": "assets",
      "url": "/stats/reference/objects/statsasset",
      "description": "Details about errors.",
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
Details of an specific error
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
