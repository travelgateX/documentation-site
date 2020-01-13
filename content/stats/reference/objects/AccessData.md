{
  "title": "AccessData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String!",
      "name": "name",
      "url": "/stats/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/stats/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/stats/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Supplier!",
      "name": "supplier",
      "url": "/stats/reference/objects/supplier",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isTest",
      "url": "/stats/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "user",
      "url": "/stats/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "password",
      "url": "/stats/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Urls",
      "name": "urls",
      "url": "/stats/reference/objects/urls",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Parameter]",
      "name": "parameters",
      "url": "/stats/reference/objects/parameter",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "markets",
      "url": "/stats/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[RateRulesType!]",
      "name": "rateRules",
      "url": "/stats/reference/enums/raterulestype",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Access",
      "name": "shared",
      "url": "/stats/reference/objects/access",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/stats/reference/objects/organization",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "updateDescriptiveInfo",
      "url": "/stats/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "descriptiveInfoLimit",
      "url": "/stats/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "isSchedulerActive",
      "url": "/stats/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "updateList",
      "url": "/stats/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "updateDateRange",
      "url": "/stats/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupConnection",
      "name": "groups",
      "url": "/stats/reference/objects/groupconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "Int",
          "name": "first",
          "url": "/stats/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/stats/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/stats/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/stats/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "LegacyLink",
      "name": "legacyLink",
      "url": "/stats/reference/objects/legacylink",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Access",
      "name": "master",
      "url": "/stats/reference/objects/access",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Access",
      "description": null,
      "url": "/stats/reference/objects/access"
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
