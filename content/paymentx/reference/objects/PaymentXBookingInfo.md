{
  "title": "PaymentXBookingInfo",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "organization",
      "url": "/paymentx/reference/scalars/string",
      "description": "Responsible organization of the booked property.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PointOfSale!",
      "name": "pointOfSale",
      "url": "/paymentx/reference/objects/pointofsale",
      "description": "",
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
      "typeString": "Date!",
      "name": "checkOut",
      "url": "/paymentx/reference/scalars/date",
      "description": "Check-out, booking date Format: YYYY-MM-DD",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "checkIn",
      "url": "/paymentx/reference/scalars/date",
      "description": "Check-in, booking date Format: YYYY-MM-DD",
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
  "typename": "PaymentXBookingInfo",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
