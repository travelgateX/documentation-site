{
  "title": "StatsQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "StatsConnection!",
      "name": "report",
      "url": "/travelgatex/reference/objects/statsconnection",
      "description": "The report query, represents all of the entry points into our object graph",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "StatsFilterInput!",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/statsfilterinput",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/travelgatex/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/travelgatex/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Query",
      "description": "The query root of TravelgateX's GraphQL interface.",
      "url": "/travelgatex/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "StatsQuery"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
