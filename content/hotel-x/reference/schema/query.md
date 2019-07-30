{
  "title": "HotelXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ServiceStatus!",
      "name": "hotelConfigurationStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": "Returns status of the hotelX configuration service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelXDefaultSettings",
      "name": "defaultSettings",
      "url": "/hotel-x/reference/objects/hotelxdefaultsettings",
      "description": "Obtains the default settings of a group or of the client in the group.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "group",
          "url": "/hotel-x/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "ID",
          "name": "clientName",
          "url": "/hotel-x/reference/scalars/id",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "commonSettings",
      "url": "/hotel-x/reference/objects/hotelxcommonsettings",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "group",
          "url": "/hotel-x/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "ID",
          "name": "access",
          "url": "/hotel-x/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "ID",
          "name": "supplier",
          "url": "/hotel-x/reference/scalars/id",
          "description": ""
        }
      ]
    },
    {
      "typeString": "BoardConnection!",
      "name": "boards",
      "url": "/hotel-x/reference/objects/boardconnection",
      "description": "Query to obtain Boards",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXBoardQueryInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelxboardqueryinput",
          "description": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotel-x/reference/inputobjects/relayinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "CategoryConnection!",
      "name": "categories",
      "url": "/hotel-x/reference/objects/categoryconnection",
      "description": "Query to obtain Categories",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXCategoryQueryInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelxcategoryqueryinput",
          "description": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotel-x/reference/inputobjects/relayinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelConnection!",
      "name": "hotels",
      "url": "/hotel-x/reference/objects/hotelconnection",
      "description": "Query to obtain Hotels",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXHotelListInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelxhotellistinput",
          "description": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotel-x/reference/inputobjects/relayinput",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/hotel-x/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "HotelXHotelFilterInput",
          "name": "filter",
          "url": "/hotel-x/reference/inputobjects/hotelxhotelfilterinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "RoomConnection!",
      "name": "rooms",
      "url": "/hotel-x/reference/objects/roomconnection",
      "description": "Query to obtain rooms",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXRoomQueryInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelxroomqueryinput",
          "description": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotel-x/reference/inputobjects/relayinput",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/hotel-x/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "DestinationConnection!",
      "name": "destinations",
      "url": "/hotel-x/reference/objects/destinationconnection",
      "description": "Query to obtain Destinations",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXDestinationListInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelxdestinationlistinput",
          "description": ""
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotel-x/reference/inputobjects/relayinput",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/hotel-x/reference/scalars/string",
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
          "url": "/hotel-x/reference/inputobjects/hotelxdestinationsearcherinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelSearch",
      "name": "search",
      "url": "/hotel-x/reference/objects/hotelsearch",
      "description": "Available options of an hotel for a given date and itinerary. It does not filter different classes, times or\nfares. It will always retrieve all results returned by the suppliers. The availability request is very straight\nforward. It only requires the criteria of search (destination, travel dates and the number of pax in each room).\nBut you must preload the other fields in our system by complete the fields absents.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String",
          "name": "token",
          "url": "/hotel-x/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "HotelCriteriaSearchInput",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelcriteriasearchinput",
          "description": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelsettingsinput",
          "description": ""
        },
        {
          "typeString": "FilterInput",
          "name": "filter",
          "url": "/hotel-x/reference/inputobjects/filterinput",
          "description": ""
        },
        {
          "typeString": "HotelXFilterSearchInput",
          "name": "filterSearch",
          "url": "/hotel-x/reference/inputobjects/hotelxfiltersearchinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelQuote",
      "name": "quote",
      "url": "/hotel-x/reference/objects/hotelquote",
      "description": "Returns the total price and cancellation policies of the Option selected in the previous step (Search).",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCriteriaQuoteInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelcriteriaquoteinput",
          "description": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelsettingsinput",
          "description": ""
        },
        {
          "typeString": "HotelXFilterInput",
          "name": "filter",
          "url": "/hotel-x/reference/inputobjects/hotelxfilterinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelBooking",
      "name": "booking",
      "url": "/hotel-x/reference/objects/hotelbooking",
      "description": "Returns detailed information about books, you can indicated a list of locators or a range date.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCriteriaBookingInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelcriteriabookinginput",
          "description": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelsettingsinput",
          "description": ""
        },
        {
          "typeString": "HotelXFilterInput",
          "name": "filter",
          "url": "/hotel-x/reference/inputobjects/hotelxfilterinput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "ServiceStatus!",
      "name": "searchStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": "Returns status of the search service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "quoteStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": "Returns status of the quote service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": "Returns status of the new booking service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "cancelStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": "Returns status of the cancellation service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookingStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": "Returns status of the booking service.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Mapping!",
      "name": "mapping",
      "url": "/hotel-x/reference/objects/mapping",
      "description": "Returns map codes of a group. You can get hotel map, room map, and board map.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/hotel-x/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelRuntimeConfiguration",
      "name": "runtimeConfiguration",
      "url": "/hotel-x/reference/objects/hotelruntimeconfiguration",
      "description": "Returns a configuration teamplate of the supplier",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "supplierCode",
          "url": "/hotel-x/reference/scalars/id",
          "description": ""
        }
      ]
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXQuery",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
