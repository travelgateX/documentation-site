{
  "title": "HotelXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "HotelSearch",
      "name": "search",
      "url": "/travelgatex/reference/objects/hotelsearch",
      "description": "Available options of an hotel for a given date and itinerary. It does not filter different classes, times or\nfares. It will always retrieve all results returned by the suppliers. The availability request is very straight\nforward. It only requires the criteria of search (destination, travel dates and the number of pax in each room).\nBut you must preload the other fields in our system by complete the fields absents.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "HotelCriteriaSearchInput",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriasearchinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "FilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/filterinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "HotelQuote",
      "name": "quote",
      "url": "/travelgatex/reference/objects/hotelquote",
      "description": "Returns the total price and cancellation policies of the Option selected in the previous step (Search).",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "HotelCriteriaQuoteInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriaquoteinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "HotelBooking",
      "name": "booking",
      "url": "/travelgatex/reference/objects/hotelbooking",
      "description": "Returns detailed information about books, you can indicated a list of locators or a range date.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "HotelCriteriaBookingInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriabookinginput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "ServiceStatus!",
      "name": "searchStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the search service.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "quoteStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the quote service.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the new booking service.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "cancelStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the cancellation service.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookingStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "TODO: me no understand...\nReturns status of the booking service.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "HotelConnection!",
      "name": "hotels",
      "url": "/travelgatex/reference/objects/hotelconnection",
      "description": "Query to obtain Hotels",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "language",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Query",
      "description": "",
      "url": "/travelgatex/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXQuery"
}
A Query is an entry point into the object graph.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
