{
  "title": "StatsFilterInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[ID!]",
      "name": "suppliers",
      "url": "/travelgatex/reference/scalars/id",
      "description": "List of suppliers",
      "args": null
    },
    {
      "typeString": "[ServiceApiType!]",
      "name": "serviceApis",
      "url": "/travelgatex/reference/enums/serviceapitype",
      "description": "List of services apis",
      "args": null
    },
    {
      "typeString": "[ServiceOperationType!]!",
      "name": "operation",
      "url": "/travelgatex/reference/enums/serviceoperationtype",
      "description": "List of services operations",
      "args": null
    },
    {
      "typeString": "[ID!]",
      "name": "serviceOperations",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "from",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "From date of search",
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "to",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "To date of search",
      "args": null
    },
    {
      "typeString": "Boolean",
      "name": "groupUsers",
      "url": "/travelgatex/reference/scalars/boolean",
      "description": "Group all users",
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "StatsFilterInput"
}
Filters needed to do a search.
Users (List of users), Suppliers (List of suppliers), ServiceApis (List of service apis), From (Start date of search - YYYY-MM-DD HH:mm:ss), To (End date of search - YYYY-MM-DD HH:mm:ss)
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
