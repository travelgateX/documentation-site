{
  "title": "APIData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": "API Code",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/paymentx/reference/scalars/id",
      "description": "API ID",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEditable",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "Is API Editable or not.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/paymentx/reference/scalars/string",
      "description": "API label",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupConnection",
      "name": "groups",
      "url": "/paymentx/reference/objects/groupconnection",
      "description": "which groups are asigned this API?",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "GroupType",
          "name": "type",
          "url": "/paymentx/reference/enums/grouptype",
          "description": ""
        },
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
    },
    {
      "typeString": "ResourceConnection",
      "name": "resources",
      "url": "/paymentx/reference/objects/resourceconnection",
      "description": "which resources are asigned this API?",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
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
    },
    {
      "typeString": "OperationConnection",
      "name": "operations",
      "url": "/paymentx/reference/objects/operationconnection",
      "description": "which operations are asigned this API?",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/paymentx/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "OperationType",
          "name": "type",
          "url": "/paymentx/reference/enums/operationtype",
          "description": ""
        },
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
      "name": "API",
      "description": "",
      "url": "/paymentx/reference/objects/api"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "APIData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
