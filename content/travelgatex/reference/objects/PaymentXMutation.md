{
  "title": "PaymentXMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "PaymentXStoredCard!",
      "name": "storeCard",
      "url": "/travelgatex/reference/objects/paymentxstoredcard",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoredCardInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/paymentxstoredcardinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "PaymentXStoredCard!",
      "name": "deleteStoredCard",
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
      "name": "Mutation",
      "description": null,
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXMutation",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
