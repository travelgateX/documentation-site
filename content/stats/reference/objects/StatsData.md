{
  "title": "StatsData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Access!",
      "name": "access",
      "url": "/stats/reference/objects/access",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Client!",
      "name": "client",
      "url": "/stats/reference/objects/client",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "from",
      "url": "/stats/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "to",
      "url": "/stats/reference/scalars/datetime",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Ratios!",
      "name": "ratios",
      "url": "/stats/reference/objects/ratios",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[OperationDetailed!]",
      "name": "operations",
      "url": "/stats/reference/objects/operationdetailed",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ServiceOperationType!]",
          "name": "type",
          "url": "/stats/reference/enums/serviceoperationtype",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Stats",
      "description": null,
      "url": "/stats/reference/objects/stats"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "StatsData",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
