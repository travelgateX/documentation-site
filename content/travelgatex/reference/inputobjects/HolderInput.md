{
  "title": "HolderInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "The card holder's name",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "surname",
      "url": "/travelgatex/reference/scalars/string",
      "description": "The card holder's surname",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookInput",
      "description": "Criteria of book.",
      "url": "/travelgatex/reference/inputobjects/hotelbookinput"
    },
    {
      "name": "PaymentCardInput",
      "description": "Input PaymentCard, if the payment is done by credit card, is it mandatory to specify the payment type and the credit card information",
      "url": "/travelgatex/reference/inputobjects/paymentcardinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HolderInput"
}
Holder object that contains the pax name and surname.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
