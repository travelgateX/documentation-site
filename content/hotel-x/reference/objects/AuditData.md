{
  "title": "AuditData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[Transactions!]!",
      "name": "transactions",
      "url": "/hotel-x/reference/objects/transactions",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "timeStamp",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "processTime",
      "url": "/hotel-x/reference/scalars/float",
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
  "typename": "AuditData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
