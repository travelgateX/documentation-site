{
  "title": "RoleData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/mappea/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/mappea/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "RoleType!",
      "name": "type",
      "url": "/mappea/reference/enums/roletype",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEditable",
      "url": "/mappea/reference/scalars/boolean",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/mappea/reference/scalars/string",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isCreate",
      "url": "/mappea/reference/scalars/boolean",
      "description": "Has resource Create permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isRead",
      "url": "/mappea/reference/scalars/boolean",
      "description": "Has resource Create permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isUpdate",
      "url": "/mappea/reference/scalars/boolean",
      "description": "Has resource Update permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isDelete",
      "url": "/mappea/reference/scalars/boolean",
      "description": "Has resource Delete permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEnable",
      "url": "/mappea/reference/scalars/boolean",
      "description": "Is role enabled or not?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isExecutable",
      "url": "/mappea/reference/scalars/boolean",
      "description": "Has resource Executable permission?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isSpecial",
      "url": "/mappea/reference/scalars/boolean",
      "description": "Has any other non-basic permission/s?",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "special",
      "url": "/mappea/reference/scalars/string",
      "description": "Special permission",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ResourceConnection",
      "name": "resources",
      "url": "/mappea/reference/objects/resourceconnection",
      "description": "Resources used",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/mappea/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/mappea/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/mappea/reference/scalars/int",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/mappea/reference/scalars/string",
          "description": ""
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/mappea/reference/scalars/string",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Role",
      "description": "Permissions determine what operations are allowed on a resource",
      "url": "/mappea/reference/objects/role"
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
