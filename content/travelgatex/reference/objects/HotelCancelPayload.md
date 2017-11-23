{
  "title": "HotelCancelPayload",
  "description": "",
  "weight": 1,
  "fields": [
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
      "typeString": "HotelCancelDetail",
      "name": "cancellation",
      "url": "/travelgatex/reference/objects/hotelcanceldetail",
      "description": "Information about cancel",
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
      "description": "Potentially  harmful situations or errors that won't force the service to abort",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "Mutation",
      "description": "Mutations are operations that change or update data in the server.",
      "url": "/travelgatex/reference/schema/mutation"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelCancelPayload"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
