{
  "title": "PaymentXStoredCardInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "instanceCode",
      "url": "/paymentx/reference/scalars/id",
      "description": "Asigned instance of PaymentX of the booked property.",
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "pointOfSaleCode",
      "url": "/paymentx/reference/scalars/id",
      "description": "Indicates the code of the booked property",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "bookingReference",
      "url": "/paymentx/reference/scalars/string",
      "description": "Indicates the referece of the booking",
      "args": null
    },
    {
      "typeString": "Date",
      "name": "checkOut",
      "url": "/paymentx/reference/scalars/date",
      "description": "Check-out, booking date Format: YYYY-MM-DD",
      "args": null
    },
    {
      "typeString": "Date",
      "name": "checkIn",
      "url": "/paymentx/reference/scalars/date",
      "description": "Check-in, booking date Format: YYYY-MM-DD",
      "args": null
    },
    {
      "typeString": "String",
      "name": "cardType",
      "url": "/paymentx/reference/scalars/string",
      "description": "Indicates the card type.",
      "args": null
    },
    {
      "typeString": "HolderInput",
      "name": "holder",
      "url": "/paymentx/reference/inputobjects/holderinput",
      "description": "Contains owner's name",
      "args": null
    },
    {
      "typeString": "CardNumber!",
      "name": "number",
      "url": "/paymentx/reference/scalars/cardnumber",
      "description": "Contains credit card number",
      "args": null
    },
    {
      "typeString": "CVC!",
      "name": "CVC",
      "url": "/paymentx/reference/scalars/cvc",
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
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXStoredCardInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
