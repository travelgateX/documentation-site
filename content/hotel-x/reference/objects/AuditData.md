{
  "title": "AuditData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[Transactions!]!",
      "name": "transactions",
      "url": "/hotel-x/reference/objects/transactions",
      "description": "List of transactions data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "timeStamp",
      "url": "/hotel-x/reference/scalars/datetime",
      "description": "TimeStamp",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "processTime",
      "url": "/hotel-x/reference/scalars/float",
      "description": "Process time in milliseconds (ms)",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelSearch",
      "description": "Results from Avail Hotel; contains all the available options for a given date and itinerary",
      "url": "/hotel-x/reference/objects/hotelsearch"
    },
    {
      "name": "HotelQuote",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelquote"
    },
    {
      "name": "HotelBooking",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelbooking"
    },
    {
      "name": "Response",
      "description": "",
      "url": "/hotel-x/reference/interfaces/response"
    },
    {
      "name": "HotelBookPayload",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelbookpayload"
    },
    {
      "name": "HotelCancelPayload",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelcancelpayload"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AuditData",
  "hideGithubLink": true
}
Data sent and received in the supplier’s native format.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
