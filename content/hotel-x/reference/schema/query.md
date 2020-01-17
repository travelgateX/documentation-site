{
  "title": "HotelXQuery",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ServiceStatus!",
      "name": "hotelConfigurationStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelXDefaultSettings",
      "name": "defaultSettings",
      "url": "/hotel-x/reference/objects/hotelxdefaultsettings",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "group",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "ID",
          "name": "clientName",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "commonSettings",
      "url": "/hotel-x/reference/objects/hotelxcommonsettings",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "group",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "ID",
          "name": "access",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "ID",
          "name": "supplier",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        }
      ]
    },
    {
      "typeString": "BoardConnection!",
      "name": "boards",
      "url": "/hotel-x/reference/objects/boardconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXBoardQueryInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelxboardqueryinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotel-x/reference/inputobjects/relayinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "CategoryConnection!",
      "name": "categories",
      "url": "/hotel-x/reference/objects/categoryconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXCategoryQueryInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelxcategoryqueryinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotel-x/reference/inputobjects/relayinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelConnection!",
      "name": "hotels",
      "url": "/hotel-x/reference/objects/hotelconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXHotelListInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelxhotellistinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotel-x/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "HotelXHotelFilterInput",
          "name": "filter",
          "url": "/hotel-x/reference/inputobjects/hotelxhotelfilterinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "RoomConnection!",
      "name": "rooms",
      "url": "/hotel-x/reference/objects/roomconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXRoomQueryInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelxroomqueryinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotel-x/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "DestinationConnection!",
      "name": "destinations",
      "url": "/hotel-x/reference/objects/destinationconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXDestinationListInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelxdestinationlistinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotel-x/reference/inputobjects/relayinput",
          "description": null
        },
        {
          "typeString": "String",
          "name": "token",
          "url": "/hotel-x/reference/scalars/string",
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
          "url": "/hotel-x/reference/inputobjects/hotelxdestinationsearcherinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "MetadataConnection!",
      "name": "metadata",
      "url": "/hotel-x/reference/objects/metadataconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelXMetadataQueryInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelxmetadataqueryinput",
          "description": null
        },
        {
          "typeString": "RelayInput!",
          "name": "relay",
          "url": "/hotel-x/reference/inputobjects/relayinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelSearch",
      "name": "search",
      "url": "/hotel-x/reference/objects/hotelsearch",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCriteriaSearchInput",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelcriteriasearchinput",
          "description": null
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelsettingsinput",
          "description": null
        },
        {
          "typeString": "FilterInput",
          "name": "filter",
          "url": "/hotel-x/reference/inputobjects/filterinput",
          "description": null
        },
        {
          "typeString": "HotelXFilterSearchInput",
          "name": "filterSearch",
          "url": "/hotel-x/reference/inputobjects/hotelxfiltersearchinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelQuote",
      "name": "quote",
      "url": "/hotel-x/reference/objects/hotelquote",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCriteriaQuoteInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelcriteriaquoteinput",
          "description": null
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelsettingsinput",
          "description": null
        },
        {
          "typeString": "HotelXFilterInput",
          "name": "filter",
          "url": "/hotel-x/reference/inputobjects/hotelxfilterinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelBooking",
      "name": "booking",
      "url": "/hotel-x/reference/objects/hotelbooking",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCriteriaBookingInput!",
          "name": "criteria",
          "url": "/hotel-x/reference/inputobjects/hotelcriteriabookinginput",
          "description": null
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelsettingsinput",
          "description": null
        },
        {
          "typeString": "HotelXFilterInput",
          "name": "filter",
          "url": "/hotel-x/reference/inputobjects/hotelxfilterinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "ServiceStatus!",
      "name": "searchStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "quoteStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "cancelStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "bookingStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ServiceStatus!",
      "name": "commitStatusService",
      "url": "/hotel-x/reference/objects/servicestatus",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Mapping!",
      "name": "mapping",
      "url": "/hotel-x/reference/objects/mapping",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String!",
          "name": "groupCode",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelRuntimeConfiguration",
      "name": "runtimeConfiguration",
      "url": "/hotel-x/reference/objects/hotelruntimeconfiguration",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "ID!",
          "name": "supplierCode",
          "url": "/hotel-x/reference/scalars/id",
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
