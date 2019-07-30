{
  "title": "SupplierData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/alertsx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/alertsx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/alertsx/reference/scalars/boolean",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Provider!",
      "name": "provider",
      "url": "/alertsx/reference/objects/provider",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "context",
      "url": "/alertsx/reference/scalars/string",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "serviceApi",
      "url": "/alertsx/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID",
      "name": "supplierGroup",
      "url": "/alertsx/reference/scalars/id",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AccessConnection",
      "name": "accesses",
      "url": "/alertsx/reference/objects/accessconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
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
        },
        {
          "typeString": "AccessFilter",
          "name": "filter",
          "url": "/alertsx/reference/inputobjects/accessfilter",
          "description": null
        }
      ]
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/alertsx/reference/objects/organization",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupConnection",
      "name": "groups",
      "url": "/alertsx/reference/objects/groupconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
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
      "typeString": "ClientConnection",
      "name": "clients",
      "url": "/alertsx/reference/objects/clientconnection",
      "description": null,
      "isDeprecated": false,
      "args": [
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
        },
        {
          "typeString": "ClientFilter",
          "name": "filter",
          "url": "/alertsx/reference/inputobjects/clientfilter",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Supplier",
      "description": null,
      "url": "/alertsx/reference/objects/supplier"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "SupplierData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
