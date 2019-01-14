{
  "title": "AccessData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "name",
      "url": "/paymentx/reference/scalars/string",
      "description": "Access descriptive name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "Indicates if Access is active",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": "Unique AccessConfiguration identifier",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Supplier!",
      "name": "supplier",
      "url": "/paymentx/reference/objects/supplier",
      "description": "Supplier for this Access",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isTest",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "Indicates if Access can be used for testing or not",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "user",
      "url": "/paymentx/reference/scalars/string",
      "description": "User code to connect to supplier",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "password",
      "url": "/paymentx/reference/scalars/string",
      "description": "Password for the connection",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Urls",
      "name": "urls",
      "url": "/paymentx/reference/objects/urls",
      "description": "Specific URLs",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Parameter]",
      "name": "parameters",
      "url": "/paymentx/reference/objects/parameter",
      "description": "List of parameters for additional information",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "markets",
      "url": "/paymentx/reference/scalars/string",
      "description": "Markets allowed for the Access",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "rateRules",
      "url": "/paymentx/reference/enums/raterulestype",
      "description": "Business rule types for the Access",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Access",
      "name": "shared",
      "url": "/paymentx/reference/objects/access",
      "description": "Parent Access if Shared Access",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/paymentx/reference/objects/organization",
      "description": "Access owner",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isSchedulerActive",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "True if scheduler is active",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupConnection",
      "name": "groups",
      "url": "/paymentx/reference/objects/groupconnection",
      "description": "Groups where access belongs",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "Int",
          "name": "first",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/paymentx/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/paymentx/reference/scalars/string",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Access",
      "description": "An Access is a set of credentials and configuration in order to access the system of a Supplier.",
      "url": "/paymentx/reference/objects/access"
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
