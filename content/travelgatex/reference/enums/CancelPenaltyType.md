{
  "title": "CancelPenaltyType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "CancelPenalty",
      "description": "Contains information about a cancel penalty.",
      "url": "/travelgatex/reference/objects/cancelpenalty"
    }
  ],
  "enumValues": [
    {
      "name": "NIGHTS",
      "description": "Indicates the number of nights to be penalized.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "PERCENT",
      "description": "Indicates the percentage to pay based on the option price.",
      "isDeprecated": false,
      "deprecationReason": null
    },
    {
      "name": "IMPORT",
      "description": "Indicates the exact amount payable.",
      "isDeprecated": false,
      "deprecationReason": null
    }
  ],
  "operator": "enum",
  "typename": "CancelPenaltyType"
}
Options type
## GraphQL Schema definition

{{% graphql-schema-enum %}}

## Require by

{{% graphql-require-by %}}
