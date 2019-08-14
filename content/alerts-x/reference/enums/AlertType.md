{
  "title": "AlertType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "AlertConfiguration",
      "description": null,
      "url": "/alerts-x/reference/objects/alertconfiguration"
    }
  ],
  "enumValues": [
    {
      "name": "ERROR_RATE",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "AVERAGE_TIME",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "NO_TRAFFIC",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "PEAK_TRAFFIC",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "AlertType",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
