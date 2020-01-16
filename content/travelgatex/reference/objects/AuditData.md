{
  "title": "AuditData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[Transactions!]!",
      "name": "transactions",
      "url": "/travelgatex/reference/objects/transactions",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "timeStamp",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "processTime",
      "url": "/travelgatex/reference/scalars/float",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelSearch",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelsearch"
    },
    {
      "name": "HotelQuote",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelquote"
    },
    {
      "name": "HotelBooking",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelbooking"
    },
    {
      "name": "Response",
      "description": null,
      "url": "/travelgatex/reference/interfaces/response"
    },
    {
      "name": "HotelBookPayload",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelbookpayload"
    },
    {
      "name": "HotelCancelPayload",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelcancelpayload"
    },
    {
      "name": "HotelCommitPayload",
      "description": null,
      "url": "/travelgatex/reference/objects/hotelcommitpayload"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AuditData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
