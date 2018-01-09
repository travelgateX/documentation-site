{
  "title": "RoleData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "label",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isCreate",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isRead",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isUpdate",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isDelete",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEnable",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isExecutable",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isSpecial",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String",
      "name": "special",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ResourceConnection",
      "name": "resources",
      "url": "/travelgatex/reference/objects/resourceconnection",
      "description": "",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "Int",
          "name": "first",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/travelgatex/reference/scalars/int",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        },
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/id",
          "description": "",
          "isDeprecated": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Role",
      "description": "",
      "url": "/travelgatex/reference/objects/role"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "RoleData"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
