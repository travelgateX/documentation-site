{
  "title": "ProductConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[ProductEdge]",
      "name": "edges",
      "url": "/travelgatex/reference/objects/productedge",
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
      "name": "OrganizationData",
      "description": "",
      "url": "/travelgatex/reference/objects/organizationdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "ProductConnection"
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
