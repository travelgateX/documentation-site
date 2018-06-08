{
  "title": "StatsData",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "Access!",
      "name": "access",
      "url": "/travelgatex/reference/objects/access",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Client!",
      "name": "client",
      "url": "/travelgatex/reference/objects/client",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "from",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "From date of search",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "to",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "To date of search",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Ratios!",
      "name": "ratios",
      "url": "/travelgatex/reference/objects/ratios",
      "description": "Details of look to quote and look to book.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[OperationDetailed!]",
      "name": "operations",
      "url": "/travelgatex/reference/objects/operationdetailed",
      "description": "",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[ServiceOperationType!]",
          "name": "type",
          "url": "/travelgatex/reference/enums/serviceoperationtype",
          "description": ""
        }
      ]
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "Stats",
      "description": "The service used to access the stats of every connection that uses the HUB",
      "url": "/travelgatex/reference/objects/stats"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "StatsData"
}

The data returned by a `Stats` query.

{{% alert theme="info" %}}In GraphQL, `!` indicates mandatory fields that must be included in your queries. For more information about GraphQL, check out our <a href="https://docs.travelgatex.com/learning-graphql/">Learning GraphQL guides</a>.{{% /alert %}}

## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
