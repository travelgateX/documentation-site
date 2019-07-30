{
  "title": "StatsInfoTypes",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "StatsInfo",
      "description": "Details of an specific error",
      "url": "/travelgatex/reference/objects/statsinfo"
    }
  ],
  "enumValues": [
    {
      "name": "ALL",
      "description": "",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "OK",
      "description": "Stats in OK state",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "INTEGRATION",
      "description": "Stats in NOK state caused by integration issues",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "PROVIDER",
      "description": "Stats in NOK state caused by supplier issues",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "COMMUNICATION",
      "description": "Stats in NOK state caused by Timeout",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "HUB",
      "description": "Stats in NOK state caused by HUB issues",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "OTHER",
      "description": "Stats in NOK state caused by other causes",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "StatsInfoTypes",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
