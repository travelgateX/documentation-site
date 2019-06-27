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
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "SupplierData",
      "name": "supplierData",
      "url": "/travelgatex/reference/objects/supplierdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
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
      "name": "SupplierEdge",
      "description": "",
      "url": "/travelgatex/reference/objects/supplieredge"
    },
    {
      "name": "AdminMutation",
      "description": "The admin query root of TravelgateX's for implementing GraphQL mutations.",
      "url": "/travelgatex/reference/objects/adminmutation"
    },
    {
      "name": "SupplierDetected",
      "description": "",
      "url": "/travelgatex/reference/objects/supplierdetected"
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
