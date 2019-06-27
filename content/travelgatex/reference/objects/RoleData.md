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
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "RoleType!",
      "name": "type",
      "url": "/travelgatex/reference/enums/roletype",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEditable",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/travelgatex/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isCreate",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Has resource Create permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isRead",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Has resource Create permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isUpdate",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Has resource Update permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isDelete",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Has resource Delete permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEnable",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Is role enabled or not?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isExecutable",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Has resource Executable permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isSpecial",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Has any other non-basic permission/s?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "special",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Special permission",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ResourceConnection",
      "name": "resources",
      "url": "/travelgatex/reference/objects/resourceconnection",
      "description": "Resources used",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/travelgatex/reference/scalars/id",
          "description": ""
        },
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
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/travelgatex/reference/objects/role"
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
