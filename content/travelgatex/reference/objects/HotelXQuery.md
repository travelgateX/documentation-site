{
  "title": "HotelXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "BoardConnection!",
      "name": "boards",
      "url": "/travelgatex/reference/objects/boardconnection",
      "description": "Query to obtain Boards",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "HotelXBoardQueryInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxboardqueryinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "CategoryConnection!",
      "name": "categories",
      "url": "/travelgatex/reference/objects/categoryconnection",
      "description": "Query to obtain Categories",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "HotelXCategoryQueryInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxcategoryqueryinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "RoomConnection!",
      "name": "rooms",
      "url": "/travelgatex/reference/objects/roomconnection",
      "description": "Query to obtain rooms",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "HotelXRoomQueryInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxroomqueryinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "HotelConnection!",
      "name": "hotels",
      "url": "/travelgatex/reference/objects/hotelconnection",
      "description": "Query to obtain Hotels",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "HotelXHotelListInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxhotellistinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "DestinationConnection!",
      "name": "destinations",
      "url": "/travelgatex/reference/objects/destinationconnection",
      "description": "Query to obtain Destinations",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "HotelXDestinationListInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxdestinationlistinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "[DestinationSearchResult]!",
      "name": "destinationSearcher",
      "url": "#",
      "description": "Returns hotels and destinations that contains the indicated text. ",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "HotelXDestinationSearcherInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxdestinationsearcherinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
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
      "typeString": "Mapping!",
      "name": "mapping",
      "url": "/travelgatex/reference/objects/mapping",
      "description": "",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
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
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
