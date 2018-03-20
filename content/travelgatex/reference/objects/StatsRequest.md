{
  "title": "StatsRequest",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Stat!",
      "name": "total",
      "url": "/travelgatex/reference/objects/stat",
      "description": "Total transaction time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "validation",
      "url": "/travelgatex/reference/objects/stat",
      "description": "Request validation time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "process",
      "url": "/travelgatex/reference/objects/stat",
      "description": "Process time. Contains communication time, parse time and plugin time.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "configuration",
      "url": "/travelgatex/reference/objects/stat",
      "description": "Build access time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "request",
      "url": "/travelgatex/reference/objects/stat",
      "description": "Request time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "response",
      "url": "/travelgatex/reference/objects/stat",
      "description": "Response time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatPlugin",
      "name": "requestPlugin",
      "url": "/travelgatex/reference/objects/statplugin",
      "description": "Plugin execution time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatPlugin",
      "name": "responsePlugin",
      "url": "/travelgatex/reference/objects/statplugin",
      "description": "Plugin execution time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "hotels",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Number of hotels",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "zones",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Number of zones",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "cities",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Number of cities",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "dockerID",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Docker Id",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[StatAccess!]!",
      "name": "Accesses",
      "url": "/travelgatex/reference/objects/stataccess",
      "description": "Detail access time",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
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
  "typename": "StatsRequest"
}
Contains internal information.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
