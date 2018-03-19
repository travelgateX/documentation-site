{
  "title": "PaymentCardInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "cardType",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the card type.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "HolderInput!",
      "name": "holder",
      "url": "/travelgatex/reference/inputobjects/holderinput",
      "description": "Contains owner's name",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "number",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Contains credit card number",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "CVC",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Contains credit card CVC",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ExpireDateInput!",
      "name": "expire",
      "url": "/travelgatex/reference/inputobjects/expiredateinput",
      "description": "Contains credit card expiration date",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelBookInput",
      "description": "Criteria of book.",
      "url": "/travelgatex/reference/inputobjects/hotelbookinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentCardInput"
}
Input PaymentCard, if the payment is done by credit card, is it mandatory to specify the payment type and the credit card information
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
