{
  "title": "PaymentCard",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "cardType",
      "url": "/paymentx/reference/scalars/string",
      "description": "Indicates the card type.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Holder!",
      "name": "holder",
      "url": "/paymentx/reference/objects/holder",
      "description": "Contains owner's name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CardNumber!",
      "name": "number",
      "url": "/paymentx/reference/scalars/cardnumber",
      "description": "Card Number (16 digits typically)",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CVC!",
      "name": "CVC",
      "url": "/paymentx/reference/scalars/cvc",
      "description": "Contains credit card CVC",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ExpireDate!",
      "name": "expire",
      "url": "/paymentx/reference/objects/expiredate",
      "description": "Contains credit card expiration date",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "StoredCardData",
      "description": "",
      "url": "/paymentx/reference/objects/storedcarddata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentCard",
  "hideGithubLink": true
}
Input PaymentCard, if the payment is done by credit card, is it mandatory to specify the payment type and the credit card information
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
