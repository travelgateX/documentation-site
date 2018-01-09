{
  "title": "Mutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "HotelXMutation",
      "name": "hotelX",
      "url": "/travelgatex/reference/objects/hotelxmutation",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "AdminMutation",
      "name": "admin",
      "url": "/travelgatex/reference/objects/adminmutation",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "HotelBookPayload",
      "name": "hotelBook",
      "url": "/travelgatex/reference/objects/hotelbookpayload",
      "description": "Creates a new hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": " ⚠️",
      "args": [
        {
          "typeString": "HotelBookInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/hotelbookinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "HotelCancelPayload",
      "name": "hotelCancel",
      "url": "/travelgatex/reference/objects/hotelcancelpayload",
      "description": "Cancels an existing hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": " ⚠️",
      "args": [
        {
          "typeString": "HotelCancelInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/hotelcancelinput",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "HotelSettingsInput",
          "name": "settings",
          "url": "/travelgatex/reference/inputobjects/hotelsettingsinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "String!",
      "name": "loadFile",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Load mapping files for a group.",
      "isDeprecated": " ⚠️",
      "args": [
        {
          "typeString": "String!",
          "name": "input",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "DefaultSettings",
      "name": "createDefaultSettings",
      "url": "/travelgatex/reference/objects/defaultsettings",
      "description": "Creates a defaultSettings for a given group",
      "isDeprecated": " ⚠️",
      "args": [
        {
          "typeString": "DefaultSettingsInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/defaultsettingsinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "DefaultSettings",
      "name": "updateDefaultSettings",
      "url": "/travelgatex/reference/objects/defaultsettings",
      "description": "Updates a defaultSettings for a given group",
      "isDeprecated": " ⚠️",
      "args": [
        {
          "typeString": "DefaultSettingsInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/defaultsettingsinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "Boolean!",
      "name": "deleteDefaultSettings",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Deletes a defaultSettings for a given group",
      "isDeprecated": " ⚠️",
      "args": [
        {
          "typeString": "String!",
          "name": "input",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Mutation"
}
Mutations are operations that change or update data in the server.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
