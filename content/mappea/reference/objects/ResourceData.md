{
  "title": "ResourceData",
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
      "typeString": "APIConnection",
      "name": "apis",
      "url": "/mappea/reference/objects/apiconnection",
      "description": "which API have asigned this resource?",
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
    },
    {
      "typeString": "RoleConnection",
      "name": "roles",
      "url": "/mappea/reference/objects/roleconnection",
      "description": "which roles are asigned or are possibles in this resource?",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/mappea/reference/scalars/id",
          "description": ""
        },
        {
          "typeString": "RoleType",
          "name": "type",
          "url": "/mappea/reference/enums/roletype",
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
      "name": "Resource",
      "description": "Resources are those used in APIs and Products.",
      "url": "/mappea/reference/objects/resource"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ResourceData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
