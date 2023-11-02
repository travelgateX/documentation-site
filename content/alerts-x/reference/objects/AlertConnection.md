{
  "title": "AlertConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[AlertEdge]",
      "name": "edges",
      "url": "/alerts-x/reference/objects/alertedge",
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
      "name": "AlertsXQuery",
      "description": null,
      "url": "/alerts-x/reference/objects/alertsxquery"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "AlertConnection",
  "hideGithubLink": true
}
Alert list
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
