{
  "title": "PaymentCardInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "cardType",
      "url": "/paymentx/reference/scalars/string",
      "description": "Indicates the card type.",
      "args": null
    },
    {
      "typeString": "HolderInput!",
      "name": "holder",
      "url": "/paymentx/reference/inputobjects/holderinput",
      "description": "Contains owner's name",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "number",
      "url": "/paymentx/reference/scalars/string",
      "description": "Contains credit card number",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "CVC",
      "url": "/paymentx/reference/scalars/string",
      "description": "Contains credit card CVC",
      "args": null
    },
    {
      "typeString": "ExpireDateInput!",
      "name": "expire",
      "url": "/paymentx/reference/inputobjects/expiredateinput",
      "description": "Contains credit card expiration date",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentXStoreCardInput",
      "description": "",
      "url": "/paymentx/reference/inputobjects/paymentxstorecardinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentCardInput",
  "hideGithubLink": true
}
Input PaymentCard, if the payment is done by credit card, is it mandatory to specify the payment type and the credit card information
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
