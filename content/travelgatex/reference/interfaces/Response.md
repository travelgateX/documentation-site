{
  "title": "Response",
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
      "description": "Data sent & received in the supplierâ€™s original format.",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "errors",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that lead the service to stop",
      "isDeprecated": "",
      "args": null
    },
    {
      "typeString": "[Warning!]",
      "name": "warnings",
      "url": "/travelgatex/reference/objects/warning",
      "description": "Potentially harmful situations or errors that do not stop the service",
      "isDeprecated": "",
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "interface",
  "typename": "Response"
}
## GraphQL Schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
