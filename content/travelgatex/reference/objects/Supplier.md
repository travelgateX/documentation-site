{
  "title": "Supplier",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "SupplierData!",
      "name": "supplierData",
      "url": "/travelgatex/reference/objects/supplierdata",
      "description": "",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that will lead the service to abort",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Create date ",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Update date",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AccessData",
      "description": "",
      "url": "/travelgatex/reference/objects/accessdata"
    },
    {
      "name": "AccessEdge",
      "description": "",
      "url": "/travelgatex/reference/objects/accessedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Supplier"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
