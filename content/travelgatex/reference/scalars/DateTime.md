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
      "name": "Hotel",
      "description": "Hotel type",
      "url": "/travelgatex/reference/objects/hotel"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/travelgatex/reference/interfaces/node"
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
    },
    {
      "name": "Supplier",
      "description": "",
      "url": "/travelgatex/reference/objects/supplier"
    },
    {
      "name": "Access",
      "description": "",
      "url": "/travelgatex/reference/objects/access"
    },
    {
      "name": "Member",
      "description": "",
      "url": "/travelgatex/reference/objects/member"
    },
    {
      "name": "Group",
      "description": "",
      "url": "/travelgatex/reference/objects/group"
    },
    {
      "name": "API",
      "description": "",
      "url": "/travelgatex/reference/objects/api"
    },
    {
      "name": "Resource",
      "description": "",
      "url": "/travelgatex/reference/objects/resource"
    },
    {
      "name": "Role",
      "description": "",
      "url": "/travelgatex/reference/objects/role"
    },
    {
      "name": "Organization",
      "description": "",
      "url": "/travelgatex/reference/objects/organization"
    },
    {
      "name": "Product",
      "description": "",
      "url": "/travelgatex/reference/objects/product"
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
