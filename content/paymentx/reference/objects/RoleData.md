{
  "title": "RoleData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/paymentx/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "RoleType!",
      "name": "type",
      "url": "/paymentx/reference/enums/roletype",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEditable",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/paymentx/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isCreate",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "Has resource Create permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isRead",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "Has resource Create permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isUpdate",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "Has resource Update permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isDelete",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "Has resource Delete permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEnable",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "Is role enabled or not?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isExecutable",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "Has resource Executable permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isSpecial",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "Has any other non-basic permission/s?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "special",
      "url": "/paymentx/reference/scalars/string",
      "description": "Special permission",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ResourceConnection",
      "name": "resources",
      "url": "/paymentx/reference/objects/resourceconnection",
      "description": "Resources used",
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
    }
  ],
  "requireby": [
    {
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/paymentx/reference/objects/role"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RoleData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
