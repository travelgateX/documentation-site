{
  "title": "ExpireDateInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Int!",
      "name": "month",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Month MM",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "year",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Year yy",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentCardInput",
      "description": "Input PaymentCard, if the payment is done by credit card, is it mandatory to specify the payment type and the credit card information",
      "url": "/travelgatex/reference/inputobjects/paymentcardinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ExpireDateInput"
}
The card expiration date
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
