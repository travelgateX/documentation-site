{
  "title": "DateTime",
  "description": "",
  "weight": 1,
  "fields": null,
  "requireby": [
    {
      "name": "Stat",
      "description": "",
      "url": "/travelgatex/reference/objects/stat"
    },
    {
      "name": "AuditData",
      "description": "Data sent & received in the supplierâ€™s native format.",
      "url": "/travelgatex/reference/objects/auditdata"
    },
    {
      "name": "Transactions",
      "description": "Supplier transaction",
      "url": "/travelgatex/reference/objects/transactions"
    },
    {
      "name": "Access",
      "description": "",
      "url": "/travelgatex/reference/objects/access"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/travelgatex/reference/interfaces/node"
    },
    {
      "name": "Supplier",
      "description": "",
      "url": "/travelgatex/reference/objects/supplier"
    },
    {
      "name": "Hotel",
      "description": "Hotel type",
      "url": "/travelgatex/reference/objects/hotel"
    },
    {
      "name": "Media",
      "description": "",
      "url": "/travelgatex/reference/objects/media"
    },
    {
      "name": "Amenity",
      "description": "",
      "url": "/travelgatex/reference/objects/amenity"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "DateTime"
}
In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: datetime: "2015-11-22T13:57:31.123Z".
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
