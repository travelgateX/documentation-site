{
  "title": "PaymentXBookingInfoInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "organization",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Responsible organization of the booked property.",
      "args": null
    },
    {
      "typeString": "PointOfSaleInput!",
      "name": "pointOfSale",
      "url": "/travelgatex/reference/inputobjects/pointofsaleinput",
      "description": "Indicates the code of the booked property",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "bookingReference",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the referece of the booking",
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "checkOut",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-out, booking date Format: YYYY-MM-DD",
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "checkIn",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-in, booking date Format: YYYY-MM-DD",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "PaymentXStoreCardInput",
      "description": "",
      "url": "/travelgatex/reference/inputobjects/paymentxstorecardinput"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXBookingInfoInput"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
