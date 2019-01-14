{
  "title": "SupplierData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/paymentx/reference/scalars/id",
      "description": "unique identifier of a supplier",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/paymentx/reference/scalars/string",
      "description": "Supplier complete name",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/paymentx/reference/scalars/boolean",
      "description": "indicates whether a supplier is active",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Provider!",
      "name": "provider",
      "url": "/paymentx/reference/objects/provider",
      "description": "instance to which this supllier is connected",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "String!",
      "name": "context",
      "url": "/paymentx/reference/scalars/string",
      "description": "Context where the Supplier belongs to",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "serviceApi",
      "url": "/paymentx/reference/scalars/int",
      "description": "Service API",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "ID",
      "name": "supplierGroup",
      "url": "/paymentx/reference/scalars/id",
      "description": "SupplierGroup Internal Supplier grouping",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "AccessConnection",
      "name": "accesses",
      "url": "/paymentx/reference/objects/accessconnection",
      "description": "Accesses where the supplier is referenced",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Organization",
      "name": "owner",
      "url": "/paymentx/reference/objects/organization",
      "description": "Supplier owner",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "GroupConnection",
      "name": "groups",
      "url": "/paymentx/reference/objects/groupconnection",
      "description": "Groups where access belongs",
      "isDeprecated": false,
      "args": [
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
      "name": "Supplier",
      "description": "A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers",
      "url": "/paymentx/reference/objects/supplier"
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
