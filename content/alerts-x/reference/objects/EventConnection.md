{
  "title": "EventConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[EventEdge]",
      "name": "edges",
      "url": "/alerts-x/reference/objects/eventedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/alerts-x/reference/objects/pageinfo",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "Int!",
      "name": "count",
      "url": "/alerts-x/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AlertData",
      "description": null,
      "url": "/alerts-x/reference/objects/alertdata"
    },
    {
      "name": "EventData",
      "description": "Event data",
      "url": "/alerts-x/reference/objects/eventdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "EventConnection",
  "hideGithubLink": true
}
Events list
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
