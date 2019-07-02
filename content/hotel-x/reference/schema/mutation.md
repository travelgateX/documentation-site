{
  "title": "HotelXMutation",
  "description": "",
  "weight": 2,
  "fields": [
    {
      "typeString": "HotelXDefaultSettings",
      "name": "createDefaultSettings",
      "url": "/hotel-x/reference/objects/hotelxdefaultsettings",
      "description": "Saves defaults settings to HotelX",
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
        },
        {
          "typeString": "HotelXDefaultSettingsDataInput!",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelxdefaultsettingsdatainput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelXDefaultSettings",
      "name": "updateDefaultSettings",
      "url": "/hotel-x/reference/objects/hotelxdefaultsettings",
      "description": "Updates defaults settings to HotelX",
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
        },
        {
          "typeString": "HotelXDefaultSettingsDataInput!",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelxdefaultsettingsdatainput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelXUpdateStatus",
      "name": "updateStatus",
      "url": "/hotel-x/reference/objects/hotelxupdatestatus",
      "description": "Updates status of an entity of HotelX",
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
        },
        {
          "typeString": "ID",
          "name": "clientName",
          "url": "/hotel-x/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Boolean!",
          "name": "isActive",
          "url": "/hotel-x/reference/scalars/boolean",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "createCommonSettings",
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
        },
        {
          "typeString": "HotelXCommonSettingsDataInput!",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelxcommonsettingsdatainput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "updateCommonSettings",
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
        },
        {
          "typeString": "HotelXCommonSettingsDataInput!",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelxcommonsettingsdatainput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelBookPayload",
      "name": "book",
      "url": "/hotel-x/reference/objects/hotelbookpayload",
      "description": "Creates a new hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelBookInput!",
          "name": "input",
          "url": "/hotel-x/reference/inputobjects/hotelbookinput",
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
      "typeString": "HotelCancelPayload",
      "name": "cancel",
      "url": "/hotel-x/reference/objects/hotelcancelpayload",
      "description": "Cancels an existing hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCancelInput!",
          "name": "input",
          "url": "/hotel-x/reference/inputobjects/hotelcancelinput",
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
      "typeString": "String!",
      "name": "loadFile",
      "url": "/hotel-x/reference/scalars/string",
      "description": "",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "input",
          "url": "/hotel-x/reference/scalars/string",
          "description": ""
        }
      ],
      "deprecationReason": "",
      "descriptionSplitted": {
        "date": "2018-06-06",
        "first": "deprecated from",
        "second": ""
      },
      "deprecationDate": "2018-06-06",
      "typeName": "HotelXMutation"
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXMutation",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
