{
  "title": "HotelXMutation",
  "description": "",
  "weight": 2,
  "fields": [
    {
      "typeString": "HotelXDefaultSettings",
      "name": "createDefaultSettings",
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
        },
        {
          "typeString": "HotelXDefaultSettingsDataInput!",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelxdefaultsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXDefaultSettings",
      "name": "updateDefaultSettings",
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
        },
        {
          "typeString": "HotelXDefaultSettingsDataInput!",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelxdefaultsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXUpdateStatus",
      "name": "updateStatus",
      "url": "/hotel-x/reference/objects/hotelxupdatestatus",
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
        },
        {
          "typeString": "ID",
          "name": "clientName",
          "url": "/hotel-x/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Boolean!",
          "name": "isActive",
          "url": "/hotel-x/reference/scalars/boolean",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "createCommonSettings",
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
        },
        {
          "typeString": "HotelXCommonSettingsDataInput!",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelxcommonsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "updateCommonSettings",
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
        },
        {
          "typeString": "HotelXCommonSettingsDataInput!",
          "name": "settings",
          "url": "/hotel-x/reference/inputobjects/hotelxcommonsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelBookPayload",
      "name": "book",
      "url": "/hotel-x/reference/objects/hotelbookpayload",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelBookInput!",
          "name": "input",
          "url": "/hotel-x/reference/inputobjects/hotelbookinput",
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
      "typeString": "HotelCancelPayload",
      "name": "cancel",
      "url": "/hotel-x/reference/objects/hotelcancelpayload",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCancelInput!",
          "name": "input",
          "url": "/hotel-x/reference/inputobjects/hotelcancelinput",
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
      "typeString": "String!",
      "name": "loadFile",
      "url": "/hotel-x/reference/scalars/string",
      "description": null,
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "input",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
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
