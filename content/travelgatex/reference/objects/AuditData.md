{
  "title": "AuditData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[Transactions!]!",
      "name": "transactions",
      "url": "/travelgatex/reference/objects/transactions",
      "description": "List of transactions data",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "timeStamp",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "TimeStamp",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Float!",
      "name": "processTime",
      "url": "/travelgatex/reference/scalars/float",
      "description": "Process time in milliseconds (ms)",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelSearch",
      "description": "Results from Avail Hotel; contains all the available options for a given date and itinerary",
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
  "typename": "AuditData"
}
Data sent and received in the supplier’s native format.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
