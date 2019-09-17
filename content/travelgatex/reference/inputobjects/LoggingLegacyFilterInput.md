{
  "title": "LoggingLegacyFilterInput",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "DateTime",
      "name": "from",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "From date of search",
      "args": null
    },
    {
      "typeString": "DateTime",
      "name": "to",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "To date of search",
      "args": null
    },
    {
      "typeString": "TimeRangeInput",
      "name": "timeRange",
      "url": "/travelgatex/reference/inputobjects/timerangeinput",
      "description": "Range of the time",
      "args": null
    },
    {
      "typeString": "ModeType!",
      "name": "requestMode",
      "url": "/travelgatex/reference/enums/modetype",
      "description": "Buyer or Seller",
      "args": null
    },
    {
      "typeString": "[TrafficType!]",
      "name": "trafficType",
      "url": "/travelgatex/reference/enums/traffictype",
      "description": "To serch in Speed",
      "args": null
    },
    {
      "typeString": "[CloudEnvironment!]",
      "name": "cloudEnvironments",
      "url": "/travelgatex/reference/enums/cloudenvironment",
      "description": "List of environments",
      "args": null
    },
    {
      "typeString": "ID!",
      "name": "apiCode",
      "url": "/travelgatex/reference/scalars/id",
      "description": "List of API codes",
      "args": null
    },
    {
      "typeString": "[ID!]",
      "name": "operationCodes",
      "url": "/travelgatex/reference/scalars/id",
      "description": "List of operation codes",
      "args": null
    },
    {
      "typeString": "[OperationType!]",
      "name": "operationTypes",
      "url": "/travelgatex/reference/enums/operationtype",
      "description": "List of operation types",
      "args": null
    },
    {
      "typeString": "[String!]",
      "name": "sessionIDs",
      "url": "/travelgatex/reference/scalars/string",
      "description": "List of sessions",
      "args": null
    },
    {
      "typeString": "[ID!]",
      "name": "accessCodes",
      "url": "/travelgatex/reference/scalars/id",
      "description": "List of access codes",
      "args": null
    },
    {
      "typeString": "[ID!]",
      "name": "clientCodes",
      "url": "/travelgatex/reference/scalars/id",
      "description": "List of client codes",
      "args": null
    },
    {
      "typeString": "[ID!]",
      "name": "clientNames",
      "url": "/travelgatex/reference/scalars/id",
      "description": "List of client names",
      "args": null
    },
    {
      "typeString": "[ID!]",
      "name": "supplierCodes",
      "url": "/travelgatex/reference/scalars/id",
      "description": "List of supplier codes",
      "args": null
    },
    {
      "typeString": "[ID!]",
      "name": "groups",
      "url": "/travelgatex/reference/scalars/id",
      "description": "List of groups",
      "args": null
    },
    {
      "typeString": "[ErrorFilter!]",
      "name": "errors",
      "url": "/travelgatex/reference/inputobjects/errorfilter",
      "description": "List of error codes",
      "args": null
    },
    {
      "typeString": "Int",
      "name": "first",
      "url": "/travelgatex/reference/scalars/int",
      "description": "Works like LIMIT of SQL",
      "args": null
    },
    {
      "typeString": "ReferenceFilter",
      "name": "reference",
      "url": "/travelgatex/reference/inputobjects/referencefilter",
      "description": "Locator to search in Insights",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "type",
  "typename": "LoggingLegacyFilterInput",
  "hideGithubLink": true
}
Filters needed to do a search.
From (Start date of search - YYYY-MM-DD HH:mm:ss), To (End date of search - YYYY-MM-DD HH:mm:ss), 
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
