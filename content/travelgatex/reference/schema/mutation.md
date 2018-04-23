{
  "title": "Mutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "AdminMutation",
      "name": "admin",
      "url": "/travelgatex/reference/objects/adminmutation",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelXMutation",
      "name": "hotelX",
      "url": "/travelgatex/reference/objects/hotelxmutation",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "MappeaMutation",
      "name": "mappea",
      "url": "/travelgatex/reference/objects/mappeamutation",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": [
    {
      "typeString": "HotelBookPayload",
      "name": "hotelBook",
      "url": "/travelgatex/reference/objects/hotelbookpayload",
      "description": "Creates a new hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": true,
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
        }
      ],
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at HotelX"
    },
    {
      "typeString": "HotelCancelPayload",
      "name": "hotelCancel",
      "url": "/travelgatex/reference/objects/hotelcancelpayload",
      "description": "Cancels an existing hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": true,
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
        }
      ],
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at HotelX"
    },
    {
      "typeString": "String!",
      "name": "loadFile",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Load mapping files for a group.",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "input",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ],
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at Admin"
    },
    {
      "typeString": "DefaultSettings",
      "name": "createDefaultSettings",
      "url": "/travelgatex/reference/objects/defaultsettings",
      "description": "Creates a defaultSettings for a given group",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "DefaultSettingsInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/defaultsettingsinput",
          "description": ""
        }
      ],
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at Admin"
    },
    {
      "typeString": "DefaultSettings",
      "name": "updateDefaultSettings",
      "url": "/travelgatex/reference/objects/defaultsettings",
      "description": "Updates a defaultSettings for a given group",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "DefaultSettingsInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/defaultsettingsinput",
          "description": ""
        }
      ],
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at Admin"
    },
    {
      "typeString": "Boolean!",
      "name": "deleteDefaultSettings",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Deletes a defaultSettings for a given group",
      "isDeprecated": true,
      "args": [
        {
          "typeString": "String!",
          "name": "input",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ],
      "deprecationReason": "deprecated from 2017-11-21. You can find it in query at Admin"
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "Mutation"
}
Mutations are operations that change or update data on the server.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
