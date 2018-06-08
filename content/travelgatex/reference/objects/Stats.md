{
  "title": "Stats",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/travelgatex/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatsData",
      "name": "statsData",
      "url": "/travelgatex/reference/objects/statsdata",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[Error!]",
      "name": "error",
      "url": "/travelgatex/reference/objects/error",
      "description": "Errors that abort services",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date created",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/travelgatex/reference/scalars/datetime",
      "description": "Date updated",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "StatsEdge",
      "description": "",
      "url": "/travelgatex/reference/objects/statsedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Stats"
}
The service used to access the stats of every connection that uses the HUB.

{{% alert theme="info" %}}In GraphQL, `!` indicates mandatory fields that must be included in your queries. For more information about GraphQL, check out our <a href="https://docs.travelgatex.com/learning-graphql/">Learning GraphQL guides</a>.{{% /alert %}}

## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
