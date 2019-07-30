{
  "title": "PaymentXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AdviseMessage!",
      "name": "vaultStatusService",
      "url": "/paymentx/reference/objects/advisemessage",
      "description": "Returns status of the vault service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentXStoredCardConnection!",
      "name": "allStoredCards",
      "url": "/paymentx/reference/objects/paymentxstoredcardconnection",
      "description": "Returns the stored card list. For security, this query never will return clear card information. ",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoredCardFilterInput!",
          "name": "filter",
          "url": "/paymentx/reference/inputobjects/paymentxstoredcardfilterinput",
          "description": ""
        },
        {
          "typeString": "String!",
          "name": "instanceCode",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "PaymentXStoredCard!",
      "name": "storedCard",
      "url": "/paymentx/reference/objects/paymentxstoredcard",
      "description": "Returns a stored card information. ",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoredCardIDInput!",
          "name": "criteria",
          "url": "/paymentx/reference/inputobjects/paymentxstoredcardidinput",
          "description": ""
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
