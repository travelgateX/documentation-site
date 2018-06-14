{
  "title": "ResourceConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[ResourceEdge]",
      "name": "edges",
      "url": "/travelgatex/reference/objects/resourceedge",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/travelgatex/reference/objects/pageinfo",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "deprecatedFields": null,
  "requireby": [
    {
      "name": "AdminQuery",
      "description": "The admin query root of TravelgateX's GraphQL interface.",
      "url": "/travelgatex/reference/objects/adminquery"
    },
    {
      "name": "RoleData",
      "description": "",
      "url": "/travelgatex/reference/objects/roledata"
    },
    {
      "name": "APIData",
      "description": "",
      "url": "/travelgatex/reference/objects/apidata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ResourceConnection"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
