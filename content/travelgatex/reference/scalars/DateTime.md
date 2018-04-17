{
  "title": "DateTime",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Board",
      "description": "Board Type",
      "url": "/travelgatex/reference/objects/board"
    },
    {
      "name": "Node",
      "description": "",
      "url": "/travelgatex/reference/interfaces/node"
    },
    {
      "name": "Category",
      "description": "Category Type",
      "url": "/travelgatex/reference/objects/category"
    },
    {
      "name": "RoomStatic",
      "description": "Room Type",
      "url": "/travelgatex/reference/objects/roomstatic"
    },
    {
      "name": "Hotel",
      "description": "Hotel Type",
      "url": "/travelgatex/reference/objects/hotel"
    },
    {
      "name": "Media",
      "description": "Contains media information.",
      "url": "/travelgatex/reference/objects/media"
    },
    {
      "name": "Destination",
      "description": "Destination Type",
      "url": "/travelgatex/reference/objects/destination"
    },
    {
      "name": "Stat",
      "description": "",
      "url": "/travelgatex/reference/objects/stat"
    },
    {
      "name": "AuditData",
      "description": "Data sent & received in the supplier’s native format.",
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
      "name": "Supplier",
      "description": "",
      "url": "/travelgatex/reference/objects/supplier"
    },
    {
      "name": "Client",
      "description": "",
      "url": "/travelgatex/reference/objects/client"
    },
    {
      "name": "Organization",
      "description": "",
      "url": "/travelgatex/reference/objects/organization"
    },
    {
      "name": "Group",
      "description": "",
      "url": "/travelgatex/reference/objects/group"
    },
    {
      "name": "Member",
      "description": "",
      "url": "/travelgatex/reference/objects/member"
    },
    {
      "name": "Role",
      "description": "",
      "url": "/travelgatex/reference/objects/role"
    },
    {
      "name": "Resource",
      "description": "",
      "url": "/travelgatex/reference/objects/resource"
    },
    {
      "name": "API",
      "description": "",
      "url": "/travelgatex/reference/objects/api"
    },
    {
      "name": "Operation",
      "description": "",
      "url": "/travelgatex/reference/objects/operation"
    },
    {
      "name": "Product",
      "description": "",
      "url": "/travelgatex/reference/objects/product"
    },
    {
      "name": "Context",
      "description": "Context type, for now only Code is necessary",
      "url": "/travelgatex/reference/objects/context"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "DateTime"
}
The DateTime type represents DateTime values. A good example might be a transaction TimeSpan.
In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: "2017-10-22T13:57:31.123Z".
## GraphQL Schema definition

{{% graphql-schema-scalar %}}

## Require by

{{% graphql-require-by %}}
