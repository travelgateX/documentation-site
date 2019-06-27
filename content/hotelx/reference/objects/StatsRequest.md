{
  "title": "StatsRequest",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Stat!",
      "name": "total",
      "url": "/hotelx/reference/objects/stat",
      "description": "Total transaction time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "validation",
      "url": "/hotelx/reference/objects/stat",
      "description": "Request validation time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "process",
      "url": "/hotelx/reference/objects/stat",
      "description": "Process time. Contains communication time, parse time and plugin time.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "configuration",
      "url": "/hotelx/reference/objects/stat",
      "description": "Build access time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "request",
      "url": "/hotelx/reference/objects/stat",
      "description": "Request time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "response",
      "url": "/hotelx/reference/objects/stat",
      "description": "Response time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatPlugin",
      "name": "requestPlugin",
      "url": "/hotelx/reference/objects/statplugin",
      "description": "Plugin execution time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatPlugin",
      "name": "responsePlugin",
      "url": "/hotelx/reference/objects/statplugin",
      "description": "Plugin execution time",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "hotels",
      "url": "/hotelx/reference/scalars/int",
      "description": "Number of hotels",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "zones",
      "url": "/hotelx/reference/scalars/int",
      "description": "Number of zones",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "cities",
      "url": "/hotelx/reference/scalars/int",
      "description": "Number of cities",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "dockerID",
      "url": "/hotelx/reference/scalars/string",
      "description": "Docker Id",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[StatAccess!]!",
      "name": "Accesses",
      "url": "/hotelx/reference/objects/stataccess",
      "description": "Detail access time",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelSearch",
      "description": "Results from Avail Hotel; contains all the available options for a given date and itinerary",
      "url": "/hotelx/reference/objects/hotelsearch"
    },
    {
      "name": "HotelQuote",
      "description": "",
      "url": "/hotelx/reference/objects/hotelquote"
    },
    {
      "name": "HotelBooking",
      "description": "",
      "url": "/hotelx/reference/objects/hotelbooking"
    },
    {
      "name": "Response",
      "description": "",
      "url": "/hotelx/reference/interfaces/response"
    },
    {
      "name": "HotelBookPayload",
      "description": "",
      "url": "/hotelx/reference/objects/hotelbookpayload"
    },
    {
      "name": "HotelCancelPayload",
      "description": "",
      "url": "/hotelx/reference/objects/hotelcancelpayload"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "StatsRequest",
  "hideGithubLink": true
}
Contains internal information.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
