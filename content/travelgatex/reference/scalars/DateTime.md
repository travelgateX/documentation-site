{
  "title": "DateTime",
  "description": "",
  "weight": 1,
  "fields": null,
  "deprecatedFields": null,
  "requireby": [
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
      "name": "Board",
      "description": "Board type.",
      "url": "/travelgatex/reference/objects/board"
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
      "description": "Data sent and received in the supplier’s native format.",
      "url": "/travelgatex/reference/objects/auditdata"
    },
    {
      "name": "Transactions",
      "description": "Supplier transaction",
      "url": "/travelgatex/reference/objects/transactions"
    },
    {
      "name": "StatsFilterInput",
      "description": "Filters needed to do a search.\nUsers (List of users), Suppliers (List of suppliers), ServiceApis (List of service apis), From (Start date of search - YYYY-MM-DD HH:mm:ss), To (End date of search - YYYY-MM-DD HH:mm:ss)",
      "url": "/travelgatex/reference/inputobjects/statsfilterinput"
    },
    {
      "name": "Stats",
      "description": "The service used to access the stats of every connection that uses the HUB",
      "url": "/travelgatex/reference/objects/stats"
    },
    {
      "name": "StatsData",
      "description": "",
      "url": "/travelgatex/reference/objects/statsdata"
    },
    {
      "name": "StatsAssert",
      "description": "Assert of an specific error",
      "url": "/travelgatex/reference/objects/statsassert"
    },
    {
      "name": "Context",
      "description": "Context type. Currently, only Code is necessary.",
      "url": "/travelgatex/reference/objects/context"
    }
  ],
  "enumValues": null,
  "operator": "scalar",
  "typename": "DateTime"
}
The DateTime type represents DateTime values. A good example might be a transaction TimeSpan.
In queries or mutations, DateTime fields have to be specified in ISO 8601 format with enclosing double quotes: "2017-10-22T13:57:31.123Z".
## GraphQL schema definition

{{% graphql-schema-scalar %}}

## Required by

{{% graphql-require-by %}}
