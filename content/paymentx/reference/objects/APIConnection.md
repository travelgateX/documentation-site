{
  "title": "APIConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[APIEdge]",
      "name": "edges",
      "url": "/paymentx/reference/objects/apiedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/paymentx/reference/objects/pageinfo",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "GroupData",
      "description": null,
      "url": "/paymentx/reference/objects/groupdata"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/paymentx/reference/interfaces/groupcommondata"
    },
    {
      "name": "ResourceData",
      "description": null,
      "url": "/paymentx/reference/objects/resourcedata"
    },
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/paymentx/reference/objects/organizationdata"
    },
    {
      "name": "ProductData",
      "description": null,
      "url": "/paymentx/reference/objects/productdata"
    }
  ],
  "enumValues": null,
  "operator": "type",
  "typename": "APIConnection",
  "hideGithubLink": true
}
## GraphQL schema definition

{{% graphql-schema-type %}}

## Fields

{{% graphql-field %}}

## Required by

{{% graphql-require-by %}}
