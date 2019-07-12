{
  "title": "Stats",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "ID!",
      "name": "code",
      "url": "/stats/reference/scalars/id",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "StatsData",
      "name": "statsData",
      "url": "/stats/reference/objects/statsdata",
      "description": "The data returned by a Stats query.",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/stats/reference/objects/advisemessage",
      "description": "List of advise messages.",
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/stats/reference/enums/advisemessagelevel",
          "description": ""
        }
      ]
    },
    {
      "typeString": "DateTime!",
      "name": "createdAt",
      "url": "/stats/reference/scalars/datetime",
      "description": "Create date",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "DateTime!",
      "name": "updatedAt",
      "url": "/stats/reference/scalars/datetime",
      "description": "Update date",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "StatsEdge",
      "description": "",
      "url": "/stats/reference/objects/statsedge"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "Stats",
  "hideGithubLink": true
}
The service used to access the stats of every connection that uses the HUB
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
