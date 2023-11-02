{
  "title": "HubStatus",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "HubStatusInput",
      "description": null,
      "url": "/alerts-x/reference/inputobjects/hubstatusinput"
    }
  ],
  "enumValues": [
    {
      "name": "OK",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "EXCEPTION",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "TIMEOUT",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "UNDEFINED",
      "description": null,
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "HubStatus",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
