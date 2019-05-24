{
  "title": "AlertConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[AlertEdge]",
      "name": "edges",
      "url": "/travelgatex/reference/objects/alertedge",
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
      "typeString": "Int!",
      "name": "count",
      "url": "/travelgatex/reference/scalars/int",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "AlertsXQuery",
      "description": null,
      "url": "/travelgatex/reference/objects/alertsxquery"
    },
    {
      "name": "AlertData",
      "description": null,
      "url": "/travelgatex/reference/objects/alertdata"
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
