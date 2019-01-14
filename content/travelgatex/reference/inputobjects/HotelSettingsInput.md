{
  "title": "HotelSettingsInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "context",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the context of the I/O codes (hotel, board, room and rates)",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "useContext",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if you want use context, or not, by default is true.\n@deprecated(reason: \"deprecated from 2017-12-12. Redundant.\")",
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Redundant.",
      "descriptionSplitted": {
        "date": "2017-12-12",
        "first": "Indicates if you want use context, or not, by default is true.\n@deprecated(reason: \"deprecated from",
        "second": "Redundant.\")"
      },
      "deprecationDate": "2017-12-12",
      "typeName": "HotelSettingsInput"
    },
    {
      "typeString": "String",
      "name": "connectUser",
      "url": "/travelgatex/reference/scalars/string",
      "description": " This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.\n@deprecated(reason: \"deprecated from 2018-03-19. Redundant.\")",
      "isDeprecated": true,
      "args": null,
      "deprecationReason": "Redundant.",
      "descriptionSplitted": {
        "date": "2018-03-19",
        "first": " This field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.\n@deprecated(reason: \"deprecated from",
        "second": "Redundant.\")"
      },
      "deprecationDate": "2018-03-19",
      "typeName": "HotelSettingsInput"
    },
    {
      "typeString": "ID",
      "name": "client",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Client name, this field is occurs only if the authorization header is of the type JWT.. It is used to change the user that has been set by default in the preload.",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "group",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Group whose resources want to be used",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "timeout",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Milliseconds before the connection is closed.",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "auditTransactions",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Returns all the transactions exchanged with the supplier.",
      "args": null
    },
    {
      "typeString": "BusinessRulesInput",
      "name": "businessRules",
      "url": "/travelgatex/reference/inputobjects/businessrulesinput",
      "description": "Business rules",
      "args": null
    },
    {
      "typeString": "[HotelXSupplierInput!]",
      "name": "suppliers",
      "url": "/travelgatex/reference/inputobjects/hotelxsupplierinput",
      "description": "Array of suppliers. Each one contains its own code, settings and accesses.",
      "args": null
    },
    {
      "typeString": "[PluginStepInput!]",
      "name": "plugins",
      "url": "/travelgatex/reference/inputobjects/pluginstepinput",
      "description": "Array of plugins to execute.",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "testMode",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "This flag allows only the accesses checked as test. By default is production.",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "clientTokens",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Used to identify the origin of the request, this is only used in plugins. ",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelSettingsInput",
  "hideGithubLink": true
}
Settings that you can edit for this avail. Values are loaded by default in our Back Office.
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
