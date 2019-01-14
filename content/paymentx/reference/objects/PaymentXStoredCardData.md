{
  "title": "PaymentXStoredCardData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Group!",
      "name": "instance",
      "url": "/paymentx/reference/objects/group",
      "description": "Asigned instance of PaymentX of the booked property.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PointOfSale!",
      "name": "pointOfSale",
      "url": "/paymentx/reference/objects/pointofsale",
      "description": "Physical point of sale where the card was registered.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "bookingReference",
      "url": "/paymentx/reference/scalars/string",
      "description": "Indicates the referece of the booking",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "checkOut",
      "url": "/paymentx/reference/scalars/date",
      "description": "Check-out, booking date Format: YYYY-MM-DD",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "checkIn",
      "url": "/paymentx/reference/scalars/date",
      "description": "Check-in, booking date Format: YYYY-MM-DD",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "cardType",
      "url": "/paymentx/reference/scalars/string",
      "description": "Indicates the card type.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Holder",
      "name": "holder",
      "url": "/paymentx/reference/objects/holder",
      "description": "Contains owner's name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CardNumber",
      "name": "number",
      "url": "/paymentx/reference/scalars/cardnumber",
      "description": "Card Number (16 digits typically)",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CVC",
      "name": "CVC",
      "url": "/paymentx/reference/scalars/cvc",
      "description": "Contains credit card CVC",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentXExpireDate",
      "name": "expire",
      "url": "/paymentx/reference/objects/paymentxexpiredate",
      "description": "Contains credit card expiration date",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentXStoredCard",
      "description": "",
      "url": "/paymentx/reference/objects/paymentxstoredcard"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXStoredCardData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
