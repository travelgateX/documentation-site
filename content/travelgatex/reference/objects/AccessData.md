{
  "title": "AccessData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Access descriptive name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if Access is active",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "Unique AccessConfiguration identifier",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Supplier!",
      "name": "supplier",
      "url": "/travelgatex/reference/objects/supplier",
      "description": "Supplier for this Access",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isTest",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Indicates if Access can be used for testing or not",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "user",
      "url": "/travelgatex/reference/scalars/string",
      "description": "User code to connect to supplier",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "password",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Password for the connection",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Urls",
      "name": "urls",
      "url": "/travelgatex/reference/objects/urls",
      "description": "Specific URLs",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Parameter]",
      "name": "parameters",
      "url": "/travelgatex/reference/objects/parameter",
      "description": "List of parameters for additional information",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "markets",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Markets allowed for the Access",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "rateRules",
      "url": "/travelgatex/reference/enums/raterulestype",
      "description": "Business rule types for the Access",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Access",
      "name": "shared",
      "url": "/travelgatex/reference/objects/access",
      "description": "Parent Access if Shared Access",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/travelgatex/reference/objects/organization",
      "description": "Access owner",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isSchedulerActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "True if scheduler is active",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupConnection",
      "name": "groups",
      "url": "/travelgatex/reference/objects/groupconnection",
      "description": "Groups where access belongs",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "Int",
          "name": "first",
          "url": "/travelgatex/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/travelgatex/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Access",
      "description": "An Access is a set of credentials and configuration in order to access the system of a Supplier.",
      "url": "/travelgatex/reference/objects/access"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AccessData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
