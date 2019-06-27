{
  "title": "ModeType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "StatsFilterInput",
      "description": "Filters needed to do a search.\nUsers (List of users), Suppliers (List of suppliers), ServiceApis (List of service apis), From (Start date of search - YYYY-MM-DD HH:mm:ss), To (End date of search - YYYY-MM-DD HH:mm:ss)",
      "url": "/stats/reference/inputobjects/statsfilterinput"
    }
  ],
  "enumValues": [
    {
      "name": "BUYER",
      "description": "When the request has been send as a buyer",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "SELLER",
      "description": "When the request has been send as a seller",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "ModeType",
  "hideGithubLink": true
}
Mode to select which kind of stats do you want query
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
