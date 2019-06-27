{
  "title": "SupplierConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[SupplierEdge]",
      "name": "edges",
      "url": "/travelgatex/reference/objects/supplieredge",
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
    },
    {
      "name": "GroupCommonData",
      "description": "",
      "url": "/travelgatex/reference/interfaces/groupcommondata"
    },
    {
      "name": "GroupData",
      "description": "",
      "url": "/travelgatex/reference/objects/groupdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "SupplierConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
