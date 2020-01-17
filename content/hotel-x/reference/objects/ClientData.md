{
  "title": "ClientData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/hotel-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "name",
      "url": "/hotel-x/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/hotel-x/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Group",
      "name": "group",
      "url": "/hotel-x/reference/objects/group",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/hotel-x/reference/objects/organization",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "SupplierConnection",
      "name": "suppliers",
      "url": "/hotel-x/reference/objects/supplierconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "Int",
          "name": "first",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "Int",
          "name": "last",
          "url": "/hotel-x/reference/scalars/int",
          "description": null
        },
        {
          "typeString": "String",
          "name": "before",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "String",
          "name": "after",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        },
        {
          "typeString": "SupplierFilter",
          "name": "filter",
          "url": "/hotel-x/reference/inputobjects/supplierfilter",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Client",
      "description": null,
      "url": "/hotel-x/reference/objects/client"
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
