{
  "title": "HotelXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ServiceStatus!",
      "name": "hotelConfigurationStatusService",
      "url": "/hotelx/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelXDefaultSettings",
      "name": "defaultSettings",
      "url": "/hotelx/reference/objects/hotelxdefaultsettings",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "group",
          "url": "/hotelx/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "ID",
          "name": "clientName",
          "url": "/hotelx/reference/scalars/id",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "commonSettings",
      "url": "/hotelx/reference/objects/hotelxcommonsettings",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "group",
          "url": "/hotelx/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "ID",
          "name": "access",
          "url": "/hotelx/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "ID",
          "name": "supplier",
          "url": "/hotelx/reference/scalars/id",
          "description": null
        }
      ]
    },
    {
      "typeString": "BoardConnection!",
      "name": "boards",
      "url": "/hotelx/reference/objects/boardconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXBoardQueryInput!",
          "name": "criteria",
          "url": "/hotelx/reference/inputobjects/hotelxboardqueryinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotelx/reference/inputobjects/relayinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "CategoryConnection!",
      "name": "categories",
      "url": "/hotelx/reference/objects/categoryconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXCategoryQueryInput!",
          "name": "criteria",
          "url": "/hotelx/reference/inputobjects/hotelxcategoryqueryinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotelx/reference/inputobjects/relayinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelConnection!",
      "name": "hotels",
      "url": "/hotelx/reference/objects/hotelconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXHotelListInput!",
          "name": "criteria",
          "url": "/hotelx/reference/inputobjects/hotelxhotellistinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotelx/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/hotelx/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "HotelXHotelFilterInput",
          "name": "filter",
          "url": "/hotelx/reference/inputobjects/hotelxhotelfilterinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "RoomConnection!",
      "name": "rooms",
      "url": "/hotelx/reference/objects/roomconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXRoomQueryInput!",
          "name": "criteria",
          "url": "/hotelx/reference/inputobjects/hotelxroomqueryinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotelx/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/hotelx/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "DestinationConnection!",
      "name": "destinations",
      "url": "/hotelx/reference/objects/destinationconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXDestinationListInput!",
          "name": "criteria",
          "url": "/hotelx/reference/inputobjects/hotelxdestinationlistinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotelx/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/hotelx/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "[DestinationSearchResult]!",
      "name": "destinationSearcher",
      "url": "/hotelx/reference/Union/DestinationSearchResult",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXDestinationSearcherInput!",
          "name": "criteria",
          "url": "/hotelx/reference/inputobjects/hotelxdestinationsearcherinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelSearch",
      "name": "search",
      "url": "/hotelx/reference/objects/hotelsearch",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String",
          "name": "token",
          "url": "/hotelx/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "HotelCriteriaSearchInput",
          "name": "criteria",
          "url": "/hotelx/reference/inputobjects/hotelcriteriasearchinput",
          "description": null
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/hotelx/reference/inputobjects/hotelsettingsinput",
          "description": null
        },
        {
          "typeString": "FilterInput",
          "name": "filter",
          "url": "/hotelx/reference/inputobjects/filterinput",
          "description": null
        },
        {
          "typeString": "HotelXFilterSearchInput",
          "name": "filterSearch",
          "url": "/hotelx/reference/inputobjects/hotelxfiltersearchinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelQuote",
      "name": "quote",
      "url": "/hotelx/reference/objects/hotelquote",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCriteriaQuoteInput!",
          "name": "criteria",
          "url": "/hotelx/reference/inputobjects/hotelcriteriaquoteinput",
          "description": null
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/hotelx/reference/inputobjects/hotelsettingsinput",
          "description": null
        },
        {
          "typeString": "HotelXFilterInput",
          "name": "filter",
          "url": "/hotelx/reference/inputobjects/hotelxfilterinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelBooking",
      "name": "booking",
      "url": "/hotelx/reference/objects/hotelbooking",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCriteriaBookingInput!",
          "name": "criteria",
          "url": "/hotelx/reference/inputobjects/hotelcriteriabookinginput",
          "description": null
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/hotelx/reference/inputobjects/hotelsettingsinput",
          "description": null
        },
        {
          "typeString": "HotelXFilterInput",
          "name": "filter",
          "url": "/hotelx/reference/inputobjects/hotelxfilterinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "ServiceStatus!",
      "name": "searchStatusService",
      "url": "/hotelx/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "quoteStatusService",
      "url": "/hotelx/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookStatusService",
      "url": "/hotelx/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "cancelStatusService",
      "url": "/hotelx/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookingStatusService",
      "url": "/hotelx/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Mapping!",
      "name": "mapping",
      "url": "/hotelx/reference/objects/mapping",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/hotelx/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelRuntimeConfiguration",
      "name": "runtimeConfiguration",
      "url": "/hotelx/reference/objects/hotelruntimeconfiguration",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "supplierCode",
          "url": "/hotelx/reference/scalars/id",
          "description": null
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
