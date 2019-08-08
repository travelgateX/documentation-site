{
  "title": "PaymentXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AdviseMessage!",
      "name": "vaultStatusService",
      "url": "/paymentx/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentXStoredCardConnection!",
      "name": "allStoredCards",
      "url": "/paymentx/reference/objects/paymentxstoredcardconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoredCardFilterInput!",
          "name": "filter",
          "url": "/paymentx/reference/inputobjects/paymentxstoredcardfilterinput",
          "description": null
        },
        {
          "typeString": "String!",
          "name": "instanceCode",
          "url": "/paymentx/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "PaymentXStoredCard!",
      "name": "storedCard",
      "url": "/paymentx/reference/objects/paymentxstoredcard",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoredCardIDInput!",
          "name": "criteria",
          "url": "/paymentx/reference/inputobjects/paymentxstoredcardidinput",
          "description": null
        }
      ]
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXQuery",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
