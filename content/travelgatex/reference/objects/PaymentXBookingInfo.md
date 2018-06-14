{
  "title": "PaymentXBookingInfo",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "organization",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Responsible organization of the booked property.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PointOfSale!",
      "name": "pointOfSale",
      "url": "/travelgatex/reference/objects/pointofsale",
      "description": "",
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
      "typeString": "Date!",
      "name": "checkOut",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-out, booking date Format: YYYY-MM-DD",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Date!",
      "name": "checkIn",
      "url": "/travelgatex/reference/scalars/date",
      "description": "Check-in, booking date Format: YYYY-MM-DD",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "StoredCardData",
      "description": "",
      "url": "/travelgatex/reference/objects/storedcarddata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "PaymentXBookingInfo"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
