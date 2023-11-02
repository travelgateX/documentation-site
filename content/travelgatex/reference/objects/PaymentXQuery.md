{
  "title": "PaymentXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AdviseMessage!",
      "name": "vaultStatusService",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentXStoredCardConnection!",
      "name": "allStoredCards",
      "url": "/travelgatex/reference/objects/paymentxstoredcardconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoredCardFilterInput!",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/paymentxstoredcardfilterinput",
          "description": null
        },
        {
          "typeString": "String!",
          "name": "instanceCode",
          "url": "/travelgatex/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "PaymentXStoredCard!",
      "name": "storedCard",
      "url": "/travelgatex/reference/objects/paymentxstoredcard",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoredCardIDInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/paymentxstoredcardidinput",
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
  "typename": "PaymentXQuery",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
