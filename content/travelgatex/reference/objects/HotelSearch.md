{
  "title": "HotelSearch",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "context",
      "url": "/travelgatex/reference/scalars/string",
      "description": "Indicates the context of the response.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "RequestStats",
      "name": "stats",
      "url": "/travelgatex/reference/objects/requeststats",
      "description": "Application stats in string format",
      "isDeprecated": "",
      "args": [
        {
          "typeString": "String!",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": "",
          "isDeprecated": ""
        }
      ]
    },
    {
      "typeString": "AuditData",
      "name": "auditData",
      "url": "/travelgatex/reference/objects/auditdata",
      "description": "Data sent & received in the supplier's native format.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "CriteriaSearch!",
      "name": "requestCriteria",
      "url": "/travelgatex/reference/objects/criteriasearch",
      "description": "Request Criteria",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[HotelOptionSearch!]",
      "name": "options",
      "url": "/travelgatex/reference/objects/hoteloptionsearch",
      "description": "List of options returned according to the request.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "errors",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that will lead the service to abort",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Warning!]",
      "name": "warnings",
      "url": "/travelgatex/reference/objects/warning",
      "description": "Potentially harmful situations or errors that won't force the service to abort",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Search",
      "description": "Available options for a given date and itinerary. It does not filter different classes, times or\nfares. It will always retrieve all results returned by the suppliers. The availability request is very straight\nforward.",
      "url": "/travelgatex/reference/objects/search"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelSearch"
}
Results of Avail Hotel. Contains all the available options for a given date and itinerary.
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
