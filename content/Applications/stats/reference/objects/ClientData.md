{
  "title": "ClientData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/stats/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "name",
      "url": "/stats/reference/scalars/id",
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
      "typeString": "Group",
      "name": "group",
      "url": "/stats/reference/objects/group",
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
      "typeString": "SupplierConnection",
      "name": "suppliers",
      "url": "/stats/reference/objects/supplierconnection",
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
        },
        {
          "typeString": "SupplierFilter",
          "name": "filter",
          "url": "/stats/reference/inputobjects/supplierfilter",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Client",
      "description": null,
      "url": "/stats/reference/objects/client"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ClientData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
