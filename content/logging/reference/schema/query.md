{
  "title": "StatsQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "StatsConnection!",
      "name": "report",
      "url": "/stats/reference/objects/statsconnection",
      "description": "The report query, represents all of the entry points into our object graph",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "StatsFilterInput!",
          "name": "filter",
          "url": "/stats/reference/inputobjects/statsfilterinput",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/stats/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/stats/reference/scalars/string",
          "description": ""
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
