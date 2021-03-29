{
  "title": "Response",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "StatsRequest",
      "name": "stats",
      "url": "/hotel-x/reference/objects/statsrequest",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "String!",
          "name": "token",
          "url": "/hotel-x/reference/scalars/string",
          "description": null
        }
      ]
    },
    {
      "typeString": "AuditData",
      "name": "auditData",
      "url": "/hotel-x/reference/objects/auditdata",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "errors",
      "url": "/hotel-x/reference/objects/error",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Warning!]",
      "name": "warnings",
      "url": "/hotel-x/reference/objects/warning",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": null,
  "enumValues": null,
  "operator": "interface",
  "typename": "Response",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}
