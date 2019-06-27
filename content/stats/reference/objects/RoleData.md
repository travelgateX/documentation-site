{
  "title": "RoleData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/stats/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/stats/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "RoleType!",
      "name": "type",
      "url": "/stats/reference/enums/roletype",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEditable",
      "url": "/stats/reference/scalars/boolean",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/stats/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isCreate",
      "url": "/stats/reference/scalars/boolean",
      "description": "Has resource Create permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isRead",
      "url": "/stats/reference/scalars/boolean",
      "description": "Has resource Create permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isUpdate",
      "url": "/stats/reference/scalars/boolean",
      "description": "Has resource Update permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isDelete",
      "url": "/stats/reference/scalars/boolean",
      "description": "Has resource Delete permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEnable",
      "url": "/stats/reference/scalars/boolean",
      "description": "Is role enabled or not?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isExecutable",
      "url": "/stats/reference/scalars/boolean",
      "description": "Has resource Executable permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isSpecial",
      "url": "/stats/reference/scalars/boolean",
      "description": "Has any other non-basic permission/s?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "special",
      "url": "/stats/reference/scalars/string",
      "description": "Special permission",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ResourceConnection",
      "name": "resources",
      "url": "/stats/reference/objects/resourceconnection",
      "description": "Resources used",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/stats/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/stats/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/stats/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/stats/reference/scalars/string",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/stats/reference/objects/role"
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
