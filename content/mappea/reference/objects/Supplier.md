{
  "title": "Supplier",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/mappea/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "SupplierData",
      "name": "supplierData",
      "url": "/mappea/reference/objects/supplierdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/mappea/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/mappea/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/mappea/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "SupplierDetected",
      "description": "",
      "url": "/mappea/reference/objects/supplierdetected"
    },
    {
      "name": "AccessData",
      "description": "",
      "url": "/mappea/reference/objects/accessdata"
    },
    {
      "name": "SupplierEdge",
      "description": "",
      "url": "/mappea/reference/objects/supplieredge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Supplier",
  "hideGithubLink": true
}
A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
