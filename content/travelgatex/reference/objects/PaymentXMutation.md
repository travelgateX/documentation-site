{
  "title": "PaymentXMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "PaymentXStoredCard!",
      "name": "storeCard",
      "url": "/travelgatex/reference/objects/paymentxstoredcard",
      "description": "Store Card",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "PaymentXStoredCardInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/paymentxstoredcardinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "PaymentXStoredCard!",
      "name": "deleteStoredCard",
      "url": "/travelgatex/reference/objects/paymentxstoredcard",
      "description": "Delete Card",
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
      "name": "Mutation",
      "description": "The root query for implementing GraphQL mutations. Mutations are operations that change or update data on the server",
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
