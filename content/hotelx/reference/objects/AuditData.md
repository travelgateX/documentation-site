{
  "title": "AuditData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[Transactions!]!",
      "name": "transactions",
      "url": "/hotelx/reference/objects/transactions",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "timeStamp",
      "url": "/hotelx/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "processTime",
      "url": "/hotelx/reference/scalars/float",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelSearch",
      "description": null,
      "url": "/hotelx/reference/objects/hotelsearch"
    },
    {
      "name": "HotelQuote",
      "description": null,
      "url": "/hotelx/reference/objects/hotelquote"
    },
    {
      "name": "HotelBooking",
      "description": null,
      "url": "/hotelx/reference/objects/hotelbooking"
    },
    {
      "name": "Response",
      "description": null,
      "url": "/hotelx/reference/interfaces/response"
    },
    {
      "name": "HotelBookPayload",
      "description": null,
      "url": "/hotelx/reference/objects/hotelbookpayload"
    },
    {
      "name": "HotelCancelPayload",
      "description": null,
      "url": "/hotelx/reference/objects/hotelcancelpayload"
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
