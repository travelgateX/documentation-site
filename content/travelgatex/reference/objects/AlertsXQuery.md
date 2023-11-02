{
  "title": "AlertsXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AlertConnection!",
      "name": "alerts",
      "url": "/travelgatex/reference/objects/alertconnection",
      "description": "Query to obtain Alerts",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "RelayInput",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "AlertFilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/alertfilterinput",
          "description": null
        },
        {
          "typeString": "AlertCriteriaInput",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/alertcriteriainput",
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
  "typename": "AlertsXQuery",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
