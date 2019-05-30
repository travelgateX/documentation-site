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
      "isDeprecated": true,
      "args": [
        {
          "typeString": "TrafficType!",
          "name": "trafficType",
          "url": "/stats/reference/enums/traffictype",
          "description": null
        }
      ],
      "deprecationReason": "Added hits fields to be able to calculate ratios at client side.",
      "descriptionSplitted": {
        "date": "2019-04-08",
        "first": "deprecated from",
        "second": "Added hits fields to be able to calculate ratios at client side."
      },
      "deprecationDate": "2019-04-08",
      "typeName": "StatsData"
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
    },
    {
      "typeString": "Int!",
      "name": "hits",
      "url": "/stats/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "TrafficType!",
          "name": "trafficType",
          "url": "/stats/reference/enums/traffictype",
          "description": null
        },
        {
          "typeString": "StatsInfoTypes!",
          "name": "statusType",
          "url": "/stats/reference/enums/statsinfotypes",
          "description": null
        },
        {
          "typeString": "OperationType!",
          "name": "operationType",
          "url": "/stats/reference/enums/operationtype",
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
