{
  "title": "CancelPenalty",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "hoursBefore",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Cancellation fees applicable x number of hours before the check in date.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CancelPenaltyType!",
      "name": "penaltyType",
      "url": "/travelgatex/reference/enums/cancelpenaltytype",
      "description": "Type of penalty. This can be Nights, Percent or Import.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Currency!",
      "name": "currency",
      "url": "/travelgatex/reference/scalars/currency",
      "description": "Currency used in the cancel policy.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "value",
      "url": "/travelgatex/reference/scalars/float",
      "description": "Value of the cancel policy.",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "CancelPenalty"
}
Contains information about a cancel penalty.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
