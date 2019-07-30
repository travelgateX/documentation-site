{
  "title": "HotelBookPayload",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "StatsRequest",
      "name": "stats",
      "url": "/hotel-x/reference/objects/statsrequest",
      "description": "Application stats in string format",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String!",
          "name": "token",
          "url": "/hotel-x/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "AuditData",
      "name": "auditData",
      "url": "/hotel-x/reference/objects/auditdata",
      "description": "Data sent and received in the supplier's native format.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelBookingDetail",
      "name": "booking",
      "url": "/hotel-x/reference/objects/hotelbookingdetail",
      "description": "Information about booking",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "errors",
      "url": "/hotel-x/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Warning!]",
      "name": "warnings",
      "url": "/hotel-x/reference/objects/warning",
      "description": "Potentially harmful situations or errors, but ones that will not forcibly abort the service",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "HotelXMutation",
      "description": "",
      "url": "/hotel-x/reference/objects/hotelxmutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelBookPayload",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
