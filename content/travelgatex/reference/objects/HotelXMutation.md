{
  "title": "HotelXMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "HotelXDefaultSettings",
      "name": "createDefaultSettings",
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
        },
        {
          "typeString": "HotelXDefaultSettingsDataInput!",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelxdefaultsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXDefaultSettings",
      "name": "updateDefaultSettings",
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
        },
        {
          "typeString": "HotelXDefaultSettingsDataInput!",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelxdefaultsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXUpdateStatus",
      "name": "updateStatus",
      "url": "/travelgatex/reference/objects/hotelxupdatestatus",
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
        },
        {
          "typeString": "ID",
          "name": "clientName",
          "url": "/travelgatex/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Boolean!",
          "name": "isActive",
          "url": "/travelgatex/reference/scalars/boolean",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "createCommonSettings",
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
        },
        {
          "typeString": "HotelXCommonSettingsDataInput!",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelxcommonsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "updateCommonSettings",
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
        },
        {
          "typeString": "HotelXCommonSettingsDataInput!",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelxcommonsettingsdatainput",
          "description": null
        }
      ]
    },
    {
      "typeString": "HotelBookPayload",
      "name": "book",
      "url": "/travelgatex/reference/objects/hotelbookpayload",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelBookInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/hotelbookinput",
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
      "typeString": "HotelCancelPayload",
      "name": "cancel",
      "url": "/travelgatex/reference/objects/hotelcancelpayload",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCancelInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/hotelcancelinput",
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
      "typeString": "HotelCommitPayload",
      "name": "commit",
      "url": "/travelgatex/reference/objects/hotelcommitpayload",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCommitInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/hotelcommitinput",
          "description": null
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": null
        }
      ]
    },
    {
      "typeString": "String!",
      "name": "loadFile",
      "url": "/travelgatex/reference/scalars/string",
      "description": null,
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "input",
          "url": "/travelgatex/reference/scalars/string",
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
  "requireby": [
    {
      "name": "Mutation",
      "description": null,
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelXMutation",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
