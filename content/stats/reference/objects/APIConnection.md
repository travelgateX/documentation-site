{
  "title": "APIConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[APIEdge]",
      "name": "edges",
      "url": "/stats/reference/objects/apiedge",
      "description": null,
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/stats/reference/objects/pageinfo",
      "description": null,
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "OrganizationData",
      "description": null,
      "url": "/stats/reference/objects/organizationdata"
    },
    {
      "name": "GroupCommonData",
      "description": null,
      "url": "/stats/reference/interfaces/groupcommondata"
    },
    {
      "name": "ResourceData",
      "description": null,
      "url": "/stats/reference/objects/resourcedata"
    },
    {
      "name": "ProductData",
      "description": null,
      "url": "/stats/reference/objects/productdata"
    },
    {
      "name": "GroupData",
      "description": null,
      "url": "/stats/reference/objects/groupdata"
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
