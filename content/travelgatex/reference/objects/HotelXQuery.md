{
  "title": "HotelXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ServiceStatus!",
      "name": "hotelConfigurationStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelXDefaultSettings",
      "name": "defaultSettings",
      "url": "/travelgatex/reference/objects/hotelxdefaultsettings",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "group",
          "url": "/travelgatex/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "ID",
          "name": "clientName",
          "url": "/travelgatex/reference/scalars/id",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "commonSettings",
      "url": "/travelgatex/reference/objects/hotelxcommonsettings",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "group",
          "url": "/travelgatex/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "ID",
          "name": "access",
          "url": "/travelgatex/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "ID",
          "name": "supplier",
          "url": "/travelgatex/reference/scalars/id",
          "description": null
        }
      ]
    },
    {
      "typeString": "BoardConnection!",
      "name": "boards",
      "url": "/travelgatex/reference/objects/boardconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXBoardQueryInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxboardqueryinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "CategoryConnection!",
      "name": "categories",
      "url": "/travelgatex/reference/objects/categoryconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXCategoryQueryInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxcategoryqueryinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelConnection!",
      "name": "hotels",
      "url": "/travelgatex/reference/objects/hotelconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXHotelListInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxhotellistinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "HotelXHotelFilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/hotelxhotelfilterinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "RoomConnection!",
      "name": "rooms",
      "url": "/travelgatex/reference/objects/roomconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXRoomQueryInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxroomqueryinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "DestinationConnection!",
      "name": "destinations",
      "url": "/travelgatex/reference/objects/destinationconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXDestinationListInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxdestinationlistinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/travelgatex/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "[DestinationSearchResult]!",
      "name": "destinationSearcher",
      "url": "#",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXDestinationSearcherInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelxdestinationsearcherinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelSearch",
      "name": "search",
      "url": "/travelgatex/reference/objects/hotelsearch",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "HotelCriteriaSearchInput",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriasearchinput",
          "description": null
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": null
        },
        {
          "typeString": "FilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/filterinput",
          "description": null
        },
        {
          "typeString": "HotelXFilterSearchInput",
          "name": "filterSearch",
          "url": "/travelgatex/reference/inputobjects/hotelxfiltersearchinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelQuote",
      "name": "quote",
      "url": "/travelgatex/reference/objects/hotelquote",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCriteriaQuoteInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriaquoteinput",
          "description": null
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": null
        },
        {
          "typeString": "HotelXFilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/hotelxfilterinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelBooking",
      "name": "booking",
      "url": "/travelgatex/reference/objects/hotelbooking",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCriteriaBookingInput!",
          "name": "criteria",
          "url": "/travelgatex/reference/inputobjects/hotelcriteriabookinginput",
          "description": null
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": null
        },
        {
          "typeString": "HotelXFilterInput",
          "name": "filter",
          "url": "/travelgatex/reference/inputobjects/hotelxfilterinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "ServiceStatus!",
      "name": "searchStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "quoteStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "cancelStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookingStatusService",
      "url": "/travelgatex/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Mapping!",
      "name": "mapping",
      "url": "/travelgatex/reference/objects/mapping",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/travelgatex/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelRuntimeConfiguration",
      "name": "runtimeConfiguration",
      "url": "/travelgatex/reference/objects/hotelruntimeconfiguration",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "supplierCode",
          "url": "/travelgatex/reference/scalars/id",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Query",
      "description": null,
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
