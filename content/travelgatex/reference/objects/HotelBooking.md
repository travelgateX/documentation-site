{
  "title": "HotelBooking",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "StatsRequest",
      "name": "stats",
      "url": "/travelgatex/reference/objects/statsrequest",
      "description": "Application stats in string format",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "String!",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "AuditData",
      "name": "auditData",
      "url": "/travelgatex/reference/objects/auditdata",
      "description": "Data sent & received in the supplier's native format.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[HotelBookingDetail!]",
      "name": "bookings",
      "url": "/travelgatex/reference/objects/hotelbookingdetail",
      "description": "Details about booking",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "errors",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that will lead the service to abort",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Warning!]",
      "name": "warnings",
      "url": "/travelgatex/reference/objects/warning",
      "description": "Potentially  harmful situations or errors that won't force the service to abort",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelXQuery",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelxquery"
    },
    {
      "name": "Booking",
      "description": "Returns detailed information about books.",
      "url": "/travelgatex/reference/objects/booking"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelBooking"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
