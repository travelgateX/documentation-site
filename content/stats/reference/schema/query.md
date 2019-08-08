{
  "title": "StatsQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "StatsConnection!",
      "name": "report",
      "url": "/stats/reference/objects/statsconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "StatsFilterInput!",
          "name": "filter",
          "url": "/stats/reference/inputobjects/statsfilterinput",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/stats/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/stats/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/stats/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/stats/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "ConnectionConnection!",
      "name": "getActiveConnection",
      "url": "/stats/reference/objects/connectionconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ActiveFilterInput!",
          "name": "filter",
          "url": "/stats/reference/inputobjects/activefilterinput",
          "description": null
        }
      ]
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "StatsQuery",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
