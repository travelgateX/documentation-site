{
  "title": "HolderInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "name",
      "url": "/hotelx/reference/scalars/string",
      "description": "The card holder's name",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "surname",
      "url": "/hotelx/reference/scalars/string",
      "description": "The card holder's surname",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelBookInput",
      "description": "Criteria of book.",
      "url": "/hotelx/reference/inputobjects/hotelbookinput"
    },
    {
      "name": "PaymentCardInput",
      "description": "Input PaymentCard, if the payment is done by credit card, is it mandatory to specify the payment type and the credit card information",
      "url": "/hotelx/reference/inputobjects/paymentcardinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HolderInput",
  "hideGithubLink": true
}
Holder object that contains the occupant's (pax's) name and surname.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
