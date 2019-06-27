{
  "title": "HotelSearch",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "String",
      "name": "context",
      "url": "/hotelx/reference/scalars/string",
      "description": "Indicates the context of the response.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatsRequest",
      "name": "stats",
      "url": "/hotelx/reference/objects/statsrequest",
      "description": "Application stats in string format",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String!",
          "name": "token",
          "url": "/hotelx/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "AuditData",
      "name": "auditData",
      "url": "/hotelx/reference/objects/auditdata",
      "description": "Data sent and received in the supplier's native format.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "CriteriaSearch",
      "name": "requestCriteria",
      "url": "/hotelx/reference/objects/criteriasearch",
      "description": "Request Criteria",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[HotelOptionSearch!]",
      "name": "options",
      "url": "/hotelx/reference/objects/hoteloptionsearch",
      "description": "List of options returned according to the request.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "errors",
      "url": "/hotelx/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Warning!]",
      "name": "warnings",
      "url": "/hotelx/reference/objects/warning",
      "description": "Potentially harmful situations or errors that won't force the service to abort",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXQuery",
      "description": "",
      "url": "/hotelx/reference/objects/hotelxquery"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelSearch",
  "hideGithubLink": true
}
Results from Avail Hotel; contains all the available options for a given date and itinerary
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
