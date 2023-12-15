{
  "title": "ConnectionConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[ConnectionEdge]",
      "name": "edges",
      "url": "/travelgatex/reference/objects/connectionedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/travelgatex/reference/objects/pageinfo",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "[AdviseMessage!]",
      "name": "adviseMessage",
      "url": "/travelgatex/reference/objects/advisemessage",
      "description": null,
      "isDeprecated": false,
      "args": [
        {
          "typeString": "[AdviseMessageLevel]",
          "name": "level",
          "url": "/travelgatex/reference/enums/advisemessagelevel",
          "description": null
        }
      ]
    }
  ],
  "requireby": [
    {
      "name": "StatsQuery",
      "description": null,
      "url": "/travelgatex/reference/objects/statsquery"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ConnectionConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
