{
  "title": "PaymentXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AdviseMessage!",
      "name": "vaultStatusService",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": "Returns status of the vault service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentXStoredCardConnection!",
      "name": "allStoredCards",
      "url": "/travelgatex/reference/objects/paymentxstoredcardconnection",
      "description": "Returns the stored card list. For security, this query never will return clear card information. ",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoredCardFilterInput!",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/paymentxstoredcardfilterinput",
          "description": ""
        },
        {
          "typeString": "String!",
          "name": "instanceCode",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "PaymentXStoredCard!",
      "name": "storedCard",
      "url": "/travelgatex/reference/objects/paymentxstoredcard",
      "description": "Returns a stored card information. ",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoredCardIDInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/paymentxstoredcardidinput",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Query",
      "description": "The query root of TravelgateX's GraphQL interface.",
      "url": "/travelgatex/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXQuery",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
