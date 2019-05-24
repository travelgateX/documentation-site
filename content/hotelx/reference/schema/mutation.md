{
  "title": "HotelXMutation",
  "description": "",
  "weight": 2,
  "fields": [
    {
      "typeString": "HotelXDefaultSettings",
      "name": "createDefaultSettings",
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
        },
        {
          "typeString": "HotelXDefaultSettingsDataInput!",
          "name": "settings",
          "url": "/hotelx/reference/inputobjects/hotelxdefaultsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXDefaultSettings",
      "name": "updateDefaultSettings",
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
        },
        {
          "typeString": "HotelXDefaultSettingsDataInput!",
          "name": "settings",
          "url": "/hotelx/reference/inputobjects/hotelxdefaultsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXUpdateStatus",
      "name": "updateStatus",
      "url": "/hotelx/reference/objects/hotelxupdatestatus",
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
        },
        {
          "typeString": "ID",
          "name": "clientName",
          "url": "/hotelx/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Boolean!",
          "name": "isActive",
          "url": "/hotelx/reference/scalars/boolean",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "createCommonSettings",
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
        },
        {
          "typeString": "HotelXCommonSettingsDataInput!",
          "name": "settings",
          "url": "/hotelx/reference/inputobjects/hotelxcommonsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "updateCommonSettings",
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
        },
        {
          "typeString": "HotelXCommonSettingsDataInput!",
          "name": "settings",
          "url": "/hotelx/reference/inputobjects/hotelxcommonsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelBookPayload",
      "name": "book",
      "url": "/hotelx/reference/objects/hotelbookpayload",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelBookInput!",
          "name": "input",
          "url": "/hotelx/reference/inputobjects/hotelbookinput",
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
      "typeString": "HotelCancelPayload",
      "name": "cancel",
      "url": "/hotelx/reference/objects/hotelcancelpayload",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCancelInput!",
          "name": "input",
          "url": "/hotelx/reference/inputobjects/hotelcancelinput",
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
      "typeString": "String!",
      "name": "loadFile",
      "url": "/hotelx/reference/scalars/string",
      "description": null,
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "input",
          "url": "/hotelx/reference/scalars/string",
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
