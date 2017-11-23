{
  "title": "RequestStats",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Stat!",
      "name": "total",
      "url": "/travelgatex/reference/objects/stat",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "validation",
      "url": "/travelgatex/reference/objects/stat",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "process",
      "url": "/travelgatex/reference/objects/stat",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[StatAccess!]!",
      "name": "Accesses",
      "url": "/travelgatex/reference/objects/stataccess",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "External",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelSearch",
      "description": "Results of Avail Hotel. Contains all the available options for a given date and itinerary.",
      "url": "/travelgatex/reference/objects/hotelsearch"
    },
    {
      "name": "Response",
      "description": "",
      "url": "/travelgatex/reference/interfaces/response"
    },
    {
      "name": "HotelQuote",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelquote"
    },
    {
      "name": "HotelBooking",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelbooking"
    },
    {
      "name": "HotelBookPayload",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelbookpayload"
    },
    {
      "name": "HotelCancelPayload",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelcancelpayload"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RequestStats"
}
Contains internal information.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
