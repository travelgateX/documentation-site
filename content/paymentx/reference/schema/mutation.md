{
  "title": "PaymentXMutation",
  "description": "",
  "weight": 2,
  "fields": [
    {
      "typeString": "PaymentXStoredCard!",
      "name": "storeCard",
      "url": "/paymentx/reference/objects/paymentxstoredcard",
      "description": "Store Card",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoredCardInput!",
          "name": "input",
          "url": "/paymentx/reference/inputobjects/paymentxstoredcardinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "PaymentXStoredCard!",
      "name": "deleteStoredCard",
      "url": "/paymentx/reference/objects/paymentxstoredcard",
      "description": "Delete Card",
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
  "typename": "PaymentXMutation",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
