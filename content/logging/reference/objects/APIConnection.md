{
  "title": "APIConnection",
  "description": "",
  "weight": 1,
  "fields": [
    {
      "typeString": "[APIEdge]",
      "name": "edges",
      "url": "/stats/reference/objects/apiedge",
      "description": "",
      "isDeprecated": false,
      "args": null
    },
    {
      "typeString": "PageInfo!",
      "name": "pageInfo",
      "url": "/stats/reference/objects/pageinfo",
      "description": "",
      "isDeprecated": false,
      "args": null
    }
  ],
  "requireby": [
    {
      "name": "OrganizationData",
      "description": "",
      "url": "/stats/reference/objects/organizationdata"
    },
    {
      "name": "GroupCommonData",
      "description": "",
      "url": "/stats/reference/interfaces/groupcommondata"
    },
    {
      "name": "ResourceData",
      "description": "",
      "url": "/stats/reference/objects/resourcedata"
    },
    {
      "name": "ProductData",
      "description": "",
      "url": "/stats/reference/objects/productdata"
    },
    {
      "name": "GroupData",
      "description": "",
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
