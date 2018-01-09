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
      "typeString": "Boolean!",
      "name": "isActive",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "indicates whether a supplier is active",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "dll",
      "url": "/travelgatex/reference/scalars/id",
      "description": "instance to which this supllier is connected",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "hotelCodes",
      "url": "/travelgatex/reference/scalars/id",
      "description": "accesses(first: Int, Last: Int, before: String, after:String, criterial: criterialInput): AccessConnection",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "ID!",
          "name": "hotel",
          "url": "/travelgatex/reference/scalars/id",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "[SupplierGroup!]",
      "name": "supplierGroups",
      "url": "/travelgatex/reference/objects/suppliergroup",
      "description": "supplier's related data of its groups",
      "isDeprecated": "",
      "args": null
    }
  ],
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
