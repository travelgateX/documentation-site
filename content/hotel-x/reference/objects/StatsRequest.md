{
  "title": "StatsRequest",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Stat!",
      "name": "total",
      "url": "/hotel-x/reference/objects/stat",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "validation",
      "url": "/hotel-x/reference/objects/stat",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "process",
      "url": "/hotel-x/reference/objects/stat",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "configuration",
      "url": "/hotel-x/reference/objects/stat",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "request",
      "url": "/hotel-x/reference/objects/stat",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Stat!",
      "name": "response",
      "url": "/hotel-x/reference/objects/stat",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatPlugin",
      "name": "requestPlugin",
      "url": "/hotel-x/reference/objects/statplugin",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatPlugin",
      "name": "responsePlugin",
      "url": "/hotel-x/reference/objects/statplugin",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "hotels",
      "url": "/hotel-x/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "zones",
      "url": "/hotel-x/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "cities",
      "url": "/hotel-x/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "dockerID",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[StatAccess!]!",
      "name": "Accesses",
      "url": "/hotel-x/reference/objects/stataccess",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelSearch",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelsearch"
    },
    {
      "name": "HotelQuote",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelquote"
    },
    {
      "name": "HotelBooking",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelbooking"
    },
    {
      "name": "Response",
      "description": null,
      "url": "/hotel-x/reference/interfaces/response"
    },
    {
      "name": "HotelBookPayload",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelbookpayload"
    },
    {
      "name": "HotelCancelPayload",
      "description": null,
      "url": "/hotel-x/reference/objects/hotelcancelpayload"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "StatsRequest",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
