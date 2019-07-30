{
  "title": "CancelPenaltyType",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "CancelPenalty",
      "description": "Contains information for cancellation penalities..",
      "url": "/hotel-x/reference/objects/cancelpenalty"
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
  "typename": "CancelPenaltyType",
  "hideGithubLink": true
}
Options type
## GraphQL schema definition

{{% graphql-schema-enum %}}

## Required by

{{% graphql-require-by %}}
