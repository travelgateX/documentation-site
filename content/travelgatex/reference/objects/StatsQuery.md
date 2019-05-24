{
  "title": "StatsQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "StatsConnection!",
      "name": "report",
      "url": "/travelgatex/reference/objects/statsconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "StatsFilterInput!",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/statsfilterinput",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/travelgatex/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/travelgatex/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/travelgatex/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/travelgatex/reference/scalars/string",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Query",
      "description": null,
      "url": "/travelgatex/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "StatsQuery",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
