{
  "title": "PaymentXBookingInfoInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "organization",
      "url": "/paymentx/reference/scalars/string",
      "description": "Responsible organization of the booked property.",
      "args": null
    },
    {
      "typeString": "PointOfSaleInput!",
      "name": "pointOfSale",
      "url": "/paymentx/reference/inputobjects/pointofsaleinput",
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
      "typeString": "Date!",
      "name": "checkOut",
      "url": "/paymentx/reference/scalars/date",
      "description": "Check-out, booking date Format: YYYY-MM-DD",
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "checkIn",
      "url": "/paymentx/reference/scalars/date",
      "description": "Check-in, booking date Format: YYYY-MM-DD",
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
  "typename": "PaymentXBookingInfoInput",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
