{
  "title": "ModeType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "StatsFilterInput",
      "description": null,
      "url": "/travelgatex/reference/inputobjects/statsfilterinput"
    },
    {
      "name": "ActiveFilterInput",
      "description": null,
      "url": "/travelgatex/reference/inputobjects/activefilterinput"
    },
    {
      "name": "LoggingLegacyFilterInput",
      "description": "Filters needed to do a search.\nFrom (Start date of search - YYYY-MM-DD HH:mm:ss), To (End date of search - YYYY-MM-DD HH:mm:ss), ",
      "url": "/travelgatex/reference/inputobjects/logginglegacyfilterinput"
    }
  ],
  "enumValues": [
    {
      "name": "BUYER",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "SELLER",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "ModeType",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
