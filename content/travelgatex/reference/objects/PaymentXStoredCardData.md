{
  "title": "PaymentXStoredCardData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Group!",
      "name": "instance",
      "url": "/travelgatex/reference/objects/group",
      "description": "Asigned instance of PaymentX of the booked property.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PointOfSale!",
      "name": "pointOfSale",
      "url": "/travelgatex/reference/objects/pointofsale",
      "description": "Physical point of sale where the card was registered.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "bookingReference",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the referece of the booking",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "checkOut",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-out, booking date Format: YYYY-MM-DD",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date",
      "name": "checkIn",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-in, booking date Format: YYYY-MM-DD",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "cardType",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the card type.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Holder",
      "name": "holder",
      "url": "/travelgatex/reference/objects/holder",
      "description": "Contains owner's name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CardNumber",
      "name": "number",
      "url": "/travelgatex/reference/scalars/cardnumber",
      "description": "Card Number (16 digits typically)",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CVC",
      "name": "CVC",
      "url": "/travelgatex/reference/scalars/cvc",
      "description": "Contains credit card CVC",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PaymentXExpireDate",
      "name": "expire",
      "url": "/travelgatex/reference/objects/paymentxexpiredate",
      "description": "Contains credit card expiration date",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "PaymentXStoredCard",
      "description": "",
      "url": "/travelgatex/reference/objects/paymentxstoredcard"
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
