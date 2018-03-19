{
  "title": "SupplierData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "unique identifier of a supplier",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "name",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Supplier complete name",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "indicates whether a supplier is active",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Provider!",
      "name": "provider",
      "url": "/travelgatex/reference/objects/provider",
      "description": "instance to which this supllier is connected",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "String!",
      "name": "context",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Context where the Supplier belongs to",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "serviceApi",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Service API",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ID",
      "name": "supplierGroup",
      "url": "/travelgatex/reference/scalars/id",
      "description": "SupplierGroup Internal Supplier grouping",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "AccessConnection",
      "name": "accesses",
      "url": "/travelgatex/reference/objects/accessconnection",
      "description": "Accesses where the supplier is referenced",
      "isDeprecated": "",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Supplier",
      "description": "",
      "url": "/travelgatex/reference/objects/supplier"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "SupplierData"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
