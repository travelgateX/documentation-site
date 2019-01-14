{
  "title": "HotelXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ServiceStatus!",
      "name": "hotelConfigurationStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the hotelX configuration service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelXDefaultSettings",
      "name": "defaultSettings",
      "url": "/travelgatex/reference/objects/hotelxdefaultsettings",
      "description": "Obtains the default settings of a group or of the client in the group.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "group",
          "url": "/travelgatex/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "ID",
          "name": "clientName",
          "url": "/travelgatex/reference/scalars/id",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "commonSettings",
      "url": "/travelgatex/reference/objects/hotelxcommonsettings",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "group",
          "url": "/travelgatex/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "ID",
          "name": "access",
          "url": "/travelgatex/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "ID",
          "name": "supplier",
          "url": "/travelgatex/reference/scalars/id",
          "description": ""
        }
      ]
    },
    {
      "typeString": "BoardConnection!",
      "name": "boards",
      "url": "/travelgatex/reference/objects/boardconnection",
      "description": "Query to obtain Boards",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXBoardQueryInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxboardqueryinput",
          "description": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "CategoryConnection!",
      "name": "categories",
      "url": "/travelgatex/reference/objects/categoryconnection",
      "description": "Query to obtain Categories",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXCategoryQueryInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxcategoryqueryinput",
          "description": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelConnection!",
      "name": "hotels",
      "url": "/travelgatex/reference/objects/hotelconnection",
      "description": "Query to obtain Hotels",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXHotelListInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxhotellistinput",
          "description": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "HotelXHotelFilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/hotelxhotelfilterinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "RoomConnection!",
      "name": "rooms",
      "url": "/travelgatex/reference/objects/roomconnection",
      "description": "Query to obtain rooms",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXRoomQueryInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxroomqueryinput",
          "description": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "DestinationConnection!",
      "name": "destinations",
      "url": "/travelgatex/reference/objects/destinationconnection",
      "description": "Query to obtain Destinations",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXDestinationListInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxdestinationlistinput",
          "description": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "[DestinationSearchResult]!",
      "name": "destinationSearcher",
      "url": "#",
      "description": "Returns hotels and destinations that contains the indicated text.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXDestinationSearcherInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxdestinationsearcherinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelSearch",
      "name": "search",
      "url": "/travelgatex/reference/objects/hotelsearch",
      "description": "Available options of an hotel for a given date and itinerary. It does not filter different classes, times or\nfares. It will always retrieve all results returned by the suppliers. The availability request is very straight\nforward. It only requires the criteria of search (destination, travel dates and the number of pax in each room).\nBut you must preload the other fields in our system by complete the fields absents.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "HotelCriteriaSearchInput",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriasearchinput",
          "description": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": ""
        },
        {
          "typeString": "FilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/filterinput",
          "description": ""
        },
        {
          "typeString": "HotelXFilterSearchInput",
          "name": "filterSearch",
          "url": "/travelgatex/reference/inputobjects/hotelxfiltersearchinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelQuote",
      "name": "quote",
      "url": "/travelgatex/reference/objects/hotelquote",
      "description": "Returns the total price and cancellation policies of the Option selected in the previous step (Search).",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCriteriaQuoteInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriaquoteinput",
          "description": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": ""
        },
        {
          "typeString": "HotelXFilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/hotelxfilterinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelBooking",
      "name": "booking",
      "url": "/travelgatex/reference/objects/hotelbooking",
      "description": "Returns detailed information about books, you can indicated a list of locators or a range date.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCriteriaBookingInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriabookinginput",
          "description": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": ""
        },
        {
          "typeString": "HotelXFilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/hotelxfilterinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "ServiceStatus!",
      "name": "searchStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the search service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "quoteStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the quote service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the new booking service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "cancelStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the cancellation service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookingStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": "Returns status of the booking service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Mapping!",
      "name": "mapping",
      "url": "/travelgatex/reference/objects/mapping",
      "description": "Returns map codes of a group. You can get hotel map, room map, and board map.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelRuntimeConfiguration",
      "name": "runtimeConfiguration",
      "url": "/travelgatex/reference/objects/hotelruntimeconfiguration",
      "description": "Returns a configuration teamplate of the supplier",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "supplierCode",
          "url": "/travelgatex/reference/scalars/id",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Query",
      "description": "The query root of TravelgateX's GraphQL interface.",
      "url": "/travelgatex/reference/schema/query"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXQuery",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
