{
  "title": "HotelQuote",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "StatsRequest",
      "name": "stats",
      "url": "/travelgatex/reference/objects/statsrequest",
      "description": "Application stats in string format",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String!",
          "name": "token",
          "url": "/travelgatex/reference/scalars/string",
          "description": ""
        }
      ]
    },
    {
      "typeString": "AuditData",
      "name": "auditData",
      "url": "/travelgatex/reference/objects/auditdata",
      "description": "Data sent & received in the supplier's native format.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "HotelOptionQuote",
      "name": "optionQuote",
      "url": "/travelgatex/reference/objects/hoteloptionquote",
      "description": "Information about quote.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "errors",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that will lead the service to abort",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Warning!]",
      "name": "warnings",
      "url": "/travelgatex/reference/objects/warning",
      "description": "Potentially  harmful situations or errors that won't force the service to abort",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "HotelXQuery",
      "description": "",
      "url": "/travelgatex/reference/objects/hotelxquery"
    },
    {
      "name": "Quote",
      "description": "Returns the total price and cancellation policies of the Option selected in the previous step (Search).",
      "url": "/travelgatex/reference/objects/quote"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "HotelQuote"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Require by

{{% graphql-require-by %}}
