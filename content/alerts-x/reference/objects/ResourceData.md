{
  "title": "ResourceData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "id",
      "url": "/alertsx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alertsx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isEditable",
      "url": "/alertsx/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String",
      "name": "label",
      "url": "/alertsx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "APIConnection",
      "name": "apis",
      "url": "/alertsx/reference/objects/apiconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alertsx/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alertsx/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alertsx/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alertsx/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alertsx/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "RoleConnection",
      "name": "roles",
      "url": "/alertsx/reference/objects/roleconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ID!]",
          "name": "codes",
          "url": "/alertsx/reference/scalars/id",
          "description": null
        },
        {
          "typeString": "RoleType",
          "name": "type",
          "url": "/alertsx/reference/enums/roletype",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "first",
          "url": "/alertsx/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/alertsx/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/alertsx/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/alertsx/reference/scalars/string",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Resource",
      "description": null,
      "url": "/alertsx/reference/objects/resource"
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
