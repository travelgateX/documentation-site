{
  "title": "AccessInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Access descriptive unique name",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if Access is active",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Access code.",
      "args": null
    },
    {
      "typeString": "String",
      "name": "supplier",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Supplier for this Access",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isTest",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if Access can be used for testing or not",
      "args": null
    },
    {
      "typeString": "String",
      "name": "user",
      "url": "/travelgatex/reference/scalars/string",
      "description": "User code to connect to supplier",
      "args": null
    },
    {
      "typeString": "String",
      "name": "password",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Password for the connection",
      "args": null
    },
    {
      "typeString": "UrlsInput",
      "name": "urls",
      "url": "/travelgatex/reference/inputobjects/urlsinput",
      "description": "Specific URLs",
      "args": null
    },
    {
      "typeString": "[ParameterInput]",
      "name": "parameters",
      "url": "/travelgatex/reference/inputobjects/parameterinput",
      "description": "List of parameters for additional information",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "markets",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Markets allowed for the Access",
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "rateRules",
      "url": "/travelgatex/reference/enums/raterulestype",
      "description": "Business rule types for the Access",
      "args": null
    },
    {
      "typeString": "String",
      "name": "shared",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Parent Access if Shared Access.",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "group",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Default group where the access will be visible.",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "owner",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Access owner",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "AccessInput",
  "hideGithubLink": true
}
Access input
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
