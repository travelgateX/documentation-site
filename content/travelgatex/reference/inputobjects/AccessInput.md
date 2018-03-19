{
  "title": "AccessInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Access descriptive name",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if the access is active.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Access code.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "supplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": "supplier for this access.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isTest",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if this access can be used for testing or not",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "user",
      "url": "/travelgatex/reference/scalars/string",
      "description": "User code to connect to supplier.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "password",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Password for the connection.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "UrlsInput",
      "name": "urls",
      "url": "/travelgatex/reference/inputobjects/urlsinput",
      "description": "Specific Urls",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[ParameterInput]",
      "name": "parameters",
      "url": "/travelgatex/reference/inputobjects/parameterinput",
      "description": "List of parameters for additional information.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "markets",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Markets allowed for the access.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "rateRules",
      "url": "/travelgatex/reference/enums/raterulestype",
      "description": "Business rules types for the access.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "shared",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Parent access if Shared access.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "group",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Default group where the access will be visible.",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "AccessInput"
}
Access input
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
