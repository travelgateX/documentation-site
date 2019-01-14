{
  "title": "HotelXMutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "HotelXDefaultSettings",
      "name": "createDefaultSettings",
      "url": "/travelgatex/reference/objects/hotelxdefaultsettings",
      "description": "Saves defaults settings to HotelX",
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
        },
        {
          "typeString": "HotelXDefaultSettingsDataInput!",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelxdefaultsettingsdatainput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelXDefaultSettings",
      "name": "updateDefaultSettings",
      "url": "/travelgatex/reference/objects/hotelxdefaultsettings",
      "description": "Updates defaults settings to HotelX",
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
        },
        {
          "typeString": "HotelXDefaultSettingsDataInput!",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelxdefaultsettingsdatainput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelXUpdateStatus",
      "name": "updateStatus",
      "url": "/travelgatex/reference/objects/hotelxupdatestatus",
      "description": "Updates status of an entity of HotelX",
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
        },
        {
          "typeString": "ID",
          "name": "clientName",
          "url": "/travelgatex/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Boolean!",
          "name": "isActive",
          "url": "/travelgatex/reference/scalars/boolean",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "createCommonSettings",
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
        },
        {
          "typeString": "HotelXCommonSettingsDataInput!",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelxcommonsettingsdatainput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelXCommonSettings",
      "name": "updateCommonSettings",
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
        },
        {
          "typeString": "HotelXCommonSettingsDataInput!",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelxcommonsettingsdatainput",
          "description": ""
        }
      ]
    },
    {
      "typeString": "HotelBookPayload",
      "name": "book",
      "url": "/travelgatex/reference/objects/hotelbookpayload",
      "description": "Creates a new hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelBookInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/hotelbookinput",
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
      "typeString": "HotelCancelPayload",
      "name": "cancel",
      "url": "/travelgatex/reference/objects/hotelcancelpayload",
      "description": "Cancels an existing hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "HotelCancelInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/hotelcancelinput",
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
      "typeString": "String!",
      "name": "loadFile",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "input",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ],
      "deprecationReason": "",
      "descriptionSplitted": {
        "date": "2018-06-06",
        "first": "deprecated from",
        "second": ""
      },
      "deprecationDate": "2018-06-06"
    }
  ],
  "requireby": [
    {
      "name": "Mutation",
      "description": "The root query for implementing GraphQL mutations. Mutations are operations that change or update data on the server",
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
