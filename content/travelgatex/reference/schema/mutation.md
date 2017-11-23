{
  "title": "Mutation",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "loadFile",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Load mapping files for a group.",
      "isDeprecated": "",
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
      "typeString": "HotelBookPayload",
      "name": "hotelBook",
      "url": "/travelgatex/reference/objects/hotelbookpayload",
      "description": "Creates a new hotel booking consisting of an option of 1 or more rooms.",
      "isDeprecated": "",
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
      "isDeprecated": "",
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
      "typeString": "GroupAccess",
      "name": "createAccess",
      "url": "/travelgatex/reference/objects/groupaccess",
      "description": " Creates accesses\nIf groups are sent in input, every access will be assigned to them.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "GroupAccessInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/groupaccessinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "GroupAccess",
      "name": "updateAccess",
      "url": "/travelgatex/reference/objects/groupaccess",
      "description": "Updates existing accesses. Assigment/dissociation of groups will be done depening of the 'groups' input.\nNote that if 'groups' is sent as empty, these accesses will be dissociated from all groups.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "IdGroupAccessInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/idgroupaccessinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "[GroupAccess!]",
      "name": "deleteAccesses",
      "url": "/travelgatex/reference/objects/groupaccess",
      "description": "Deletes accesses and their relation with groups. Accesses Id are expected as input.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "[String!]!",
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
      "isDeprecated": "",
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
      "isDeprecated": "",
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
      "isDeprecated": "",
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
      "typeString": "Supplier",
      "name": "updateSupplier",
      "url": "/travelgatex/reference/objects/supplier",
      "description": "Updates existing suppliers. Assigment/dissociation of groups cannot be done.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "AccessSupplierInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/accesssupplierinput",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "ConnectUser",
      "name": "updateConnectUser",
      "url": "/travelgatex/reference/objects/connectuser",
      "description": "Updates existing connectUser. Assigment/dissociation of groups cannot be done.",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "AccessConnectUserInput!",
          "name": "input",
          "url": "/travelgatex/reference/inputobjects/accessconnectuserinput",
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
