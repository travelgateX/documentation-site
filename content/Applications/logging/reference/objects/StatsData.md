{
  "title": "StatsData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Access!",
      "name": "access",
      "url": "/stats/reference/objects/access",
      "description": "Owner access",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Client!",
      "name": "client",
      "url": "/stats/reference/objects/client",
      "description": "Owner client",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "from",
      "url": "/stats/reference/scalars/datetime",
      "description": "From date of search",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "to",
      "url": "/stats/reference/scalars/datetime",
      "description": "To date of search",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Ratios!",
      "name": "ratios",
      "url": "/stats/reference/objects/ratios",
      "description": "Ratios details",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[OperationDetailed!]",
      "name": "operations",
      "url": "/stats/reference/objects/operationdetailed",
      "description": "Stats information per operation",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ServiceOperationType!]",
          "name": "type",
          "url": "/stats/reference/enums/serviceoperationtype",
          "description": ""
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "Stats",
      "description": "The service used to access the stats of every connection that uses the HUB",
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
