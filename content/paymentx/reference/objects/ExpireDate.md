{
  "title": "ExpireDate",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "month",
      "url": "/paymentx/reference/scalars/int",
      "description": "Month MM",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "year",
      "url": "/paymentx/reference/scalars/int",
      "description": "Year yy",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentCard",
      "description": "Input PaymentCard, if the payment is done by credit card, is it mandatory to specify the payment type and the credit card information",
      "url": "/paymentx/reference/objects/paymentcard"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ExpireDate",
  "hideGithubLink": true
}
The card expiration date
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
