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
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "useContext",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if you want use context, or not, by default is true.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "connectUser",
      "url": "/travelgatex/reference/scalars/string",
      "description": "This field is got only if the authorization header is of the type JWT. It is used for to change the user that\nhas been set by default in the preload.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "timeout",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Milliseconds before the connection is closed.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "auditTransactions",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Returns all the transactions exchanged with the supplier.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "BusinessRulesInput",
      "name": "businessRules",
      "url": "/travelgatex/reference/inputobjects/businessrulesinput",
      "description": "Business rules.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[SupplierInput!]",
      "name": "suppliers",
      "url": "/travelgatex/reference/inputobjects/supplierinput",
      "description": "Array of suppliers. Each one contains its own code, settings and accesses.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[PluginStepInput!]",
      "name": "plugins",
      "url": "/travelgatex/reference/inputobjects/pluginstepinput",
      "description": "Array of pluggins to execute.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "HotelSettingsInput"
}
Settings that you can edit for this avail. Values are loaded by default in our Back Office.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
